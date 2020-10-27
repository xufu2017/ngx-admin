<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />

    <div v-if="showAppInstallBanner">
      <template>
        <div>
          <button class="install-btn" v-on:click="installPWA">Install App</button>
         
        </div>
      </template>
    </div>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {
  BeforeInstallPromptEvent,
  UserChoice
} from "./models/before-install-promp";
@Component({})
export default class App extends Vue {
  private showAppInstallBanner = false;
  private deferredInstallPrompt: BeforeInstallPromptEvent | null = null;

  mounted() {
    const neverShowAppInstallBanner = localStorage.getItem(
      "neverShowAppInstallBanner"
    );
    debugger; // eslint-disable-line
    if (!neverShowAppInstallBanner) {
      window.addEventListener(
        "beforeinstallprompt",
        this.saveBeforeInstallPromptEvent
      );
    }
  }

  installPWA(event: Event): void {
    debugger; // eslint-disable-line
    this.showAppInstallBanner = false;
    const srcElement: HTMLElement = event.srcElement as HTMLElement;
    if (this.deferredInstallPrompt) {
      // Add code show install prompt & hide the install button.
      this.deferredInstallPrompt.prompt();
      // Hide the install button, it can't be called twice.
      // Log user response to prompt.
      this.deferredInstallPrompt.userChoice.then((choice: UserChoice) => {
        if (choice.outcome === "accepted") {
          console.log("User accepted the install prompt", choice);
        } else {
          srcElement.classList.remove("hidden");
          console.log("User dismissed the install prompt", choice);
        }
        this.deferredInstallPrompt = null;
      });
    }
  }

  saveBeforeInstallPromptEvent(event: BeforeInstallPromptEvent): void {
    this.deferredInstallPrompt = event;
    setTimeout(() => {
      this.showAppInstallBanner = true;
    }, 200);
  }

  neverShowAppInstallBanner() {
    this.showAppInstallBanner = false;
    localStorage.set("neverShowAppInstallBanner", true);
  }
  // Add code to save event & show the install button.
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

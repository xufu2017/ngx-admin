<template>
  <main class="home">
    <div class="empty-state">
      <figure>
        <svg>
          <use href="#folder" />
        </svg>
      </figure>

      <h3>Get started creating a new report by clicking the button below</h3>

      <router-link to="/About" class="button white">Get started</router-link>


<div v-for="data in dataSchema" v-bind:key="data.id">
  <component :is="getComponentName(data.controlType)" v-bind="{controlSchema:data}" v-model="data._value"></component>
</div>
    </div>
  </main>
</template>

<script lang="ts">

import Vue from "vue";
import Component from "vue-class-component";

import { namespace } from "vuex-class";
import {
  TextBoxControlModel,
  ControlType,
  RadioControlModel,
  ListControlModel
} from "@/types/BaseControl";
import TextInput from "@/components/forms/Text.vue";
import CheckBoxInput from "@/components/forms/Checkbox.vue";
import DropDownInput from "@/components/forms/Dropdown.vue";
import json from "../data.json";
const dampReportModule = namespace("ui");

@Component({
  components: {
    TextInput,
    CheckBoxInput,
    DropDownInput
  },
})
export default class Home extends Vue {
  private dataSchema=json.filter(x=>x.controlType==1 || x.controlType==4).map(element => 
    (element.controlType==1)?new TextBoxControlModel(element):new ListControlModel(element)
  );

  getComponentName(controlType:number):string{
    return (controlType===1)?"TextInput":"DropDownInput";}
  @dampReportModule.Action updateTitle: any;

  created() {
    this.updateTitle("Report Details");
  }
}
</script>

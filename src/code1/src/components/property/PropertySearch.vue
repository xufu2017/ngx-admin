<template>
  <div>
    <div class="input-container">
      <label for="propertyAddress">Property Address</label>
      <input
        type="text"
        placeholder="e.g Victoria Street Shipley BD17 7BN"
        @input="changeInput($event)"
      />

      <span class="search-btn" @click="handleSearch">Search</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class PropertySearch extends Vue {
  @Prop({ default: "" })
  keyword: string;

  handleSearch() {
    this.$emit("handleSearch");
  }

  changeInput(evt: any) {
    this.$emit("changeInput", evt.target.value);
  }
}
</script>
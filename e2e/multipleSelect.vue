<template>
  <multiselect
    v-model="dataArray"
    v-bind:options="options"
    v-bind:multiple="true"
    label="attributeLookupValueName"
    track-by="attributeLookupValueName"
    placeholder="Select at least one option..."
    v-on:input="updateValueAction"
  />
</template>

<script lang="ts">

interface AttributeLookupValue {
  attributeLookupValueId: number;
  attributeLookupValueName: string;
}

import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MultiSel extends Vue {
  @Prop({ type: String, default: "" })
  readonly value: string | null | undefined;

  @Prop({ required: true, type: Array, default: [] })
  readonly options!: Array<AttributeLookupValue>;

  dataArray: Array<any> = [];

  updateValueAction(myval: any) {
    let calculateVal = "";
    if (myval) {
      calculateVal = myval.map((x: any) => x.attributeLookupValueId).join(",");
    }
    this.$emit("input", calculateVal);
  }

  created() {
    const initialArray = !this.value
      ? []
      : this.value.split(",").map((x) => parseInt(x, 10));

    this.dataArray = this.options.filter((x) =>
      initialArray.includes(x.attributeLookupValueId)
    );
  }
}
</script>

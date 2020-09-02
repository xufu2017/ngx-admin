<template>
     <div>
     <label>{{this.controlSchema._controlSchema.name}}</label>
     <div>
  <select v-model="model" v-bind="$attrs">
  <option v-for="option in this.controlSchema._controlSchema.options" :key="option.id" :value="option.id">
                    {{option.value}}
                </option>
</select>
     </div>

    </div>
</template>

<script lang="ts">
import { Component, Prop, Model, Vue } from 'vue-property-decorator'
import {ListControlModel} from '../../types/BaseControl'
import BaseInput from './Baseinput'


@Component({
  inheritAttrs: false
})
export default class DropDownInput extends BaseInput<ListControlModel>
{ 
}

</script>
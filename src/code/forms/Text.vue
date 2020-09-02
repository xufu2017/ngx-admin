<template>
    <div>
     <label class="formlabel">{{this.controlSchema._controlSchema.name}}</label>
          <input type="text"
         v-model="model"
          v-bind="$attrs"
        />
    </div>
</template>

<script lang="ts">
import { Component} from 'vue-property-decorator'
import BaseInput from './Baseinput'
import { TextBoxControlModel } from '@/types/BaseControl'


@Component({
  inheritAttrs: false
})
export default class TextInput extends BaseInput<TextBoxControlModel>{
}
</script>
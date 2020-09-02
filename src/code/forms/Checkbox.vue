<template>
     <div class="input-container has-checkbox"
                           >
     <label>{{this.controlSchema._controlSchema.name}}</label>
     <div>
               <input type="checkbox"
        v-on="listeners"
        v-model="value"/>
               <input type="checkbox"/>
<input type="radio" name="gender" id="male" value="male"><br>
     </div>

    </div>
</template>

<script lang="ts">
import { Component, Prop, Model, Vue } from 'vue-property-decorator'
import {RadioControlModel} from '../../types/BaseControl'
import BaseInput from './Baseinput'


@Component({
  inheritAttrs: false
})
export default class CheckBoxInput extends BaseInput<RadioControlModel>
{ 
}

</script>
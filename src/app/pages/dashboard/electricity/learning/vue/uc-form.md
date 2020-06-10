# form systax

v-model:lazy
trim

## 
textarea use v-model instead rather than {{message}} between the tag

syntax to keep the line break:
<p style="white-space: pre">{{message}}</p>


Checkbox: 
use in array

the both control need to be set in the same v-model
data should be []

Radio button
gender:'male'

v-model="gener'

select control
priority:''select'
<option v-for="pro in proties " :selected="priority==='Medium'">
v-model should be set on select tag and it will override the selected in option
  
 ## custom ctrl
 
 :value="userdata.email"
 @input="userdata.email=$event.target.vaule"
 
 create switch compoent can use v-model
 
 v-model is waiting for event : this.$emit('input',isOn);
 
 <template>
    <div id="on"
         @click="switched(true)"
         :class="{active:value}">On</div>
      <div id="off"
         @click="switched(false)"
         :class="{active:!value}">Off</div>
  </template>
 
 props:['value'],
 methods:{

  switched(isOn){
    this.$emit('input',isOn)}
    

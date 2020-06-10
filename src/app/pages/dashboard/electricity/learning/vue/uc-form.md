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
    
## submit
  @click.prevent
## Directives
  v- stand for directives
  v-text
  v-html
  
  Hooks
    bind(el,binding,vnode) --once directive is attached
      el & binding should be used as read only
    inserted(el,binding,vnode) -- inserted in parent node
    update(el,binding,vnode,oldvnode) -- once component is updated (without children)
    ComponentUpdated(el,binding,vnode,oldvnode) once component is updted(with children)
    
    unbind(el,binding,vnoce) -- Once directive is removed
    
   Vue.directive('highlight,{
    bind(el,binding,vnode){
      var delay=0;
      if(binding.modifiers['delayed']){
        delay=3000;}
      setTimeout(()=>{
        if(binding.arg=='background'){
          el.style.backgroudcolor=binding.value;
          }else{
          el.style.color=binding.value;}
         },delay);
    
    <p v-highlight:background.delayed="'red'">Color this</p>
    
      
  Vue.directive('highlight',{
  
  }); -- v-highlight
  
  
## event bus

export const eventbus=new Vue({ -- need to be before the main vue declaration
  methods:{
    changeAge(age){
      this.$emit('agewasEdited',age);
})

eventbus.$emit('ageedited',this.userage)

in the component, need import -- import {eventbus} from '../main'; 

created(){
eventbus.$on('ageedited',(age)=>{
  this.userAge=age;
  });

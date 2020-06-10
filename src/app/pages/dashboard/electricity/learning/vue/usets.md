# TS for uve

--setup
  vue typescript npm install --save-dev vue-class-component
  

## component as class
  import Component from 'vue-class-component'
  
  add decorator
  @Component({})
  export default class Hello extends Vue{
    --data properties
    message:string='Hello'
    //data(){
    //  return {
    //  message:'hello vue'}}
    
    --computed properties
    get fullMessage(){
      return `${this.message} from Ts`
      }
    
    --hook are written as methods
    created(){
      console.log('created');
    }
  }
  
## extemd vue component
   .. extends Parent
   the same method: use super -- to contain the parent functions
   
   --hook
   both parent and child method been created
   
   


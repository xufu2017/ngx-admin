# Generic Tips

## generic tips
 genric based on interface
 interface Lengthy{length:number;}
 
 fucntion countanddesc<T extends Lengthy>(element : T):[T,string]{ ... }
 
 generic based on key
 function extractAndConvert<T textends object, U extendss keyof T>(object T: key:U){
  reutrn obj[key]}
  exam: extranctandConvert({name:'max'}, 'name');
  
  
  class DataStorage<T>{
  private data:r[]=[];
  //add
  //remove//
  removeItem(item:T){this.data.splice(this.data.indexof(item),1);
  //get 
    getItems()=>[...this.data]
  }
  
  beware of reference type ** not prieitive type
   need pass same object to remove item
   
  partial type: note 
  
  defind interface CourseGoal{title: string}
  function createGoal(title: string,descrition:string,...): CourseGoal{
 
  let courseGoal:Paritial<CourseGoal>={};
  return courseGoal as CourseGoal;}
  
  
   readonly
   
   const names:Readonly<string[]?=['Max','Anna'];
   
   ## Generic Type & Union Type
   
   
   

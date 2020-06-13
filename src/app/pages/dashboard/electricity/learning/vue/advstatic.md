# Tips

not null
const container=document.getElementById('app-container')!;
**!mean not null so container will have the intelliense

## make property and index readonly

interface User{
readonly id: number ,
name:string
}

Set ReadonlyArray<string>= [...]

type Primitive=
  | boolean
  | number
  | string
  | symbol
  | null
  | undefined

const obj:Object={}
const obj:{[key: string]:any}={}

obj.hasOwnProperty("foo")
obj.foo="bar"

While {break, return or throw) to out of loop

Never type


function assertNever(value:never):never{
  throw Error('unecpected error '${value}');
}

function prettyPrint(size ShirtSize){
switch(size){
  case ShirtSize.S: return 'a';
  case ...
  default:return assertNever(size);
}
}

## function overload

function reverse(string: string): string;
function reverse<T>(array:T[]):T[];

suggest use const enum MediaTypes generate less code

let autoc : 'on'|'off'
autoc='on'

const shallowCopy={...todo}
-- which is not the same

*** note the object array keep the same (when updatign) when do the copy using {...}


## query properties and key of and lookup types

interface TODO{
id: number;
text:string;
completed:bool};

function prop(obj;TODO, key:'id'|'text'|'completed')=>obj[key];
function prop(obj;TODO, key:typdof TODO)=>obj[key];

--index type or look up type
function prop<T,K extends keyof T>(obj:T,key:K)=>obj[key]

const origin=Object.freeze<Point>({x:0,y:0});

ley pont:Partial<Point>;

type nullable<T>={
  [P in keyof T]:T[p] | null;};
  
let point:nullable<Point>;

type nullablePont=Partial<nullable<Point>>;












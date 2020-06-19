# collection tips

type ItemPreview = Pick<Item, "name" | "image">

function pick<T, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K> {
  const ret: any = {};
  keys.forEach(key => {
    ret[key] = obj[key];
  })
  return ret;
}

const o = {a: 1, b: '2', c: 3}
const picked = pick(o, 'b', 'c');

function pick<T extends object, K extends keyof T> (base: T, ...keys: K[]): Pick<T, K> {
  const entries = keys.map(key => ([key, base[key]]));
  return Object.fromEntries(entries);
}

-- less items
type PriceLessItem=Omit<Item, "price"|"currency">

const user={
name:'jogn dko",
age:26} as const

// not updatable (compiler)

same as array object
const skills=['js', 'ts'] as const;

can use readonly in property -- only update the first level

ReadonlyArray to make array not updatable

type user= {
name: string;
age?:number;
gender?:string;}

--required will make the ? fields requiured as well
const user:Required<User>={
  ...,
  age..
  gender..
  }


--Null object patttern
legalCase.documents = legalCase.documents || [];


--speical case:

refactor function using enum to using interface class base approach

## shorten the if using const veriable

## validation check using pipleline

class ConditionsPipe {
private _conditions: IPipeableCondition[];
constructor(conditions: IPipeableCondition[]) {
this._conditions = conditions;
}
check(): boolean {
return this._conditions.every(p => p.check());
}
}

const strategies: Function[] = [];
strategies[OrderStatus.Pending] = this.processPendingOrder;
strategies[OrderStatus.Shipped] = this.processShippedOrder;
strategies[OrderStatus.Cancelled] = this.processCancelledOrder;
strategies[OrderStatus.Returned] = this.processReturnedOrder;
// Execute the appropriate strategy.
strategies[order.getStatus()]();








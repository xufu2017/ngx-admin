# arrow func

array.sort(a, b => a - b);

some programmers have taken to using the comma operator to avoid using the
verbose form if they have just two or three things to do in the function. Recall that
the comma operator is one of JavaScript’s odder operators: it evaluates its left-hand
operand, throws away the resulting value, and then evaluates its right-hand operand
and takes that value as its result. Example:
function returnSecond(a, b) {
 return a, b;
}
console.log(returnSecond(1, 2)); // 2
The result of return a, b; is the value of b.

 It lets you do more than one thing in the
expression used by the concise form, by using an expression in the left-hand operand
that has a side effect. Let’s say you have an array of “handlers” wrapped around
“items,” and you want to transform each entry by passing the handler into an
unregister function, and then pass its item into a register function and remember the result. With a traditional function you’d do this:
handlers = handlers.map(function(handler) {
  unregister(handler);
  return register(handler.item);
});

handlers = handlers.map(handler => {
 unregister(handler);
 return register(handler.item);
});

But some programmers will use a concise arrow function instead, using (or perhaps
abusing) the comma operator:
handlers = handlers.map(handler =>
 (unregister(handler), register(handler.item))
);


But since arrow functions can’t be constructors, they don’t get a prototype property:
function traditional() {
}
const arrow = () => {
};
console.log("prototype" in traditional); // true
console.log("prototype" in arrow); // false
const a = ["Joe", "Mohammed", "María"];
const b = a.map(name => {name: name}); // Doesn't work
console.log(b);

The answer is to wrap the object literal in parentheses so that the parser doesn’t see a curly brace just
after the arrow, and knows you’re using the concise form:

Thingy.prototype.delayedPrepAndShow = function() {
 this.showTimer = setTimeout(() => {
 this.prep();
 this.show();
 }, this.showDelay);
};
const a = ["Joe", "Mohammed", "María"];
const b = a.map(name => ({name: name})); // Works
console.log(b);

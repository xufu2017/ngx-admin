# vue.set

Vue does not allow dynamically adding new root-level reactive properties to an already created instance. However, it’s possible to add reactive properties to a nested object using the

Vue.set(vm.someObject, 'b', 2)

You can also use the vm.$set instance method, which is an alias to the global Vue.set:

this.$set(this.someObject, 'b', 2)

Sometimes you may want to assign a number of properties to an existing object, for example using Object.assign() or _.extend(). However, new properties added to the object will not trigger changes. In such cases, create a fresh object with properties from both the original object and the mixin object:

// instead of `Object.assign(this.someObject, { a: 1, b: 2 })`
this.someObject = Object.assign({}, this.someObject, { a: 1, b: 2 })

# For Arrays
Vue cannot detect the following changes to an array:

**When you directly set an item with the index, e.g. vm.items[indexOfItem] = newValue**
**When you modify the length of the array, e.g. vm.items.length = newLength**

var vm = new Vue({
  data: {
    items: ['a', 'b', 'c']
  }
})
vm.items[1] = 'x' // is NOT reactive
vm.items.length = 2 // is NOT reactive

vm.items[indexOfItem] = newValue, but will also trigger state updates in the reactivity system:

// Vue.set
Vue.set(vm.items, indexOfItem, newValue)
// Array.prototype.splice
vm.items.splice(indexOfItem, 1, newValue)

You can also use the vm.$set instance method, which is an alias for the global Vue.set:

vm.$set(vm.items, indexOfItem, newValue)
To deal with caveat 2, you can use splice:

vm.items.splice(newLength)

Vue.nextTick(function () {
  vm.$el.textContent === 'new message' // true
})

methods: {
    updateMessage: function () {
      this.message = 'updated'
      console.log(this.$el.textContent) // => 'not updated'
      this.$nextTick(function () {
        console.log(this.$el.textContent) // => 'updated'
      })
    }
  }
  
  Since $nextTick() returns a promise, you can achieve the same as the above using the new ES2017 async/await syntax:
  
  methods: {
  updateMessage: async function () {
    this.message = 'updated'
    console.log(this.$el.textContent) // => 'not updated'
    await this.$nextTick()
    console.log(this.$el.textContent) // => 'updated'
  }
}

expect(wrapper.vm.$data.infoShown).toBeTruthy();

set data and property

describe("Properties", () => {
			  it("returns the string in normal order if reversed property is not true", () => {
			    cmp.setData({ inputValue: "Yoo" });
			    expect(cmp.vm.reversedInput).toBe("Yoo");
			  });
			  it("returns the reversed string if reversed property is true", () => {
			    cmp.setData({ inputValue: "Yoo" });
			    cmp.setProps({ reversed: true });
			    expect(cmp.vm.reversedInput).toBe("ooY");
			  });
			});

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

## watchers

**skeletion**
describe("Form.test.js", () => {
  let cmp;
  describe("Watchers - inputValue", () => {
    let spy;
    beforeAll(() => {
      spy = jest.spyOn(console, "log"); //spy oh method
    });
    afterEach(() => {
      spy.mockClear();
    });
   }

**Notice that we're changing inputValue in the raw way by accessing the vm property. If we wanted to do it this way, we'd need to use the vm.$nextTick (https://vuejs.org/v2/api/#vm-nextTick) function to defer code to the next update cycle:**

it("is called with the new value in other cases", done => {
  cmp.vm.inputValue = "foo";
  cmp.vm.$nextTick(() => {
    expect(spy).toBeCalled();
    done();
  });
});

it("is called with the new value in other cases", () => {
  cmp.setData({ inputValue: "foo" });
  expect(spy).toBeCalled();
});

it("is not called if values are the same", () => {
  cmp = shallowMount(Form, {
    data: () => ({ inputValue: "foo" })
  });
  cmp.setData({ inputValue: "foo" });
  expect(spy).not.toBeCalled();
});

## Testing Computed Properties
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

## Testing Property Existence
it("has a message property", () => {
  cmp = createCmp({ message: "hey" });
  expect(cmp.hasProp("message", "hey")).toBeTruthy();
});

it("has no cat property", () => {
  cmp = createCmp({ cat: "hey" });
  expect(cmp.hasProp("cat", "hey")).toBeFalsy();
});

**However, in this case, the test will fail because Vue has non-props attributes (https://vuejs.org/v2/guide/components.html#Non-Prop-Attributes). This sets it to the root of the Message component, thus being recognized as a prop, so the test will then return true. Changing it to toBeTruty will make it pass for this example:**

it("has no cat property", () => {
  cmp = createCmp({ cat: "hey" });
  expect(cmp.hasProp("cat", "hey")).toBeTruthy();
});

### default value

props: {
  message: String,
  author: {
    type: String,
    default: 'Paco'
  }
  
it("Paco is the default author", () => {
  cmp = createCmp({ message: "hey" });
  expect(cmp.hasProp("author", "Paco")).toBeTruthy();
});

### Asserting Properties Validation
props: {
  message: {
    type: String,
    required: true,
    validator: message => message.length > 1
  }
 
Whenever a validation rule is not fulfilled, Vue shows a console.error

it("message is of type string", () => {
  let spy = jest.spyOn(console, "error");
  cmp = createCmp({ message: 1 });
  expect(spy).toBeCalledWith(
    expect.stringContaining("[Vue warn]: Invalid prop")
  );
  spy.mockReset(); // or mockRestore() to completely remove the mock
});

**Fortunately, there is an easier way to do it, which is by checking vm.$options. Here's where Vue stores the component options expanded. By expanded, I mean that you can define your properties in different ways:**

describe('Validation', () => {
      const message = createCmp().vm.$options.props.message
      it('message is of type string', () => {
       expect(message.type).toBe(String)
      })
      it('message is required', () => {
        expect(message.required).toBeTruthy()
      })
      
      it('message has at least length 2', () => {
        expect(message.validator && message.validator('a')).toBeFalsy()
        expect(message.validator && message.validator('aa')).toBeTruthy()
      })
    })
    
## Custom Events

◦Asserting that an event gets triggered after an action
◦Checking that an event listener calls when it gets triggered

methods: {
    handleClick() {
      this.$emit("message-clicked", this.message)
    }
  }
 
in message list component,
 @message-clicked="handleMessageClick"
 
 methods: {
    handleMessageClick(message) {
      console.log(message)
    }
  },

### message
describe("Events", () => {
    beforeEach(() => {
      cmp = createCmp({ message: "Cat" });
    });
    it("calls handleClick when click on message", () => {
      const spy = spyOn(cmp.vm, "handleClick");
      cmp.update(); // Forces to re-render, applying changes on template
      const el = cmp.find(".message").trigger("click");
      expect(cmp.vm.handleClick).toBeCalled();
    });
    
**See the cmp.update(). When we change things that are used in the template – handleClick, in this case – and we want the template to apply the changes, we need to use the update function.**

    it("calls handleClick when click on message", () => {
    cmp.vm.handleClick = jest.fn();
    cmp.update();
    const el = cmp.find(".message").trigger("click");
    expect(cmp.vm.handleClick).toBeCalled();
  });

**We can make it even easier by using the setMethods helper that the official tools provide us with:**

  it("calls handleClick when click on message", () => {
    const stub = jest.spy();
    cmp.setMethods({ handleClick: stub });
    cmp.update();
    const el = cmp.find(".message").trigger("click");
    expect(stub).toBeCalled();
  });
  });

**Using setMethods is the suggested way to do it, since it is an abstraction that official tools give us in case the Vue internals change.**


## Testing that the Custom Event message-clicked Is Emitted

We can directly call the handleClick method, and use a Jest Mock function in combination with the Vue vm $on method:

it("triggers a message-clicked event when a handleClick method is called", () => {
  const stub = jest.fn();
  cmp.vm.$on("message-clicked", stub);
  cmp.vm.handleClick();
  expect(stub).toBeCalledWith("Cat");
});

**See that, here, we're using toBeCalledWith, so we can assert exactly which parameters we expect, making the test even more robust. That's not to say we're not using cmp.update() here since we're making no changes that need to propagate to the template.**

### Testing that @message-clicked Triggers an Event

For custom events, we cannot use the trigger method, since it's just for DOM events. However, we can emit the event ourselves, by getting the Message component and using its vm.$emit method. So, add the following test to MessageList.test.js:

it("Calls handleMessageClick when @message-click happens", () => {
  const stub = jest.fn();
  cmp.setMethods({ handleMessageClick: stub });
  cmp.update();
  const el = cmp.find(Message).vm.$emit("message-clicked", "cat");
  expect(stub).toBeCalledWith("cat");
});

## The Wrapper Object

Wrapper is the main object of vue-test-utils. It is the type returned by the mount, shallowMount, find, and findAll functions.

find and findAll accept a selector as an argument, which can be a CSS selector and a Vue component as well.

expect(cmp.find(".message").element).toBeInstanceOf(HTMLElement);
let el = cmp.find(".message span").element;

expect(cmp.is("ul")).toBe(true);
expect(cmp.find(Message).isVueInstance()).toBe(true);
expect(cmp.find(Message).attributes().class).toBe("message");

**The exists, isEmpty, and attributes methods come in handy for this.**
expect(cmp.find(Message).classes()).toContain("message");
 expect(cmp.find(Message).attributes().style).toBe("padding-top: 10px;");
 
## Mocking External Module Dependencies

For testing the onSubmit method:
  ◦We don't want to call axios.get actual method.
  *We want to check it is calling axios (but not the real one) and that it returns a promise.
  *That promise callback should set this.results to the promised result.
  
This is probably one of the hardest things to test when you have external dependencies, plus those return promises that do things inside. What we need to do is to mock the external dependencies

jest.mock("dependency-path", implementationFunction);
jest.mock("something", jest.fn);

jest.mock("axios", () => ({
  get: jest.fn()
}));

it("Calls axios.get", () => {
  cmp.vm.onSubmit("an");
  expect(axios.get).toBeCalledWith(
    "https://jsonplaceholder.typicode.com/posts?q=an"
  );
});

jest.mock("axios", () => ({
  get: jest.fn(() => Promise.resolve({ data: 3 }))
}));

it("Calls axios.get and checks promise result", async () => {
  const result = await cmp.vm.onSubmit("an");
  expect(result).toEqual({ data: [3] });
  expect(cmp.vm.results).toEqual([3]);
  expect(axios.get).toBeCalledWith(
    "https://jsonplaceholder.typicode.com/posts?q=an"
  );
});

### Keeping Mocks Externalized

Jest allows us to have all our mocks separated into their own JavaScript file by placing them under a __mocks__ folder and keeping the tests as clean as possible.
So, we can take the jest.mock... block from the top of the Form.test.js file out to its own file:

So, we can take the jest.mock... block from the top of the Form.test.js file out to its own file:

// test/__mocks__/axios.js

module.exports = {
  get: jest.fn(() => Promise.resolve({ data: [3] }))
};

beforeEach(() => {
  cmp = shallowMount(Form);
  jest.resetModules();
  jest.clearAllMocks();
});

## Test Vue.js Slots

 <ul class="list-messages">
    <slot></slot>
  </ul>
 
 ### $children and $slots
 
 Vue components have two instance variables that are useful for accessing slots:
 
  ◦$children: An array of Vue component instances of the default slot
  ◦$slots: An object of VNodes mapping all the slots defined in the component instance
 
 const children = this.$slots.default
  .map(vnode => vnode.componentInstance)
  .filter(cmp => !!cmp);
  
 ### Testing Slots
 
 beforeEach(() => {
  cmp = shallowMount(MessageList, {
    slots: {
      default: '<div class="fake-msg"></div>'
    }
  });
});

it("Messages are inserted in a ul.list-messages element", () => {
  const list = cmp.find("ul.list-messages");
  expect(list.findAll(".fake-msg").length).toBe(1);
});

slots: {
    default: AnyComponent // or [AnyComponent, AnyComponent]
  }

beforeEach(() => {
  const messageWrapper = {
    render(h) {
      return h(Message, { props: { message: "hey" } });
    }
  };
  cmp = shallowMount(MessageList, {
    slots: {
          default: messageWrapper
    }
  });
});
it("Messages are inserted in a MessageList component", () => {
  const list = cmp.find(MessageList);
  expect(list.find(Message).isVueInstance()).toBe(true);
});

### Testing Named Slots

<header slot="header">
        Awesome header
      </header>

So, we can start by verifying that the header slot is rendered within the <header class="list-header"> element, and that it renders default text when no header slot is passed by. In MessageList.test.js, we have the following:
  
  
it("Header slot renders a default header text", () => {
  const header = cmp.find(".list-header");
  expect(header.text().trim()).toBe("This is a default header");
  
  const header = component.find(".list-header");
  expect(header.text().trim()).toBe("What an awesome header");
});

it("Header slot is rendered withing .list-header", () => {
  const component = shallowMount(MessageList, {
    slots: {
      header: "<div>What an awesome header</div>"
    }
  });
  
### Testing Contextual Slot Specs

 If you pass component instances as slots, just as we're doing in the default slot with Message, you can test the functionality related to them.
 
 it("Message length is higher than 5", () => {
  const messages = cmp.findAll(Message);
  messages.wrappers.forEach(c => {
    expect(c.vm.message.length).toBeGreaterThan(5);
 });
});

findAll returns an object containing an array of wrappers where we can access its vm component instance property. This test will fail because the message has a length of 3, so go to the beforeEach function and make it longer:

beforeEach(() => {
  const messageWrapper = {
    render(h) {
      return h(Message, { props: { message: "hey yo" } });
    }
  };
});


## Enhance Jest Configuration with Module Aliases

### Webpack Aliases

resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      vue$: "vue/dist/vue.esm.js"
    }
  }
  
resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": path.join(__dirname, "..", "src")
    }
  }
  
**moduleNameMapper**

{
  "jest": {
    "moduleNameMapper": {
      "@(.*)$": "<rootDir>/src/$1",
      "^vue$": "vue/dist/vue.common.js"
    }
  }
}


**@(.*)$: Whatever starts with `@`, and continues with literally whatever ((.*)$) till the end of the string, grouping it by using the parenthesis.
**@<rootDir>/src/$1: <rootDir> is a special Jest word, meaning the root directory. Then, we map it to src and, with $1, we append the whatever clause from the (.*) statement.**


  

import { VueConstructor } from 'vue/types/vue';
import Vuex from 'vuex'
import { shallowMount, createLocalVue, Wrapper, ThisTypedShallowMountOptions,  RouterLinkStub } from '@vue/test-utils';
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import validationExtensions from "@/utils/validation-extensions";
import Vue from 'vue';
import { mount } from '@vue/test-utils';

export const mountComponentWithStore=<V extends Vue>(
    component: VueConstructor<V>,
    storeOptions: object = {},
    mountOptions: ThisTypedShallowMountOptions<V> = {}
  ): Wrapper<V> => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    const store = new Vuex.Store({
      ...storeOptions
    });
  
    return shallowMount(component, {
      store,
      localVue,
      ...mountOptions
    })
  };

export const mountValidationWithStore=<V extends Vue>(
  component: VueConstructor<V>,
  storeOptions: object = {},
  mountOptions: ThisTypedShallowMountOptions<V> = {}
): Wrapper<V> => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.component("ValidationObserver", ValidationObserver);
  localVue.component("ValidationProvider", ValidationProvider);
  validationExtensions.register();
  const store = new Vuex.Store({
    ...storeOptions
  });

  return mount(component, {
    store,
    localVue,
    ...mountOptions
  })
};

  export const createContextMock = (props = {}) => ({
    // @ts-ignore
    commit: jest.fn(),
    // @ts-ignore
    dispatch: jest.fn(),
    // @ts-ignore
    ...props,
  });
  
  function setDefaultMock(wrapper: Wrapper<any>) {
    return {
      $router: {
        push: jest.fn().mockImplementation(() => {
          wrapper.vm.$data.redirected = true;
        }),
      },
      $toasted: {
        error: jest.fn().mockImplementation(() => {
          wrapper.vm.$data.errorShown = true;
        }),
        success: jest.fn().mockImplementation(() => {
          wrapper.vm.$data.successShown = true;
        }),
        show: jest.fn().mockImplementation(() => {
          wrapper.vm.$data.infoShown = true;
        }),
      },
    };
  }
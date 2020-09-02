import {
    mount,
    MountOptions,
    Wrapper,
  } from '@vue/test-utils'

describe('BaseInput.ts', () => {
    // type Instance = InstanceType<typeof BaseInput>
    // let mountFunction: (options?: MountOptions<Instance>) => Wrapper<Instance>
    // beforeEach(() => {
    //   mountFunction = (options?: MountOptions<Instance>) => {
    //     return mount(BaseInput, {
    //       // https://github.com/vuejs/vue-test-utils/issues/1130
    //       sync: false,
    //       ...options,
    //     })
    //   }
    // })
    it('should set initial', () => {
        expect(1).toBe(1)
    });
})
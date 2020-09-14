import {
    mount,
    MountOptions,
    Wrapper,
  } from '@vue/test-utils'

  import PropertySearch from '@/components/property/PropertySearch.vue'
  describe('PropertySearch', () => {
      type Instance=InstanceType<typeof PropertySearch>
      let mountFunction: (options?: MountOptions<Instance>) => Wrapper<Instance>

      beforeEach(() => {
        mountFunction = (options = {}) => {
          return mount(PropertySearch, options)
        }
      })

      it('should render property search', () => {
        const wrapper = mountFunction({})
        let label = wrapper.find('label')
        expect(label.element.textContent).toBe('Property Address')
        let input = wrapper.find('input')
        expect(input.element.getAttribute('type')).toBe('text')

    })
 
    it('should pass events to internal input field',async () => {
        const wrapper = mountFunction({})
         wrapper.find('input').trigger('input');
         expect(wrapper.emitted('changeInput')).toBeTruthy();
      })

  });
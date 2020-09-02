import { shallowMount, mount } from '@vue/test-utils'
import TextInput from '@/components/forms/Text.vue'
import { TextBoxControlModel } from '@/types/BaseControl'
describe('Text Input', () => {
    it('render label text when passed', () => {
        const label='Bedroom 3 Cause'
        const wrapper=shallowMount(TextInput,{
            propsData:new TextBoxControlModel({
                "id": 245,
                "name": "Bedroom 3 Cause",
                "controlType": 1,
                "options": [       
                ]
            })
        })

        expect(wrapper.contains('.formlabel')).toBe(true)
    });
});

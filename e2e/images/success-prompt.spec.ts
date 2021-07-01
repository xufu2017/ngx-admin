import SuccessPrompt from "@/components/property/SuccessPrompt.vue";
import EmptyState from "@/components/elements/EmptyState.vue";
import flushPromises from "flush-promises";
import { mountComponentWithStore } from "../../../utils";
import AssetsPortalRepositoryMock from "../../../mocks/assets-portal-repository";
import PropertyMockStore from "../../../mocks/property-mock-store";
import ComponentMockStore from "../../../mocks/component-mock-store";

describe('SuccessPrompt.vue', () => {
    let mockStore: any;
    let mocks: any;
    let data: any;
    let propertyModule: any;

    beforeEach(async () => {
        propertyModule = await new PropertyMockStore().getStore({
            getters: {
                componentUpdates: () => [],
              },
        });
        mockStore = {
            modules: {
              property: propertyModule,
            },
          };
    });

    it("is a Vue instance", async () => {
        const wrapper = mountComponentWithStore(SuccessPrompt, mockStore);
        expect(wrapper.isVueInstance).toBeTruthy();
        expect(wrapper.findComponent(EmptyState).exists()).toBeTruthy();
      });
});
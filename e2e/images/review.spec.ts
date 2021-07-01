import Review from "@/components/property/review.vue";
import EmptyState from "@/components/elements/EmptyState.vue";
import flushPromises from "flush-promises";
import { mountComponentWithStore } from "../../../utils";
import AssetsPortalRepositoryMock from "../../../mocks/assets-portal-repository";
import PropertyMockStore from "../../../mocks/property-mock-store";
import ComponentMockStore from "../../../mocks/component-mock-store";
import { ComponentAttribute } from "@/models/component-attribute";

describe("Review.vue", () => {
    let mockStore: any;
    let componentModule: any;
    let propertyModule: any;
    let mocks: any;
    let data: any;
    let componentList: any;

    beforeEach(async () => {
        propertyModule = await new PropertyMockStore().getStore({
            getters: {
                componentUpdates: () => [],
            },
        });
        componentModule = await new ComponentMockStore().getStore();
        mockStore = {
            modules: {
                property: propertyModule,
                component: componentModule,
            },
        };
        data = () => {
            return {
                assetsPortalRepository: AssetsPortalRepositoryMock(),
            };
        };
    });

    it("is a Vue instance", async () => {
        const wrapper = mountComponentWithStore(Review, mockStore, {
            mocks,
            data,
        });
        expect(wrapper.isVueInstance).toBeTruthy();
        expect(wrapper.findComponent(EmptyState).exists()).toBeTruthy();
    });

    it('when created and no data in propertyModule should be no li children', async () => {
        const wrapper = mountComponentWithStore(Review, mockStore, {
            mocks,
            data,
        });

        await flushPromises();
        const reviewItems = wrapper.findAll(".review-items>li");
        expect(reviewItems.length).toBe(0);
    });

    describe('when componentUpdates has data', () => {
        beforeEach(async () => {
            propertyModule = await new PropertyMockStore().getStore({
                getters: {
                    componentUpdates: () => [
                        {
                            assetId: 1,
                            componentElementId: 1,
                            name: "item 1",
                            attributeDetails: Array(10).fill(null).map(() => new ComponentAttribute())
                        },
                        {
                            assetId: 1,
                            componentElementId: 2,
                            name: "item 2",
                            attributeDetails: Array(3).fill(null).map(() => new ComponentAttribute())
                        }
                    ],
                },
            });
            mockStore = {
                modules: {
                    property: propertyModule,
                    component: componentModule,
                },
            };

        });
        it('should display in review items', async () => {
            const wrapper = mountComponentWithStore(Review, mockStore, {
                mocks,
                data,
            });
            await flushPromises();
            const reviewItems = wrapper.findAll(".review-items>li");
            expect(reviewItems.length).toBe(2);
            expect(wrapper.findComponent(EmptyState).exists()).toBeFalsy();
        });

        it('can display correct component name', async () => {
            const wrapper = mountComponentWithStore(Review, mockStore, {
                mocks,
                data,
            });
            const displayEditDialog = jest.fn();
            const displayRemoveDialog = jest.fn();
            await flushPromises();
            wrapper.setMethods({ displayEditDialog, displayRemoveDialog })
            const componentName = wrapper.findAll(".review-items>li>.content>p");
            expect(componentName.length).toBe(2);
            expect(componentName.at(0).text()).toBe("item 1");
            expect(componentName.at(1).text()).toBe("item 2");
            const actionlist = wrapper.findAll(".review-items>li>.has-actions");
            expect(actionlist.length).toBe(2);
            const actionBtns = actionlist.at(0).findAll('button')
            expect(actionBtns.length).toBe(2);
            expect(actionBtns.at(0).attributes("aria-label")).toBe("Edit item 1 component");
            expect(actionBtns.at(1).attributes("aria-label")).toBe("Remove item 1 component");
            actionBtns.at(0).trigger("click");
            expect(displayEditDialog).toBeCalled();
            actionBtns.at(1).trigger("click");
            expect(displayRemoveDialog).toBeCalled();
        });
    });
});

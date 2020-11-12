import { OptionDto } from "./../../../src/models/dtos/option-dto";
import { PropertyDto } from "./../../../src/models/dtos/property-dto";
import { mountValidationWithStore } from "../../utils";
import Customer from "@/views/Customer.vue";
import DampReportMockStore from "../../mocks/dampReportStore";
import CustomerMockStore from "../../mocks/customerMockStore";
import PropertyMockStore from "../../mocks/propertyMockStore";
import { createLocalVue, mount, RouterLinkStub } from "@vue/test-utils";
import flushPromises from "flush-promises";
import { DampComponentDto } from "@/models/dtos/damp-component-dto";
import Vuex from "vuex";
import validationExtensions from "@/utils/validation-extensions";
describe("Customer.vue", () => {
  let selectedPropertyAddress = new PropertyDto();
  let dampReportStore: any;
  let customerStore: any;
  let propertyStore: any;

  //test code start here
  const localVue = createLocalVue();
  localVue.use(Vuex);
  validationExtensions.register();
  //

  beforeEach(async () => {
    selectedPropertyAddress.contactName = "test user";
    selectedPropertyAddress.contactNumber = "01111111";
    dampReportStore = await new DampReportMockStore().getStore({
      getters: {
        dampComponentIndex: jest
          .fn()
          .mockReturnValue(new Array<DampComponentDto>()),
        dampComponentIndexLoaded: jest
          .fn()
          .mockReturnValue(new Array<DampComponentDto>()),
      },
      actions: {
        updateActivePropertyCustomerTab: jest.fn(),
      },
    });
    customerStore = await new CustomerMockStore().getStore({
      actions: {
        updateCustomerDetails: jest.fn(),
      },
    });
    propertyStore = await new PropertyMockStore().getStore({
      getters: {
        selectedPropertyAddress: jest
          .fn()
          .mockReturnValue(selectedPropertyAddress),
      },
    });
  });

  afterEach(async () => {
    jest.clearAllMocks();
    await flushPromises();
  });
  it("makes correct calls to stores on created hook", async () => {
    const mockStore = {
      modules: {
        dampReport: dampReportStore,
        customer: customerStore,
        property: propertyStore,
      },
    };
    const wrapper = await mountValidationWithStore(Customer, mockStore, {
      stubs: {
        RouterLink: RouterLinkStub,
      },
      propsData: {
        dampComponent: [],
      },
    });

    await flushPromises();
    expect(wrapper.exists()).toBeTruthy();
    expect((wrapper.vm as any).weatherConditions.id).toBe(0);
    expect((wrapper.vm as any).weatherConditions.options.length).toBe(0);
  });

  it("check the binding of form", async () => {
    const mockStore = {
      modules: {
        dampReport: dampReportStore,
        customer: customerStore,
        property: propertyStore,
      },
    };

    let dampComponent = [
      {
        id: 108,
        name: "Weather Conditions",
        options: [
          {
            id: 1,
            value: "test1",
          },
        ],
      },
    ];

    const wrapper = await mountValidationWithStore(Customer, mockStore, {
      stubs: {
        RouterLink: RouterLinkStub,
      },
      propsData: {
        dampComponent: dampComponent,
      },
    });

    await flushPromises();
    // const items = wrapper.find(".items");
    // expect(items.exists()).toBeTruthy();
    const weatherCondition = wrapper.find(".items");
    expect(weatherCondition.exists()).toBeTruthy();
    //expect(wrapper.find("#weatherConditions").findAll("option").length).toBe(2);
  });

  it("test validation when click save", async () => {
    const mockStore = {
      modules: {
        dampReport: dampReportStore,
        customer: customerStore,
        property: propertyStore,
      },
    };

    let dampComponent = [
      {
        id: 108,
        name: "Weather Conditions",
        options: [
          {
            id: 1,
            value: "test1",
          },
        ],
      },
    ];

    const wrapper = mountValidationWithStore(Customer, mockStore, {
      stubs: {
        RouterLink: RouterLinkStub,
      },
      propsData: {
        dampComponent: dampComponent,
      },
      methods: {
        saveCustomerDetails:()=> jest.fn()
      },
    });

    jest.spyOn(wrapper.vm as any, "saveCustomerDetails");

    const contactNumber = wrapper.find("#contactNumber");
    const contactName = wrapper.find("#contactName");
    const inspectionDate = wrapper.find("#inspectionDate");
    const saveBtn = wrapper.find(".actions").find("button");
    expect(contactName.attributes("required")).toBe("required");
    expect(contactNumber.attributes("required")).toBe("required");
 
    saveBtn
      .trigger("click");
    
    expect((wrapper.vm as any).saveCustomerDetails).toHaveBeenCalledTimes(0);

    contactName.setValue("test abcd");
    contactNumber.setValue("123");
    inspectionDate.setValue("2000-10-01");
    saveBtn
      .trigger("click");
    expect(saveBtn.attributes("disabled")).toBe(undefined);
    expect((wrapper.vm as any).saveCustomerDetails).toHaveBeenCalledTimes(0);
  });
});

import { Commit } from "vuex";
import { getPropertyList, PropertySearchParams } from "@/api/index";
import { PropertyState, PropertyItem } from "./interface";

const state: PropertyState = {
  propertyList: [],
  currentProperty: {
    Id: 0,
    PropertyCode: "",
    AddressLine1: "",
    AddressLine2: "",
    Type: "",
    Area: "",
    PropertyStatus: "",
  },
  detailsShow: false,
};

const mutations = {
  setPropertyList: (state: PropertyState, list: Array<PropertyItem>) =>
    (state.propertyList = list),
  setDetailShow: (state: PropertyState, bool: boolean) =>
    (state.detailsShow = bool),
};

const getters = {
  produPropertyListctList: (state: PropertyState) => state.propertyList,
};

const actions = {
  async fetchPropertyList(
    { state, commit }: { state: any; commit: Commit },
    { params, loadMore }: { params: PropertySearchParams; loadMore?: boolean }
  ) {
    const requestData = await getPropertyList(params);
    const currentData = loadMore
      ? state.propertyList.concat(requestData.data)
      : requestData.data;
    commit("setPropertyList", currentData);
  },
};
export default {
  state,
  mutations,
  getters,
  actions,
};

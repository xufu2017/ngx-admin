<template>
  <div class="product-wrap">
    <PropertySearch
      :keyword="propertySearchParams.searchCriteria"
      @handleSearch="handleSearch"
      @changeInput="changeInput"
    />

    <div v-for="item in propertyList" :key="item.Id">
      <span>{{item.AddressLine1}}</span>
    </div>

    <span class="search-btn" @click="loadMore">Load more</span>
    <div>
      <!--PropertyDetail v-if="detailShow" /-->
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import PropertySearch from "@/components/property/PropertySearch.vue";
import { State, Mutation, Action, namespace } from "vuex-class";
import { PropertyItem } from "@/store/property/interface";

const dampReportModule = namespace("ui");

@Component({
  components: {
    PropertySearch,
  },
})
export default class PropertyList extends Vue {
  propertySearchParams = {
    searchCriteria: "",
    pageNumber: 1,
    pageSize: 5,
    totalRows: 0,
  };
  @State((state) => state.propertyList) propertyList: Array<PropertyItem>;
  @Mutation("setPropertyList") setPropertyList: Function;
  @Action("fetchPropertyList") fetchPropertyList: Function;

  @dampReportModule.Action updateTitle: any;

  changeInput(value: string) {
    this.propertySearchParams.searchCriteria = value;
  }

  handleSearch() {
    this.propertySearchParams.pageNumber = 1;
    this.setPropertyList([]);
    this.fetchPropertyListDispatch();
  }

  fetchPropertyListDispatch(loadMore = false) {
    this.fetchPropertyList({ params: this.propertySearchParams, loadMore });
  }

  async loadMore() {
    //if (this.detailShow) return;
    this.propertySearchParams.pageNumber++;
    await this.fetchPropertyList({
      params: this.propertySearchParams,
      loadMore: true,
    });
    setTimeout(() => {
      //may be used for scrolling done();
    });
  }

  async created() {
    await this.updateTitle("properties");
  }

  async mounted() {
    this.fetchPropertyListDispatch();
    await this.updateTitle("properties");
  }
}
</script>

<style lang="scss" scoped>
</style>
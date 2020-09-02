import { PropType } from "vue";
import { Component, Prop,Vue } from "vue-property-decorator";
import {
  IControlSchema
} from "../../types/BaseControl";

@Component({
  inheritAttrs: false,
})
export default class BaseInput<T extends IControlSchema> extends Vue {
  @Prop() public value!: PropType<any>;
  get model() {
    return this.value;
  }
  set model(value) {
    this.$emit("input", value);
  }
  @Prop() controlSchema!: T;
}

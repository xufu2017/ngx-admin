"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var vue_property_decorator_1 = require("vue-property-decorator");
var BaseInput = /** @class */ (function (_super) {
    __extends(BaseInput, _super);
    function BaseInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BaseInput.prototype, "listeners", {
        get: function () {
            return Object.assign({}, this.$listeners, {
                input: this.onInput
            });
        },
        enumerable: false,
        configurable: true
    });
    BaseInput.prototype.onInput = function (e) {
        var target = e.target;
        this.$emit(target.value, this.value);
        //console.log(target.value);
        //this.value=target.value
    };
    __decorate([
        vue_property_decorator_1.Prop()
    ], BaseInput.prototype, "controlSchema");
    __decorate([
        vue_property_decorator_1.Model('input')
    ], BaseInput.prototype, "value");
    BaseInput = __decorate([
        vue_property_decorator_1.Component({
            inheritAttrs: false
        })
    ], BaseInput);
    return BaseInput;
}(vue_property_decorator_1.Vue));
exports["default"] = BaseInput;
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
exports.__esModule = true;
exports.VideoControlModel = exports.ImageControlModel = exports.RadioControlModel = exports.MultiListControlModel = exports.ListControlModel = exports.DateControlModel = exports.NumberControlModel = exports.TextBoxControlModel = exports.ControlType = exports.BaseControlModel = void 0;
var BaseControlModel = /** @class */ (function () {
    function BaseControlModel(controlSchema) {
        this.initialize();
        this._controlSchema = controlSchema;
        this.validateSchema();
    }
    BaseControlModel.prototype.initialize = function () { };
    Object.defineProperty(BaseControlModel.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    BaseControlModel.prototype.validateSchema = function () {
        var controlTypeValidate = this._controlSchema.controlType === this.controlType;
        if (controlTypeValidate == false)
            throw new Error("data type not match with " + this._controlSchema.controlType + " with control type " + this.controlType);
        return controlTypeValidate;
    };
    return BaseControlModel;
}());
exports.BaseControlModel = BaseControlModel;
var ControlType;
(function (ControlType) {
    ControlType[ControlType["None"] = -1] = "None";
    ControlType[ControlType["Textbox"] = 1] = "Textbox";
    ControlType[ControlType["Number"] = 2] = "Number";
    ControlType[ControlType["Date"] = 3] = "Date";
    ControlType[ControlType["List"] = 4] = "List";
    ControlType[ControlType["MultiList"] = 5] = "MultiList";
    ControlType[ControlType["Radio"] = 6] = "Radio";
    ControlType[ControlType["Image"] = 7] = "Image";
    ControlType[ControlType["Video"] = 8] = "Video";
})(ControlType = exports.ControlType || (exports.ControlType = {}));
var TextBoxControlModel = /** @class */ (function (_super) {
    __extends(TextBoxControlModel, _super);
    function TextBoxControlModel(controlSchema) {
        var _this = _super.call(this, controlSchema) || this;
        _this.controlType = ControlType.Textbox;
        return _this;
    }
    TextBoxControlModel.prototype.initialize = function () {
        _super.prototype.initialize.call(this);
        this.controlType = ControlType.Textbox;
    };
    return TextBoxControlModel;
}(BaseControlModel));
exports.TextBoxControlModel = TextBoxControlModel;
var NumberControlModel = /** @class */ (function (_super) {
    __extends(NumberControlModel, _super);
    function NumberControlModel(controlSchema) {
        var _this = _super.call(this, controlSchema) || this;
        _this.controlType = ControlType.Number;
        return _this;
    }
    return NumberControlModel;
}(BaseControlModel));
exports.NumberControlModel = NumberControlModel;
var DateControlModel = /** @class */ (function (_super) {
    __extends(DateControlModel, _super);
    function DateControlModel(controlSchema) {
        var _this = _super.call(this, controlSchema) || this;
        _this.controlType = ControlType.Date;
        return _this;
    }
    return DateControlModel;
}(BaseControlModel));
exports.DateControlModel = DateControlModel;
var ListControlModel = /** @class */ (function (_super) {
    __extends(ListControlModel, _super);
    function ListControlModel(controlSchema) {
        var _this = _super.call(this, controlSchema) || this;
        _this.controlType = ControlType.List;
        if (_this._controlSchema.options.length) {
            throw new Error("list without options value " + _this._controlSchema.controlType + " with control type " + _this.controlType);
        }
        return _this;
    }
    return ListControlModel;
}(BaseControlModel));
exports.ListControlModel = ListControlModel;
var MultiListControlModel = /** @class */ (function (_super) {
    __extends(MultiListControlModel, _super);
    function MultiListControlModel(controlSchema) {
        var _this = _super.call(this, controlSchema) || this;
        _this.controlType = ControlType.MultiList;
        if (_this._controlSchema.options.length) {
            throw new Error("list without options value " + _this._controlSchema.controlType + " with control type " + _this.controlType);
        }
        return _this;
    }
    return MultiListControlModel;
}(BaseControlModel));
exports.MultiListControlModel = MultiListControlModel;
var RadioControlModel = /** @class */ (function (_super) {
    __extends(RadioControlModel, _super);
    function RadioControlModel(controlSchema) {
        var _this = _super.call(this, controlSchema) || this;
        _this.controlType = ControlType.Radio;
        return _this;
    }
    return RadioControlModel;
}(BaseControlModel));
exports.RadioControlModel = RadioControlModel;
var ImageControlModel = /** @class */ (function (_super) {
    __extends(ImageControlModel, _super);
    function ImageControlModel(controlSchema) {
        var _this = _super.call(this, controlSchema) || this;
        _this.controlType = ControlType.Image;
        return _this;
    }
    return ImageControlModel;
}(BaseControlModel));
exports.ImageControlModel = ImageControlModel;
var VideoControlModel = /** @class */ (function (_super) {
    __extends(VideoControlModel, _super);
    function VideoControlModel(controlSchema) {
        var _this = _super.call(this, controlSchema) || this;
        _this.controlType = ControlType.Video;
        return _this;
    }
    return VideoControlModel;
}(BaseControlModel));
exports.VideoControlModel = VideoControlModel;

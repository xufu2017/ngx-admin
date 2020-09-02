export default interface ControlSchema {
  id: number;
  name: string;
  options: Array<SelectOption>;
  controlType: ControlType;
}
export interface IControlSchema {
  readonly _controlSchema: ControlSchema;
}

export interface SelectOption {
  id: number;
  value: string;
}

export abstract class BaseControlModel<T> implements IControlSchema {
  readonly _controlSchema!: ControlSchema;
  protected abstract controlType: ControlType;
  _value!: T | null;
  constructor(controlSchema: ControlSchema) {
    this.initialize();
    this._controlSchema = controlSchema;

    this.validateSchema();
  }
  protected initialize(): void {}
  set value(value: T | null) {
    this._value = value;
  }

  get value(): T | null {
    return this._value;
  }
  validateSchema(): boolean {
    const controlTypeValidate =
      this._controlSchema.controlType === this.controlType;
    if (controlTypeValidate == false)
      throw new Error(
        `data type not match with ${this._controlSchema.controlType} with control type ${this.controlType}`
      );
    return controlTypeValidate;
  }
}

export enum ControlType {
  None=-1,
  Textbox = 1,
  Number = 2,
  Date = 3,
  List = 4,
  MultiList = 5,
  Radio = 6,
  Image = 7,
  Video = 8,
}

export class TextBoxControlModel extends BaseControlModel<string> {
  protected controlType: ControlType = ControlType.Textbox;

  protected initialize(): void {
    super.initialize();
    this.controlType = ControlType.Textbox;
  }
  constructor(controlSchema: ControlSchema) {
    super(controlSchema);
  }
}
export class ListControlModel extends BaseControlModel<string> {
  controlType: ControlType = ControlType.List;

  protected initialize(): void {
    super.initialize();
    this.controlType = ControlType.List;
  }

  constructor(controlSchema: ControlSchema) {
    super(controlSchema);
    if (! controlSchema.options.length) {
      throw new Error(
        `list without options value ${this._controlSchema.controlType} with control type ${this.controlType}`
      );
    }
  }
}
export class RadioControlModel extends BaseControlModel<boolean> {
  controlType: ControlType = ControlType.Radio;
  protected initialize(): void {
    super.initialize();
    this.controlType = ControlType.Radio;
  }
  constructor(controlSchema: ControlSchema) {
    super(controlSchema);
  }
}

export class NumberControlModel extends BaseControlModel<number> {
  controlType: ControlType = ControlType.Number;
  constructor(controlSchema: ControlSchema) {
    super(controlSchema);
  }
}
export class DateControlModel extends BaseControlModel<Date> {
  controlType: ControlType = ControlType.Date;
  constructor(controlSchema: ControlSchema) {
    super(controlSchema);
  }
}



export class MultiListControlModel extends BaseControlModel<string> {
  controlType: ControlType = ControlType.MultiList;
  constructor(controlSchema: ControlSchema) {
    super(controlSchema);
    if (this._controlSchema.options.length) {
      throw new Error(
        `list without options value ${this._controlSchema.controlType} with control type ${this.controlType}`
      );
    }
  }
}



export class ImageControlModel extends BaseControlModel<string> {
  controlType: ControlType = ControlType.Image;
  constructor(controlSchema: ControlSchema) {
    super(controlSchema);
  }
}

export class VideoControlModel extends BaseControlModel<string> {
  controlType: ControlType = ControlType.Video;
  constructor(controlSchema: ControlSchema) {
    super(controlSchema);
  }
}

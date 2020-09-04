export interface PropertyItem {
  Id: number;
  PropertyCode: string;
  AddressLine1: string;
  AddressLine2: string;
  Type: string;
  Area: string;
  PropertyStatus: string;
}

export interface PropertyState {
  propertyList: Array<PropertyItem>;
  currentProperty: PropertyItem;
  detailsShow: boolean;
}

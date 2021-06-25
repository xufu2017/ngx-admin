
import { ComponentAttribute, PendingAttribute, ComponentAttributesReference, ComponentAttributesGrp, GetAttributesDifference, getComponentRef } from './models/component-attribute';

let ComponentAttributes: ComponentAttributesGrp = {};

let componentRef: ComponentAttributesReference = {
    componentId: 1,
    attributeId: 1,
    name: "my name"
}
let componentRef1: ComponentAttributesReference = {
    componentId: 1,
    attributeId: 1,
    name: "my name"
}
let componentRef2: ComponentAttributesReference = {
    componentId: 2,
    attributeId: 2,
    name: "yourname"
}

let attributeData: Array<ComponentAttribute> = [{
    assetId: 1,
    componentElementId: 1,
    componentName: "roof",
    attributeName: "string",
    attributeDataTypeId: 1,
    attributeId: 1,
    attributeLookupValueName: "string",
    componentElementAttributeValue: "string",
    attributeLookupValueId: "string",
    status: "string"
}]
let attributeData2: Array<ComponentAttribute> = [{
    assetId: 2,
    componentElementId: 2,
    componentName: "roof2",
    attributeName: "string2",
    attributeDataTypeId: 2,
    attributeId: 2,
    attributeLookupValueName: "string",
    componentElementAttributeValue: "string34",
    attributeLookupValueId: "string",
    status: "string"
}]

function updateComponentAttributes(payload: [componentReference: ComponentAttributesReference, attributeData: Array<ComponentAttribute>]) {
    const lookUpkey = getComponentRef(payload[0]);
    let mappingAttributeValues = ComponentAttributes[lookUpkey];
    if (mappingAttributeValues) {
        mappingAttributeValues[2] = payload[1];
        GetAttributesDifference(lookUpkey, ComponentAttributes);
    }
    else {
        ComponentAttributes[lookUpkey] = [payload[0], payload[1], payload[1], []]
    }
}

updateComponentAttributes([componentRef, attributeData])
updateComponentAttributes([componentRef2, attributeData2])
updateComponentAttributes([componentRef, attributeData])
updateComponentAttributes([componentRef, attributeData2])

// for (let k in ComponentAttributes) {

//     console.log(k)
//     console.log(ComponentAttributes[k][3])
// }

let oop=Object.keys(ComponentAttributes).map(x=>ComponentAttributes[x][0].componentId==1 && ComponentAttributes[x][0].attributeId==1)

console.log(oop);

let filter1=Object.keys(ComponentAttributes).filter(x=>ComponentAttributes[x][3].length>0)
console.log(filter1);
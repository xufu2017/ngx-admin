export interface ComponentAttribute {
    assetId: number
    componentElementId: number
    componentName: string
    attributeName: string
    attributeDataTypeId: number
    attributeId: number
    attributeLookupValueName: string
    componentElementAttributeValue: string
    attributeLookupValueId: string
    status: string
}

export interface PendingAttribute {
    id: number
    pendingUpdateStatusId: number
    assetComponentId: number
    attributeDataType: number
    attributeId: number
    pendingAttributeStatusId: number
    attributeOptionId?: number
    image: string
    video: string
    oldValue: string
    newValue: string
    pendingAttributeRejectionReasonId: number
}

export interface ComponentAttributesReference {
    componentId: number;
    attributeId: number;
    name: string;
}

export function getComponentRef(attributeRef: ComponentAttributesReference): string {
    return `${attributeRef.componentId}-${attributeRef.attributeId}-${attributeRef.name}`.replace(' ', '_')
}

export type ComponentAttributesGrp = Record<string, [ComponentAttributesReference, Array<ComponentAttribute>, Array<ComponentAttribute>, Array<PendingAttribute>]>;

export function GetAttributesDifference(componentKey: string, componentGrp: ComponentAttributesGrp) {
    let mappingData = componentGrp[componentKey];
    if (mappingData && mappingData[1] && mappingData[2]) {
        let dataDifferences: Array<PendingAttribute> = [];
        mappingData[1].forEach((attr, i) => {
            if (attr.componentElementAttributeValue !== mappingData[2][i].componentElementAttributeValue) {
                dataDifferences.push({
                    id: 0,
                    pendingUpdateStatusId: 0,
                    assetComponentId: attr.componentElementId,
                    attributeDataType: attr.attributeDataTypeId,
                    attributeId: attr.attributeId,
                    pendingAttributeStatusId: 0,
                    attributeOptionId: 0,
                    image: '',
                    video: '',
                    oldValue: attr.componentElementAttributeValue,
                    newValue: mappingData[2][i].componentElementAttributeValue,
                    pendingAttributeRejectionReasonId: 0
                })
            }
        })
        mappingData[3] = dataDifferences;
    }
}
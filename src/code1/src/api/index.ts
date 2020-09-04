import HTTP from "../utils/http";

export interface PropertySearchParams{
    searchCriteria :string,
    pageNumber:number,
        pageSize:number,
        totalRows:number
}

export const getPropertyList = (params: PropertySearchParams) =>{
    if(params.searchCriteria==='')
   return HTTP.get(`AddressSearchViewList?_page=${params.pageNumber}&_limit=${params.pageSize}`);
    else
   return HTTP.get(`AddressSearchViewList?AddressLine1_like=${params.searchCriteria}&_page=${params.pageNumber}&_limit=${params.pageSize}`);
}
 


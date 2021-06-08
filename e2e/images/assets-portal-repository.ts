import { Controller } from "@/models/enum";
import HttpClient from "@/utils/http-client";
import { AssetSearchResult } from "../models/asset-search-result";
import { AssetsSearchQuery } from "../models/assets-search-query";


export default class AssetsPortalRepository extends HttpClient {

    getAssets = async (assetsSearchDto: AssetSearchResult): Promise<AssetsSearchQuery> =>
        await this.post<AssetsSearchQuery>(assetsSearchDto, Controller.AssetsSearch);

}

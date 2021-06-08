import Axios from "axios";
import MockAdapter from "axios-mock-adapter";
import AssetPortalRepository from "@/repositories/assets-portal-repository";
import { Controller } from "@/models/enum";

jest.mock("../../../src/utils/identity", () => {
    return jest.fn().mockImplementation(() => {
        return {
            getAccessToken: () => {
                return new Promise((resolve) => {
                    resolve("MockAccessToken");
                });
            },
            silentSignIn: () => {
                return new Promise((resolve) => {
                    resolve("MockAccessToken");
                });
            },
        };
    });
});
describe("unit test for asset portal repository", () => {
    const repo = new AssetPortalRepository();
    const mockAxios = new MockAdapter(Axios);
    beforeEach(async () => {
        mockAxios.reset();
        jest.clearAllMocks();
    });

    it("can fetch the property result through the property search when result found", async () => {
        let url = "";
        let body = '';
        const assetSearchdto = {
            propertyCode: '',
            addressLine1: '',
            addressLine2: '',
            addressLine3: '',
            addressLine4: '',
            postCode: 'BD18 1BX',
            propertyType: '',
            neighbourhoodDescription: '',
        };

        const searchList = {
            TotalItems: 0,
            ItemsPerPage: 8,
            CurrentPage: 1,
            TotalRows: 0,
            results: [
                {
                    Id: 673,
                    PropertyCode: "158",
                    AddressLine1: "Leeds Road/hall Lane 140/150-28/50",
                    AddressLine2: "Leeds Road",
                    PostCode: "BD18 1BX",
                    Type: "BLOCK",
                },
                {
                    Id: 684,
                    PropertyCode: "159",
                    AddressLine1: "Leeds Road/hall Lane 152/162-52/74",
                    AddressLine2: "Leeds Road",
                    PostCode: "BD18 1BX",
                    Type: "BLOCK",
                },
            ],
        };
        mockAxios
            .onPost(
                "Assets/Search",
                assetSearchdto
            ).reply(function (config) {
                url = config.url ? config.url : "";
                body = config.data ? config.data : "";

                return new Promise(function (resolve, reject) {
                    resolve([
                        200,
                        searchList
                    ]);
                });
            })
        const result = await repo.getAssets(assetSearchdto);
        await expect(result.results.length == 2);
        await expect(url).toBe("/Assets/Search");
    });
});

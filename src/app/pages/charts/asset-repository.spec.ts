import Axios from "axios";
import MockAdapter from "axios-mock-adapter";
import AssetsRepository from "@/repositories/assets-repository";
import { DampComponentDto } from "@/models/dtos/damp-component-dto";
import { JsonConvert } from "json2typescript";
describe("unit test for asset repository", () => {
  const repo = new AssetsRepository();
  const mockAxios = new MockAdapter(Axios);
  const jsonConvert = new JsonConvert();
  beforeEach(async () => {
    mockAxios.reset();
    jest.clearAllMocks();
  });

  it("can retrieve asset repository", async () => {
    let url = "";
    let dampcomponentList = new Array<DampComponentDto>();
    const dampcomponentdto = new DampComponentDto();
    (dampcomponentdto.id = 1),
      (dampcomponentdto.name = "test"),
      (dampcomponentdto.options = []);

    dampcomponentList.push(dampcomponentdto);
    mockAxios.onGet("/Assets/DataSchema").reply(function(config) {
      url = config.url ? config.url : "";
      return new Promise(function(resolve, reject) {
        resolve([200, jsonConvert.serialize([dampcomponentdto])]);
      });
    });

    const result = await repo.getDampComponent();

    expect(url).toBe("/Assets/DataSchema");
    expect(result[0]).toStrictEqual(dampcomponentList[0]);
  });
});

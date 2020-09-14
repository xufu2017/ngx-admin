import { dampReportStore } from "@/store/damp-report-store";
import { DampComponentDto } from "@/models/dtos/damp-component-dto";

describe("asset damp store.ts", () => {
  const store = dampReportStore;
  const state = {
    title: "Damp Reporting",
    visibleNavigation: false,
    showNavigation: false,
    dampComponent: new Array<DampComponentDto>(),
  };
  beforeEach(async () => {
    state.dampComponent = new Array<DampComponentDto>();
  });

  describe("mutations", () => {
    it("can toggle naviagation", async () => {
      const oldValue = false;
      let newValue = !oldValue;
      if (store.mutations) {
        store.mutations["toggleNavigation"](state, newValue);
      }
      expect(state.visibleNavigation).toBe(newValue);
      newValue = !newValue;
      if (store.mutations) {
        store.mutations["toggleNavigation"](state, newValue);
      }
      expect(state.visibleNavigation).toBe(newValue);
    });

    it("can update title", async () => {
      let newValue = "updateValue";
      if (store.mutations) {
        store.mutations["updateTitle"](state, newValue);
      }
      expect(state.title).toBe(newValue);
    });

    it("can update DampComponent", async () => {
      let newValue = new Array<DampComponentDto>(20);
      if (store.mutations) {
        store.mutations["updateDampComponent"](state, newValue);
      }
      expect(state.dampComponent.length).toBe(20);
    });
  });

  describe("actions", () => {
    it("can get toggleNavigation", async () => {
      const commit = jest.fn();
      // @ts-ignore
      store.actions["toggleNavigation"]({ commit });
      expect(commit).toHaveBeenCalledTimes(1);
      expect(commit).toHaveBeenCalledWith("toggleNavigation");
    });

    it("can update Title", async () => {
      const commit = jest.fn();
      // @ts-ignore
      store.actions["updateTitle"]({ commit }, state.title);
      expect(commit).toHaveBeenCalledTimes(1);
      expect(commit).toHaveBeenCalledWith("updateTitle", state.title);
    });

    it("can update DampComponent", async () => {
      const commit = jest.fn();
      // @ts-ignore
      store.actions["updateDampComponent"]({ commit }, state.dampComponent);
      expect(commit).toHaveBeenCalledTimes(1);
      expect(commit).toHaveBeenCalledWith("updateDampComponent", state.dampComponent);
    });
  });


  describe('getters', () => {
      it('can get title', async () => {
          
          state.title = "test1";
          // @ts-ignore
        const result = store.getters["title"](state);
        expect(result).toBe("test1");
      });

      it('can get visibleNavigation', async () => {
        state.visibleNavigation = true;
        // @ts-ignore
      const result = store.getters["visibleNavigation"](state);
      expect(result).toBe(true);
      });

      it('can get showNavigation', async () => {
        state.showNavigation = true;
        // @ts-ignore
      const result = store.getters["showNavigation"](state);
      expect(result).toBe(true);
      });

      it('can get dampComponent', async () => {
        state.dampComponent = new Array<DampComponentDto>(20);
        // @ts-ignore
      const result = store.getters["dampComponent"](state);
      expect(result.length).toBe(20);
      });
  });
});

import { create } from "zustand";

const useKeywordStore = create((set) => ({
  keyword: "",
  setKeyword: (keyword) => set({ keyword }),
}));

export default useKeywordStore;

import { create } from 'zustand';

const usePooStore = create((set) => ({
  // headers: false,
  // setHeaders: () => set((state) => ({ headers: !state.headers})),
  headers: "main",
  setHeaders: (text) => set({headers: text}),
  searchInputValue: "",
  setSearchInputValue: (text) => set({searchInputValue: text}),
  searchValue: [],
  setSearchValue: (newList) => set({searchValue: [newList]}),
  chooseStation: "",
  setChooseStation: (text) => set({chooseStation: text}),
  chooseStationLine: "",
  setChooseStationLine: (text) => set({chooseStationLine: text}),
  memo: [],
  setMemo: (fr_code, text) => set((prev) => ({memo: [...prev.memo, {fr_code: fr_code, text: text}]}))
}))

export default usePooStore;
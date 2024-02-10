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
  chooseStationNm: "",
  setChooseStationNm: (text) => set({chooseStationNm: text}),
  chooseStationLine: "",
  setChooseStationLine: (text) => set({chooseStationLine: text}),
  chooseStationData: {},
  setChooseStationData: (data) => set({chooseStationData: {data}}),
  sameStation: [],
  setSameStation: (newList) => set({sameStation: newList}),
  memo: [],
  setMemo: (STIN_CD, text) => set((prev) => ({memo: [...prev.memo, {STIN_CD: STIN_CD, text: text}]}))
}))

export default usePooStore;
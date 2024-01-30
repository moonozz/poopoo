import { create } from 'zustand';

const usePooStore = create((set) => ({
  // headers: false,
  // setHeaders: () => set((state) => ({ headers: !state.headers})),
  headers: "main",
  setHeaders: (text) => set({headers: text}),
  searchInputValue: "",
  setSearchInputValue: (text) => set({searchInputValue: text}),
  chooseStation: "",
  setChooseStation: (text) => set({chooseStation: text}),
  chooseStationLine: "",
  setChooseStationLine: (text) => set({chooseStationLine: text}),
}))

export default usePooStore;
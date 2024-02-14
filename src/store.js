import { create } from 'zustand';
import { persist } from "zustand/middleware";

const usePooStore = create(
  persist(
    (set) => ({
      headers: "main",
      setHeaders: (text) => set({headers: text}),
      searchInputValue: "",
      setSearchInputValue: (text) => set({searchInputValue: text}),
      searchValue: [],
      setSearchValue: (newList) => set({searchValue: newList}),
      chooseStationData: {},
      setChooseStationData: (data) => set({chooseStationData: data}),
      sameStation: [],
      setSameStation: (newList) => set({sameStation: newList}),
      chooseResultData: {},
      setChooseResultData: (data) => set({chooseResultData: data}),
      memo: [],
      setMemo: (newMemo) => set({memo: newMemo}),
    }),
    {
      name: "poopoo-storage",
    }
  )
)

export default usePooStore;
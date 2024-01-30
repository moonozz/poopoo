import React from 'react'
import usePooStore from '../store'

function Input() {
  const { searchInputValue, setSearchInputValue } = usePooStore();

  const handleInputValue = (e) => {
    setSearchInputValue(e.target.value)
    console.log(searchInputValue)
  };

  return (
    <>
      {/* <input placeholder="지하철역을 검색하세요." value={school} onChange={handleSchoolName} onKeyDown={handleEnterKeypress}></input> */}
      <input className="w-full " placeholder="지하철역을 검색하세요." onChange={handleInputValue} value={searchInputValue}></input>
    </>
  )
}

export default Input
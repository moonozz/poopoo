import React, { useState, useEffect } from 'react'
import usePooStore from '../store'
import Input from './Input';
import stationJson from '../data/data.json';
import { useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const navi = useNavigate();
  const { headers, setHeaders, searchInputValue, setSearchInputValue, searchValue, setSearchValue } = usePooStore();
  const [ inputSearch, setInputSearch ] = useState("")

  useEffect(() => {
    if(location.pathname === "/") {
      setHeaders("main")
    } else if(location.pathname === "/search") {
      setHeaders("search")
    } else {
      setHeaders("result")
    }
    setSearchInputValue(searchInputValue);
    setSearchValue(sliceStationNM);
  }, [headers, searchInputValue])

  const handleInput = (e) => {
    setInputSearch(e.target.value);
  }

  const FilterStationJson = stationJson.filter((i) => {
    if (inputSearch.length > 0) {
      return i.STIN_NM.startsWith(inputSearch);
    }
  })

  const sortedFilterStation = FilterStationJson.sort((a, b) => {
    return a.STIN_NM.localeCompare(b.STIN_NM)
  })

  const sliceStationNM = sortedFilterStation.map((i) => {
    return { ...i, STIN_NM: i.STIN_NM.split("(")[0].trim() }
  })

  const handleEnterKeypress = (e) => {
    if(e.key === "Enter") {
      e.preventDefault();
      // 검색input에 입력한 텍스트 기억하는 용도
      setSearchInputValue(inputSearch);
      setSearchValue(sliceStationNM)
    }
  }

  const handleSearchValue = () => {
    setSearchInputValue(inputSearch);
    setSearchValue(sliceStationNM);
  }

  const handleBackPage = () => {
    navi(-1);
  }

  return (
    <div className='flex w-full h-[76px] max-w-[768px] py-[14px] pr-[20px] fixed z-10 bg-mainBg'>
      {headers === "main" && (
        ""
      )}
      {headers === "search" && (
        <div className='flex w-full'>
          <button className='flex-center w-[50px] h-[50px]' onClick={handleBackPage}>
            <img className='' src={`${process.env.PUBLIC_URL}/assets/icon-back.svg`} alt='back-button' />
          </button>
          <Input placeholder='지하철역을 검색하세요.' onChange={handleInput} value={inputSearch} onKeyDown={handleEnterKeypress} onClick={handleSearchValue}/>
        </div>
      )}
      {headers === "result" && (
        <div className='flex w-full'>
          <button className='flex-center w-[50px] h-[50px]' onClick={handleBackPage}>
            <img className='' src={`${process.env.PUBLIC_URL}/assets/icon-back.svg`} alt='back-button' />
          </button>
        {/* <Input placeholder='지하철역을 검색하세요.' onChange={handleInput} value={inputSearch} onKeyDown={handleEnterKeypress} onClick={handleSearchValue}/> */}
      </div>
      )}
    </div>
    
  )
}

export default Header
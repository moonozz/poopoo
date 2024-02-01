import React, { useState, useEffect } from 'react'
import usePooStore from '../store'
import Input from './Input';
import station from '../data/seoul-station-info.json'
import { useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation()
  const { headers, setHeaders, searchInputValue, setSearchInputValue, searchValue, setSearchValue } = usePooStore();
  const [ inputSearch, setInputSearch ] = useState("")
  const stationData = station.DATA;

  useEffect(() => {
    if(location.pathname === "/") {
      setHeaders("main")
    } else if(location.pathname === "/search") {
      setHeaders("search")
    } else {
      setHeaders("result")
    }
    // console.log(location.pathname)
    setSearchInputValue(searchInputValue);
    setSearchValue(handleFilterValue);
    // console.log(searchInputValue);
    // console.log(searchValue);
  }, [headers, searchInputValue])

  const handleInput = (e) => {
    setInputSearch(e.target.value);
  }

  const handleFilterValue = stationData.filter((i) => {
    if (inputSearch.length > 0) {
      return i.station_nm.includes(inputSearch);
    }
  })

  const handleEnterKeypress = (e) => {
    if(e.key === "Enter") {
      e.preventDefault();
        setSearchInputValue(inputSearch);
        // console.log(searchInputValue)
        setSearchValue(handleFilterValue)
        // console.log(searchValue)
    }
  }

  const handleSearchValue = () => {
    setSearchInputValue(inputSearch);
    // console.log(searchInputValue)
    setSearchValue(handleFilterValue);
    // console.log(searchValue)
  }

  return (
    <div className='flex w-full h-[76px] max-w-[768px] py-[14px] pr-[20px] fixed z-10 bg-mainBg'>
      {headers === "main" && (
        ""
      )}
      {headers === "search" && (
        <div className='flex w-full'>
          <button className='flex-center w-[50px] h-[50px]'>
            <img className='' src={`${process.env.PUBLIC_URL}/assets/icon-back.svg`} alt='back-button' />
          </button>
          <Input placeholder='지하철역을 검색하세요.' onChange={handleInput} value={inputSearch} onKeyDown={handleEnterKeypress} onClick={handleSearchValue}/>
        </div>
      )}
      {headers === "result" && (
        <p>
          결과페이지 헤더
        </p>
      )}
    </div>
    
  )
}

export default Header
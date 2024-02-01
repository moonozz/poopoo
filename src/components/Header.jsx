import React, { useState, useEffect } from 'react'
import usePooStore from '../store'
import Input from './Input';
import stationData from '../data/seoul-station-info.json'
import { useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation()
  const { headers, setHeaders, searchInputValue, setSearchInputValue, setSearchValue } = usePooStore();
  // const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    if(location.pathname === "/") {
      setHeaders("main")
    } else if(location.pathname === "/search") {
      setHeaders("search")
    } else {
      setHeaders("result")
    }
    console.log(location.pathname)
  }, [headers])
  

  const handleInputValue = (e) => {
    setSearchInputValue(e.target.value);
  }

  const handleEnterKeypress = (e) => {
    if(e.key === "Enter") {
      e.preventDefault();
      setSearchInputValue(searchInputValue);
    }
  }

  const handleSearchValue = () => {
    setSearchInputValue(searchInputValue);
  }

  const handleFilterValue = () => {
    stationData.filter((i) => {
      return setSearchValue(stationData.station_nm.includes(searchInputValue))
    })
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
          <Input placeholder='지하철역을 검색하세요.' onChange={handleInputValue} value={searchInputValue} onKeyDown={handleEnterKeypress} onClick={handleFilterValue}/>
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
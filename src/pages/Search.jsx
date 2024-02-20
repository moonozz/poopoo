import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import usePooStore from '../store';
import Tag from '../components/Tag'

function Search() {
  const navi = useNavigate();
  const { headers, setHeaders, searchInputValue, searchValue, chooseStationData, setChooseStationData, sameStation, setSameStation } = usePooStore();

  useEffect(() => {
    setHeaders("search");
  }, [headers, chooseStationData])

  const handleResulthPage = () => {
    navi('/result')
    setHeaders('result');
  }

  const handleChooseStation = (stationData) => {
    setChooseStationData(stationData);
    const filterLine = searchValue.filter((i) => {
      return i.STIN_NM === stationData.STIN_NM
    })
    setSameStation(filterLine);
    handleResulthPage();
  }

  return (
    <div className="h-full pt-[76px] px-[20px]">
      {searchInputValue.length === 0 ? (
        <div className="flex-center flex-col h-full">
          <img className="w-[120px] h-auto" src={`${process.env.PUBLIC_URL}/assets/symbol-none.png`} alt='우는 poo'/>
          <p className="mt-[12px] text-[14px] text-gray">검색어를 입력해주세요.</p>
        </div>
      ) : searchValue.length === 0 ? (
        <div className="flex-center flex-col h-full">
          <img className="w-[120px] h-auto" src={`${process.env.PUBLIC_URL}/assets/symbol-none.png`} alt='우는 poo'/>
          <p className="mt-[12px] text-[14px] text-gray">검색 내역이 없습니다.</p>
        </div>
      ) : (
        <div className="h-full">
          <ul className="flex flex-col w-full">
          {searchValue.map((i) => {
            const station = i.STIN_NM;
            let line = i.LN_NM;
            return(
                <li key={`${i.LN_CD} + ${i.STIN_CD}`}>
                  <button className='flex w-full py-[8px] mb-[8px] items-center hover:font-black' onClick={() => handleChooseStation(i)}>
                    <Tag lineTxt={line} spanClassName={`text-[11px] text-white font-black`} className={`px-[8px] py-[8px]`}/>
                    <span className='text-[14px] ml-[8px]'>{station}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Search
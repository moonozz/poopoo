import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import usePooStore from '../store';

function Search() {
  const navi = useNavigate();
  const { headers, setHeaders, searchInputValue, setSearchInputValue, searchValue, chooseStation, setChooseStation, chooseStationLine, setChooseStationLine } = usePooStore();

  useEffect(() => {
    setHeaders("search")
    // console.log(headers)
  }, [headers])

  return (
    <div className="h-full pt-[76px] px-[48px] mobile:px-[20px]">
      {searchInputValue.length === 0 
        ? 
          <div className="flex-center flex-col h-full">
            <img className="w-[120px] h-auto" src={`${process.env.PUBLIC_URL}/assets/symbol-none.png`} alt='우는 poo'/>
            <p className="mt-[12px] text-[14px]">검색 내역이 없습니다.</p>
          </div>
        :
          <div className="h-full">
            {searchValue.map((item) => {
              return (
                item.map((i) => {
                  const station = i.station_nm;
                  const line = i.line_num
                  return(
                    <ul className="flex w-full" key={i.station_cd}>
                      <li>{line}</li>
                      <li>{station}</li>
                    </ul>
                  )
                })
              )
            })}
          </div>
      }
    </div>
  )
}

export default Search
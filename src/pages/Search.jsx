import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import usePooStore from '../store';
import Tag from '../components/Tag'

function Search() {
  const navi = useNavigate();
  const { headers, setHeaders, searchInputValue, setSearchInputValue, searchValue, chooseStation, setChooseStation, chooseStationLine, setChooseStationLine } = usePooStore();

  useEffect(() => {
    setHeaders("search")
    // console.log(headers)
  }, [headers])

  return (
    <div className="h-full pt-[76px] px-[20px]">
      {searchInputValue.length === 0 ? (
        <div className="flex-center flex-col h-full">
          <img className="w-[120px] h-auto" src={`${process.env.PUBLIC_URL}/assets/symbol-none.png`} alt='우는 poo'/>
          <p className="mt-[12px] text-[14px]">검색어를 입력해주세요.</p>
        </div>
      ) : searchValue[0].length === 0 ? (
        <div className="flex-center flex-col h-full">
          <img className="w-[120px] h-auto" src={`${process.env.PUBLIC_URL}/assets/symbol-none.png`} alt='우는 poo'/>
          <p className="mt-[12px] text-[14px]">검색 내역이 없습니다.</p>
        </div>
      ) : (
        <div className="h-full">
          <ul className="flex flex-col w-full">
          {searchValue.map((item) => {
            return (
              item.map((i) => {
                const station = i.station_nm;
                let line = i.line_num
                if (line[0] === "0") {
                  line = line.slice(1,2)
                } 
                return(
                    <li key={i.station_cd}>
                      <button className='flex w-full py-[8px] mb-[8px] items-center'>
                        {/* <Tag className={`${line.length === 1 ? 'text-[14px]' : 'text-[9px]' }`} lineTxt={line}>{line}</Tag> */}
                        <Tag lineTxt={line} />
                        <span className='text-[14px] ml-[8px]'>{station}</span>
                      </button>
                    </li>
                  )
                })
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Search
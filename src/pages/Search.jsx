import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import usePooStore from '../store';

function Search() {
  const navi = useNavigate();
  const { headers, setHeaders, searchInputValue, setSearchInputValue, chooseStation, setChooseStation, chooseStationLine, setChooseStationLine } = usePooStore();

  useEffect(() => {
    setHeaders("search")
    console.log(headers)
  }, [headers])

  return (
    <div>
      {searchInputValue.length === 0 
        ? 
          <div>
            <img src={`${process.env.PUBLIC_URL}/assets/symbol-none.png`} alt='우는 poo'/>
            <p>검색 내역이 없습니다.</p>
          </div>
        :
          <div>
            <span>검색리스트</span>
          </div>
      }
    </div>
  )
}

export default Search
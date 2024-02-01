import React, { useState, useEffect } from 'react'
import usePooStore from '../store'

function Input(props) {
  const {
    placeholder,
    value,
    onChange,
    onKeyDown,
    onClick,
  } = props;

  const { headers, setHeaders,  } = usePooStore();
  // const [ searchValue, setSearchValue ] = useState("")
  // const [ memoTxt, setMemoTxt ] = useState({fr_code: "", text: ""})

  // useEffect(() => {
  //   // setHeaders(`${headers}`);
  //   console.log(headers);
  // }, [headers])

  return (
    <div className='flex w-full h-[48px] bg-white rounded-[30px] gap-[20px] px-[24px]'>
      <input className="grow text-[14px] text-black placeholder:text-gray focus:outline-none " placeholder={placeholder} onChange={onChange} value={value} onKeyDown={onKeyDown}/>
      {headers === "search" 
        ?
          <button onClick={onClick}>
            <img src={`${process.env.PUBLIC_URL}/assets/icon-search.svg`} alt='search-button'/>
          </button>
        : 
          <button onClick={onClick}>
            <span>저장</span>
          </button>
      }
    </div>
  )
}

export default Input
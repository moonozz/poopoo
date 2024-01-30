import React from 'react'
import usePooStore from '../store'
import Input from './Input';

function Header() {
  const { headers, setHeaders } = usePooStore();

  return (
    <div className='flex w-full h-[76px] max-w-[768px] py-[14px] pr-[20px] fixed z-10'>
      {!headers === "main" && (
        <button className='flex-center w-[50px] h-[50px]'>
          <img className='w-[20px] h-[20px]' src={`${process.env.PUBLIC_URL}/assets/icon-back.svg`} alt='back-button'/>
        </button>
      )}
      {headers === "main" && (
        ""
      )}
      {headers === "search" && (
        <div className='w-full'>
          <Input />
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
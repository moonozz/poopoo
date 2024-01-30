import React from 'react'
import usePooStore from '../store'

function Header() {
  const { headers, setHeaders } = usePooStore();

  return (
    <div className='flex w-full h-[76px] max-w-[768px] py-[14px] pr-[20px] fixed z-10'>
      <button className='flex-center w-[50px] h-[50px]'>
        <img className='w-[20px] h-[20px]' src={`${process.env.PUBLIC_URL}/assets/icon-back.svg`} alt='back-button'/>
      </button>
      {headers === "main" && (
        <div>
          메인 헤더
        </div>
      )}
      {headers === "search" && (
        <div>
          검색페이지 헤더
        </div>
      )}
      {headers === "result" && (
        <div>
          결과페이지 헤더
        </div>
      )}
    </div>
    
  )
}

export default Header
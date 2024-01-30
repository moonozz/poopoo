import React from 'react';
import { useNavigate } from 'react-router-dom';
import usePooStore from '../store';


function Main() {
  const navi = useNavigate()
  const { headers, setHeaders } = usePooStore();

  const handleSearchPage = () => {
    navi('/search')
    setHeaders('search');
    console.log(headers);
  }

  return (
    <div className='flex-center flex-col h-full w-full px-[48px] mobile:px-[20px]'>
      <div className='flex-center flex-col w-full h-auto'>
        <div className='flex w-full max-w-[350px] mb-[16px] justify-end'>
          <span className='px-[16px] py-[12px] bg-main text-white text-[14px] rounded-[30px] rounded-br-0'>나 지금 급한데, 화장실 어딨지..?</span>
        </div>
        <img className='w-full max-w-[430px] min-w-[184px] px-[40px]' src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt='logoImage'/>
      </div>
      <div className='flex w-full h-[48px] bg-white rounded-[30px] mt-[90px] mobile:mt-[48px]'>
        <a className='flex justify-between w-full px-[24px] py-[14px]' onClick={handleSearchPage}>
          <span className='grow text-[14px] text-gray'>지하철역을 검색하세요.</span>
          <img src={`${process.env.PUBLIC_URL}/assets/icon-search.svg`} alt='search-button'/>
        </a>
      </div>
    </div>
  )
}

export default Main
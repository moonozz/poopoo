import React, { useEffect, useState } from 'react'
import usePooStore from '../store';
import Tag from '../components/Tag'
import axios from 'axios';

function Result() {
  const { headers, setHeaders, searchValue, chooseStation, chooseStationData, setChooseStationData, sameStation } = usePooStore();

  const stationData = chooseStationData.data;

  useEffect(() => {
    setHeaders("result")
    console.log(headers);
    console.log(chooseStationData)
    console.log(sameStation)    
  }, [headers, chooseStationData, ])

  return (
    <section className="flex flex-col h-full pt-[76px] px-[20px] gap-[20px]">
      <div className='flex-col text-[20px] mt-[20px] font-black'>
        <h2>{stationData.STIN_NM}</h2>
        <h2>화장실 정보</h2>
      </div>
      <ul className='flex'>
        {
          sameStation.map((i) => {
            return(
              <li key={`${i.LN_CD}${i.STIN_CD}`} className='mr-[4px]'>
                <button className='flex'>
                  <Tag lineTxt={i.LN_NM} className={`px-[16px] py-[12px] ${stationData.RAIL_OPR_ISTT_CD === i.RAIL_OPR_ISTT_CD && stationData.LN_CD === i.LN_CD && stationData.STIN_CD === i.STIN_CD ? "" : "bg-mainBg hover:bg-hoverGray"}`} spanClassName={`text-[12px] ${stationData.RAIL_OPR_ISTT_CD === i.RAIL_OPR_ISTT_CD && stationData.LN_CD === i.LN_CD && stationData.STIN_CD === i.STIN_CD ? "text-white font-black" : "text-black"}`}/>
                </button>
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}

export default Result
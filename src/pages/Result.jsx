import React, { useEffect, useState } from 'react'
import usePooStore from '../store';
import Tag from '../components/Tag'
import axios from 'axios';
import ResultLi from '../components/ResultLi';

function Result() {
  const { headers, setHeaders, searchValue, chooseStation, chooseStationData, setChooseStationData, sameStation, setChooseResultData, chooseResultData } = usePooStore();

  const [localData, setLocalData] = useState(null);

  const handleFetch = () => {
    axios
      .get(`https://openapi.kric.go.kr/openapi/convenientInfo/stationToilet?serviceKey=$2a$10$f${process.env.REACT_APP_TOILET_API_KEY}&format=json&railOprIsttCd=${chooseStationData.RAIL_OPR_ISTT_CD}&lnCd=${chooseStationData.LN_CD}&stinCd=${chooseStationData.STIN_CD}`)
      .then((res) => {
        console.log(res);
        setChooseResultData(null);

        if (res.data.header.resultCode === "00") {
          const resData = res.data.body[0]
          const chooseData = {
            diapExchNum: resData.diapExchNum, //기저귀교환대개수
            dtlLoc: resData.dtlLoc, //상세위치
            exitNo: resData.exitNo, //출구번호
            gateInotDvNm: resData.gateInotDvNm, //게이트내외구분
            grndDvNm: resData.grndDvNm, //지상구분
            lnCd: resData.lnCd, //선코드
            mlFmlDvNm: resData.mlFmlDvNm, //남녀구분
            railOprIsttCd: resData.railOprIsttCd, //철도운영기관코드
            stinCd: resData.stinCd, //역코드
            stinFlor: resData.stinFlor, //역층
            toltNum: resData.toltNum //화장실개수
          }
          setChooseResultData(chooseData)
          // setLocalData(chooseData);
        } else {
          setChooseResultData(null)
          console.log(res.data.header.resultMsg);
        }
      })
      .catch((err) => {
        console.log(err)
        setChooseResultData(null)
      })
  }

  useEffect(() => {
    setHeaders("result")
    // console.log(headers);
    console.log(chooseStationData)
    // console.log(sameStation)
    handleFetch()
    console.log(chooseStationData)
    console.log(chooseResultData)
  }, [headers, chooseStationData ])

  const handleChangeStation = (stationData) => {
    
    setChooseStationData(stationData);
    console.log(stationData);
  }

  return (
    <section className="flex flex-col h-full pt-[76px] px-[20px] gap-[20px]">
      <div className='flex-col text-[20px] mt-[20px] font-extrabold'>
        <h2>{chooseStationData.STIN_NM}</h2>
        <h2>화장실 정보</h2>
      </div>
      <ul className='flex w-full flex-wrap'>
        {
          sameStation.map((i) => {
            return(
              <li key={`${i.LN_CD}${i.STIN_CD}`} className='mr-[4px]'>
                <button className='flex' onClick={() => handleChangeStation(i)}>
                  <Tag lineTxt={i.LN_NM} className={`px-[16px] py-[12px] ${chooseStationData.RAIL_OPR_ISTT_CD === i.RAIL_OPR_ISTT_CD && chooseStationData.LN_CD === i.LN_CD && chooseStationData.STIN_CD === i.STIN_CD ? "" : "bg-mainBg hover:bg-hoverGray"}`} spanClassName={`text-[12px] ${chooseStationData.RAIL_OPR_ISTT_CD === i.RAIL_OPR_ISTT_CD && chooseStationData.LN_CD === i.LN_CD && chooseStationData.STIN_CD === i.STIN_CD ? "text-white font-black" : "text-black"}`}/>
                </button>
              </li>
            )
          })
        }
      </ul>
      {!chooseResultData ? (
        <div className='flex flex-col p-[20px] bg-white rounded-[16px]'>
          <img src={`${process.env.PUBLIC_URL}/assets/symbol-none.png`} alt='poopoo symbol' className='w-[50px] mb-[12px]'/>
          <p className='text-[14px] text-gray'>해당 역의 화장실 데이터가 없습니다 😭</p>
          <p className='text-[14px] text-gray'>빠른 시일내에 업데이트하겠습니다!</p>
        </div>
      ) : (
        <div className='flex flex-col p-[20px] bg-white rounded-[16px]'>
          <img src={`${process.env.PUBLIC_URL}/assets/symbol.png`} alt='poopoo symbol' className='w-[50px] mb-[12px]'/>
          <ul className='flex flex-col'>
            <ResultLi title={`지상 지하`} contents={`${chooseResultData.grndDvNm}`} />
            {chooseResultData.gateInotDvNm !== "안" ? 
              <ResultLi title={`게이트 밖/안`} contents={"카드찍고 나가야해요😭"} />
            : 
              <ResultLi title={`게이트 밖/안`} contents={"카드 찍을 필요 없어요!🥳"} />
            }
            <ResultLi title={`출구번호`} contents={`${chooseResultData.exitNo}번`} />
            <ResultLi title={`상세 위치`} contents={`${chooseResultData.dtlLoc}`} />
            <ResultLi title={`역코드`} contents={`${chooseResultData.stinCd}`} />
          </ul>
        </div>
      )}
    </section>
  )
}

export default Result
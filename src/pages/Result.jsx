import React, { useEffect, useState } from 'react'
import usePooStore from '../store';
import Tag from '../components/Tag'
import axios from 'axios';
import ResultLi from '../components/ResultLi';

function Result() {
  const { headers, setHeaders, searchValue, chooseStation, chooseStationData, setChooseStationData, sameStation } = usePooStore();
  const stationData = chooseStationData.data;
  
  const [localData, setLocalData] = useState(null);

  const getChooseData = localStorage.getItem("chooseData")
  const parsedChooseData = JSON.parse(getChooseData);

  const handleFetch = () => {
    axios
      .get(`https://openapi.kric.go.kr/openapi/convenientInfo/stationToilet?serviceKey=$2a$10$f${process.env.REACT_APP_TOILET_API_KEY}&format=json&railOprIsttCd=${stationData.RAIL_OPR_ISTT_CD}&lnCd=${stationData.LN_CD}&stinCd=${stationData.STIN_CD}`)
      .then((res) => {
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
        localStorage.setItem("chooseData", JSON.stringify(chooseData));
        setLocalData(chooseData);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    setHeaders("result")
    // console.log(headers);
    // console.log(chooseStationData)
    // console.log(sameStation)
    handleFetch()
    console.log(parsedChooseData)
  }, [headers, chooseStationData])

  useEffect(() => {
    // localStorage 변경을 감지하여 localData 상태 업데이트
    const handleLocalStorageChange = () => {
      const getChooseData = localStorage.getItem("chooseData")
      const parsedChooseData = JSON.parse(getChooseData);
    
      setLocalData(parsedChooseData);
    };

    // localStorage 변경 이벤트 리스너 등록
    window.addEventListener('storage', handleLocalStorageChange);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener('storage', handleLocalStorageChange);
    };

  }, []);

  return (
    <section className="flex flex-col h-full pt-[76px] px-[20px] gap-[20px]">
      <div className='flex-col text-[20px] mt-[20px] font-extrabold'>
        <h2>{stationData.STIN_NM}</h2>
        <h2>화장실 정보</h2>
      </div>
      <ul className='flex w-full flex-wrap'>
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
      <div className='flex flex-col p-[20px] bg-white rounded-[16px]'>
        <img src={`${process.env.PUBLIC_URL}/assets/symbol.png`} alt='poopoo symbol' className='w-[50px] mb-[12px]'/>
        <ul className='flex flex-col'>
          <ResultLi title={`지상 지하`} contents={`${parsedChooseData.grndDvNm}`} />
          {parsedChooseData.gateInotDvNm !== "안" ? 
            <ResultLi title={`게이트 밖/안`} contents={"카드찍고 나가야해요😭"} />
          : 
            <ResultLi title={`게이트 밖/안`} contents={"카드 찍을 필요 없어요!🥳"} />

          }
          <ResultLi title={`출구번호`} contents={`${parsedChooseData.exitNo}번 출구에서 가까워요`} />
          <ResultLi title={`상세 위치`} contents={`${parsedChooseData.dtlLoc}`} />
          <ResultLi title={`역코드`} contents={`${parsedChooseData.stinCd}`} />
        </ul>
      </div>
    </section>
  )
}

export default Result
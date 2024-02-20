import React, { useEffect, useState } from "react";
import usePooStore from "../store";
import Tag from "../components/Tag";
import axios from "axios";
import ResultLi from "../components/ResultLi";

function Result() {
  const {
    headers,
    setHeaders,
    chooseStationData,
    setChooseStationData,
    sameStation,
    setChooseResultData,
    chooseResultData,
    memo,
    setMemo,
  } = usePooStore();
  const { RAIL_OPR_ISTT_CD, LN_CD, STIN_CD } = chooseStationData;

  const thisMemoKey = `${RAIL_OPR_ISTT_CD}${LN_CD}${STIN_CD}`;

  const [memoObj, setMemoObj] = useState({ key: thisMemoKey, text: "" });

  const memoIndex = memo.findIndex((i) => i.key === memoObj.key);

  const handleFetch = () => {
    axios
      .get(
        `https://openapi.kric.go.kr/openapi/convenientInfo/stationToilet?serviceKey=$2a$10$f${process.env.REACT_APP_TOILET_API_KEY}&format=json&railOprIsttCd=${RAIL_OPR_ISTT_CD}&lnCd=${LN_CD}&stinCd=${STIN_CD}`
      )
      .then((res) => {
        if (res.data.header.resultCode === "00") {
          const resData = res.data.body[0];
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
            toltNum: resData.toltNum, //화장실개수
          };
          setChooseResultData(chooseData);
          setMemoObj({ ...memoObj, key: thisMemoKey });
        } else {
          setChooseResultData(null);
          setMemoObj({ ...memoObj, key: thisMemoKey });
        }
      })
      .catch((err) => {
        console.log(err);
        setChooseResultData(null);
        setMemoObj({ ...memoObj, key: thisMemoKey });
      });
  };

  useEffect(() => {
    setHeaders("result");
    setMemoObj({ key: thisMemoKey, text: "" });
    handleFetch();

    if (memoIndex === -1) {
      setMemoObj({ key: thisMemoKey, text: "" });
    } else {
      const newMemo = [...memo];
      memoObj.text = newMemo[memoIndex].text;
    }
  }, [headers, chooseStationData, memo, memoObj.key]);

  const handleChangeStation = (stationData) => {
    setChooseStationData(stationData);
  };

  const handleChangeTextArea = (e) => {
    setMemoObj({ ...memoObj, text: e.target.value });
  };

  const handleSaveMemo = () => {
    if (memoIndex === -1) {
      setMemo([...memo, memoObj]);
    } else {
      const newMemo = [...memo];
      newMemo[memoIndex].text = memoObj.text;
      setMemo(newMemo);
    }
  };

  const handleEnterKeypress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSaveMemo();
    }
  };

  return (
    <section className="flex flex-col h-full pt-[76px] px-[20px] gap-[20px]">
      <div className="flex-col text-[20px] mt-[20px] font-extrabold">
        <h2>{chooseStationData.STIN_NM}</h2>
        <h2>화장실 정보</h2>
      </div>
      <ul className="flex w-full flex-wrap">
        {sameStation.map((i) => {
          return (
            <li key={`${i.LN_CD}${i.STIN_CD}`} className="mr-[4px]">
              <button className="flex" onClick={() => handleChangeStation(i)}>
                <Tag
                  lineTxt={i.LN_NM}
                  className={`px-[16px] py-[12px] ${
                    RAIL_OPR_ISTT_CD === i.RAIL_OPR_ISTT_CD &&
                    LN_CD === i.LN_CD &&
                    STIN_CD === i.STIN_CD
                      ? ""
                      : "bg-mainBg hover:bg-hoverGray"
                  }`}
                  spanClassName={`text-[12px] ${
                    RAIL_OPR_ISTT_CD === i.RAIL_OPR_ISTT_CD &&
                    LN_CD === i.LN_CD &&
                    STIN_CD === i.STIN_CD
                      ? "text-white font-black"
                      : "text-black"
                  }`}
                />
              </button>
            </li>
          );
        })}
      </ul>
      {!chooseResultData ? (
        <div className="flex flex-col p-[20px] bg-white rounded-[16px]">
          <img
            src={`${process.env.PUBLIC_URL}/assets/symbol-none.png`}
            alt="poopoo symbol"
            className="w-[50px] mb-[12px]"
          />
          <p className="text-[14px] text-gray">
            해당 역의 화장실 데이터가 없습니다 😭
          </p>
          <p className="text-[14px] text-gray">
            빠른 시일내에 업데이트하겠습니다!
          </p>
        </div>
      ) : (
        <div className="flex flex-col p-[20px] bg-white rounded-[16px]">
          <img
            src={`${process.env.PUBLIC_URL}/assets/symbol.png`}
            alt="poopoo symbol"
            className="w-[50px] mb-[12px]"
          />
          <ul className="flex flex-col">
            <ResultLi
              title={`지상 지하`}
              contents={`${chooseResultData.grndDvNm}`}
            />
            {chooseResultData.gateInotDvNm !== "안" ? (
              <ResultLi
                title={`게이트 밖/안`}
                contents={"카드찍고 나가야해요😭"}
              />
            ) : (
              <ResultLi
                title={`게이트 밖/안`}
                contents={"카드 찍을 필요 없어요!🥳"}
              />
            )}
            <ResultLi
              title={`출구번호`}
              contents={`${chooseResultData.exitNo}번`}
            />
            <ResultLi
              title={`상세 위치`}
              contents={`${chooseResultData.dtlLoc}`}
            />
            <ResultLi
              title={`역코드`}
              contents={`${chooseResultData.stinCd}`}
            />
          </ul>
        </div>
      )}
      <div className="flex flex-col p-[20px] bg-white rounded-[16px]">
        <h4 className="text-[14px] font-extrabold mb-[12px]">나만의 메모</h4>
        <div className="flex flex-col items-end">
          <textarea
            className="w-full bg-lightGray h-[140px] w-full p-[14px] rounded-[10px] text-[14px] mb-[12px] resize-none outline-black"
            placeholder="메모를 입력해주세요."
            onChange={handleChangeTextArea}
            value={memoObj.text}
            onKeyDown={handleEnterKeypress}
            spellcheck="false"
          />
          <button
            className="w-auto bg-black py-[12px] px-[16px] text-white text-[12px] font-bold rounded-[30px]"
            onClick={handleSaveMemo}
          >
            저장
          </button>
        </div>
      </div>
    </section>
  );
}

export default Result;

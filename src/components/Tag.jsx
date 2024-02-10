import React from 'react'

function Tag(props) {
  const {
    lineTxt
  } = props;

  const getBgClassNm = (lineTxt) => {
    switch (lineTxt) {
      case '1호선':
        return 'bg-01';
      case '2호선':
        return 'bg-02';
      case '3호선':
        return 'bg-03';
      case '4호선':
        return 'bg-04';
      case '5호선':
        return 'bg-05';
      case '6호선':
        return 'bg-06';
      case '7호선':
        return 'bg-07';
      case '8호선':
        return 'bg-08';
      case '9호선':
        return 'bg-09';
      case '경강선':
        return 'bg-gyeonggang';
      case '경의중앙':
        return 'bg-gyeongui';
      case '경춘':
        return 'bg-gyeongchun';
      case '공항철도':
        return 'bg-airport';
      case '김포골드라인':
        return 'bg-kimpogold';
      case '서해선':
        return 'bg-seohae';
      case '수인분당':
        return 'bg-bundang';
      case '신림선':
        return 'bg-sillim';
      case '신분당선':
        return 'bg-sinbundang';
      case '용인에버라인':
        return 'bg-everline';
      case '우이신설':
        return 'bg-ui_sinseol';
      case '의정부경전철':
        return 'bg-uijeongbu';
      case '인천1호선':
        return 'bg-incheon01';
      case '인천2호선':
        return 'bg-incheon02';
      case '자기부상':
        return 'bg-magtrainf';
      default:
        return 'gray';
    }
  }

  return (
    // <div className={`${lineTxt === '1' ? 'bg-01' : lineTxt === '2' ? 'bg-02' : lineTxt === '3' ? 'bg-03' : lineTxt === '4' ? 'bg-04' : lineTxt === '5' ? 'bg-05' : lineTxt === '6' ? 'bg-06' : lineTxt === '7' ? 'bg-07' : lineTxt === '8' ? 'bg-08' : lineTxt === '9' ? 'bg-09' : lineTxt === '경강선' ? 'bg-gyeonggang' : lineTxt === '경의선' ? 'bg-gyeongui' : lineTxt === '경춘선' ? 'bg-gyeongchun' : lineTxt === '공항철도' ? 'bg-airport' : lineTxt === '김포도시철도' ? 'bg-kimpogold' : lineTxt === '서해선' ? 'bg-seohae' : lineTxt === '수인분당선' ? 'bg-bundang' : lineTxt === '신림선' ? 'bg-sillim' : lineTxt === '신분당선' ? 'bg-sinbundang' : lineTxt === '용인경전철' ? 'bg-everline' : lineTxt === '우이신설경전철' ? 'bg-ui_sinseol' : lineTxt === '의정부경전철' ? 'bg-uijeongbu' : lineTxt === '인천선' ? 'bg-incheon01' : lineTxt === '인천2호선' ? 'bg-incheon02' : 'gray'}`}>
    <div className={`${getBgClassNm(lineTxt)} ${lineTxt.length === 1 ? 'px-[10px] py-[4px]' :  'px-[8px] py-[8px]'} rounded-[30px]`}>
      <span className={`${lineTxt.length === 1 ? 'text-[14px]' : 'text-[10px]'} text-white font-black`} >{lineTxt}</span>
    </div>
  )
}

export default Tag
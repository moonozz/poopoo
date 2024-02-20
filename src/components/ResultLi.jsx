import React from "react";

function ResultLi(props) {
  const { title, contents } = props;

  return (
    <li className="flex py-[12px]">
      <span className="w-[80px] max-w-[80px] text-[14px] text-gray">
        {title}
      </span>
      <p className="ml-[10px] text-[14px] text-black font-bold">{contents}</p>
    </li>
  );
}

export default ResultLi;

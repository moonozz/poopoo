import React from "react";
import usePooStore from "../store";

function Input(props) {
  const { placeholder, value, onChange, onKeyDown, onClick, className } = props;

  const { headers } = usePooStore();

  return (
    <div
      className={`flex w-full h-[48px] rounded-[30px] gap-[20px] pl-[24px] pr-[10px] ${className}`}
    >
      <input
        className={`grow text-[14px] text-black placeholder:text-gray focus:outline-none ${className}`}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onKeyDown={onKeyDown}
      />
      {headers === "search" ? (
        <button className="mr-[8px]" onClick={onClick}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/icon-search.svg`}
            alt="search-button"
          />
        </button>
      ) : (
        <button onClick={onClick}>
          <span className="bg-black py-[10px] px-[12px] text-white text-[12px] font-bold rounded-[30px]">
            저장
          </span>
        </button>
      )}
    </div>
  );
}

export default Input;

import React from 'react'

function Main() {
  return (
    <div className="flex-center h-full w-full pt-[76px]">
      <div className='flex-center w-full'>
        <span></span>
        <img className='w-full max-w-[430px] min-w-[184px] px-[40px]' src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt='logoImage'/>
      </div>
    </div>
  )
}

export default Main
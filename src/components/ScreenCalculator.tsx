import React from 'react'

interface props{
  result:number
}

const ScreenCalculator:React.FunctionComponent<props> = ({result}) => {
  return (
  <div className='bg-black flex w-[85%] h-[80px] mx-auto rounded-md text-cyan-400 font-bold text-right overflow-y-auto '>
    <span className='my-auto mr-3 ml-auto text-2xl '>
      {result}
    </span>
  </div>
  )
}

export default ScreenCalculator

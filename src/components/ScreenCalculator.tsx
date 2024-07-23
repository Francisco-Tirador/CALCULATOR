import React from 'react'

interface props{
  result:string
  preResult:number
}

const ScreenCalculator:React.FunctionComponent<props> = ({result,preResult}) => {




  return (
  <div className='bg-black flex flex-wrap w-[85%] h-[80px] mx-auto rounded-md text-cyan-400 font-bold text-right overflow-y-auto '>
    <div className='my-auto mr-3 ml-auto w-full '>
    {preResult!=0&&preResult}
    </div>
    <div className='my-auto mr-3 ml-auto text-2xl '>
      {result}
    </div>
  </div>
  )
}

export default ScreenCalculator

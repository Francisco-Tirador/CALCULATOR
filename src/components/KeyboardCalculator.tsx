import React from 'react'
import stylesDefaul from '../styles/styles'


interface props{
    result:number
    setResult:
}

const KeyboardCalculator:React.FunctionComponent<props> = () => {
  return (
    <div className='bg-gray-200 w-[90%] mx-auto h-[70%] p-2  rounded-md flex flex-wrap max-h-[350px] mt-3'>

    <div className='w-[70%]  p-1 flex flex-wrap justify-center items-center  '>


      <div className=' flex w-full justify-center'>

        <div className={stylesDefaul.btn_calculator_dig} >
          {"<"}
        </div>
        <div className={stylesDefaul.btn_calculator_dig}>
          %
        </div>
        <div className={stylesDefaul.btn_calculator_dig}>
          /
        </div>

      </div>
      <span className='flex flex-wrap-reverse w-full h-[65%] justify-center items-center'>

        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9].map(dig => (
            <div key={dig} className={stylesDefaul.btn_calculator_dig}>
              {dig}
            </div>
          ))
        }

      </span>
      <div className='flex w-full justify-center'>
        <div className={stylesDefaul.btn_calculator_dig}>
          GT
        </div>
        <div className={stylesDefaul.btn_calculator_dig}>
          0
        </div>
        <div className={stylesDefaul.btn_calculator_dig}>
          .
        </div>

      </div>

    </div>

    <div className=' w-[25%] h-full my-auto flex flex-wrap justify-center items-center '>
      <div className={stylesDefaul.btn_calculator_oper}>
        {"X"}
      </div>
      <div className={stylesDefaul.btn_calculator_oper}>
        {"+"}
      </div>
      <div className={stylesDefaul.btn_calculator_oper}>
        {"-"}
      </div>
      <div className='bg-orange-400 w-[90%] h-[32%] rounded-lg m-2 flex justify-center items-center text-white text-3xl font-bold cursor-pointer'>
        {"="}
      </div>
    </div>
  </div>
  )
}

export default KeyboardCalculator
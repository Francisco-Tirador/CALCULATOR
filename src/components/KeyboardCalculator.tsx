import React, { useState } from 'react'
import stylesDefaul from '../styles/styles'


interface Props {
  result: string
  setResult: (value: string) => void
  preResult: number
  setPreResult: (value: number) => void
}

type SignAccepts = "mul" | "div" | "res" | "sum" | ""

const KeyboardCalculator: React.FunctionComponent<Props> = ({ result, setResult, preResult, setPreResult }) => {
  const [operacion, setOperacion] = useState<SignAccepts>('')


  const changeOperacion = (ope: SignAccepts) => {
    if (!operacion) {
      setResult("0")
      setPreResult(Number(result))
      setOperacion(ope)
    } else {
      if (result !== "0") {
        const resultOpeValue = opeResult()
        setPreResult(resultOpeValue)
        setResult("0")
        setOperacion(ope)
      }
    }
  }


  const opeResult = () => {
    const ope = operacion
    const preDigResult = preResult
    const digResult = Number(result)

    let resultOpe = 0

    if (preDigResult != 0) {
      switch (true) {
        case ope == 'div':
          resultOpe = (preDigResult / digResult)
          break;
        case ope == 'mul':
          resultOpe = (preDigResult * digResult)
          break;
        case ope == 'res':
          resultOpe = (preDigResult - digResult)
          break;
        case ope == 'sum':
          resultOpe = (preDigResult + digResult)
          break;
      }
    } else {
      return digResult
    }

    return resultOpe

  }

  const reasigNumber = (value: string) => {
    let instance: string = result
    if (result.length < 15) {

      if (instance.includes(".") && value == ".") {
        instance = result
      } else {
        instance = result == "0" ? value : (`${result}${value}`)
      }

    }
    return setResult(instance)
  }

  const removeDig = () => {

    const instance = result.length == 1 ? "0" : result.slice(0, result.length - 1)
    setResult(instance)

  }

  const resetResults = () => {
    setPreResult(0)
    setResult("0")
  }

  const endResult = () => {
    const resultEdn = String(opeResult())
    setPreResult(0)
    setResult(resultEdn)
  }


  return (
    <div className='bg-gray-200 w-[90%] mx-auto h-[70%] p-2  rounded-md flex flex-wrap max-h-[350px] mt-3'>

      <div className='w-[70%]  p-1 flex flex-wrap justify-center items-center  '>


        <div className=' flex w-full justify-center'>
          <div className={stylesDefaul.btn_calculator_oper} onClick={resetResults}>
            RS
          </div>
          <div className={stylesDefaul.btn_calculator_oper} onClick={removeDig} >
            {"<"}
          </div>
          <div className={stylesDefaul.btn_calculator_oper} onClick={() => changeOperacion('div')}>
            /
          </div>

        </div>
        <span className='flex flex-wrap-reverse w-full h-[65%] justify-center items-center'>

          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9].map(dig => (
              <div key={dig} className={stylesDefaul.btn_calculator_dig} onClick={() => reasigNumber(`${dig}`)}>
                {dig}
              </div>
            ))
          }

        </span>
        <div className='flex w-full justify-center'>
          <div className={stylesDefaul.btn_calculator_dig}>
            GT
          </div>
          <div className={stylesDefaul.btn_calculator_dig} onClick={() => reasigNumber("0")}>
            0
          </div>
          <div onClick={() => reasigNumber(".")} className={stylesDefaul.btn_calculator_dig}>
            .
          </div>

        </div>

      </div>

      <div className=' w-[25%] h-full my-auto flex flex-wrap justify-center items-center '>
        <div className={stylesDefaul.btn_calculator_oper} onClick={() => changeOperacion('mul')}>
          {"X"}
        </div>
        <div className={stylesDefaul.btn_calculator_oper} onClick={() => changeOperacion('sum')}>
          {"+"}
        </div>
        <div className={stylesDefaul.btn_calculator_oper} onClick={() => changeOperacion('res')}>
          {"-"}
        </div>
        <div onClick={endResult} className='bg-orange-400 w-[90%] h-[32%] rounded-lg m-2 flex justify-center items-center text-white text-3xl font-bold cursor-pointer'>
          {"="}
        </div>
      </div>
    </div>
  )
}

export default KeyboardCalculator
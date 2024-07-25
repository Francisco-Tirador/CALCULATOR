import { useState } from 'react'

//-Styles
import './App.css'

//- Componets 
import ScreenCalculator from './components/ScreenCalculator'
import HeaderCalculator from './components/HeaderCalculator'
import KeyboardCalculator from './components/KeyboardCalculator'



function App() {

  const [result, setResult] = useState<string>("0")
  const [preResult, setPreResult] = useState<number>(0)


  return (
    <div className='app flex' >
 
      <div className='w-[90%] max-w-md h-[95%] bg-gray-300  flex-wrap max-h-[600px] rounded-[30px] m-auto ' id='calculator'>

      <HeaderCalculator/>

      <ScreenCalculator result={result} preResult={preResult}/>

      <KeyboardCalculator  result={result} setResult={setResult} preResult={preResult} setPreResult={setPreResult}/>

      </div>

    </div>
  )
}

export default App

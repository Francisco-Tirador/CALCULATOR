import { useState } from 'react'

//-Styles
import './App.css'

//- Componets 
import ScreenCalculator from './components/ScreenCalculator'
import HeaderCalculator from './components/HeaderCalculator'
import KeyboardCalculator from './components/KeyboardCalculator'


function App() {
  const [resul, setResult] = useState<number>(0)


  return (
    <div className='app flex' >

      <div className='w-[90%] max-w-md h-[95%] bg-gray-300  flex-wrap max-h-[600px] rounded-[30px] m-auto ' id='calculator'>

     <HeaderCalculator/>

        <ScreenCalculator result={resul}/>

      <KeyboardCalculator />

      </div>

    </div>
  )
}

export default App

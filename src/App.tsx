import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='app flex' >
        
          <div className='w-[90%] max-w-md h-[80%] bg-gray-500 max-h-[600px] rounded-[30px] m-auto ' id='calculator'>
              
          </div>
       
      </div>
  )
}

export default App

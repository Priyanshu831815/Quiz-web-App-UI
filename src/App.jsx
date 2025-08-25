import React, {useState} from 'react'
import Question from './Components/Question'
import Result from './Components/Result'
import { Data } from './Data/data'

const App = () => {
const [index, setindex] = useState(0)
 const [score,setscore] = useState(0)
const [showResult, setresult] = useState(false)
 const handelAnswer = (option)=>{
  if(option===Data[index].answer){
    setscore(score+1)
  }
  const next= index +1
  if(next<Data.length-1){
    setindex(next)
  }
  else {
    setresult(true)
  }
 }

return (
    <div className='min-h-screen bg-gradient-to-tr from-indigo-500 to-pink-500 flex flex-col items-center justify-center p-4'>
      
      <h1 className='text-4xl font-semibold text-white mb-8'>Quize App</h1>
      <div className='bg-white shadow-2xl rounded-2xl w-full max-w-lg transition-all p-8'>
      {
        showResult ? <Result  score={score} total={Data.length} /> : <Question index={index} total={Data.length} data={Data[index]} onAnswer={handelAnswer}/>
      }
    </div>
    
    </div>

  )
}

export default App
 
import React from 'react'

const Question = (props) => {
    const {index, total, data, onAnswer}=props
  return (
    <div className='space-y-6'>
      <div className='flex justify-between'>
        <span>Questions-{index+1}/{total}</span>
      </div>
      <h2 className='text-xl font-semibold'>{data.question}</h2>
      <div className='space-y-3'>
        {
          data.options.map((option, i)=>{
      return    <button className='block w-full border border-gray-200 bg-gray-100 hover:bg-gray-300 hover: text-purple-600 rounded-lg p-3' key={i}onClick={()=>{onAnswer(option)}}>{option}</button>
})  
        }
      </div>
    </div>
  )
}

export default Question

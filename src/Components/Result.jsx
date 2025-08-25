import React from 'react'
const Result = (props) => {
const {score, total}= props
  return (
    <div className='text-center space-y-4'>
        <h2 className='2-xl font-bold'>Qize complete</h2>
       <p  className='text-lg text-gray-700'>Your score

        <span className='font-semibold'>{score}/{total}</span>
       </p>
       <button className='px-6 py-3 bg-green-500 hover:bg-green-700 text-white rounded-xl' onClick={()=>window.location.reload()}>Restart Qize</button> 
      
    </div>
  )
}

export default Result

import React from 'react'
//import { useCountStore } from './store'
import StepperForm from './StepperForm'

const App = () => {

  // const count = useCountStore((state) => state.count)
  // const Increment = useCountStore((state) => state.onIncrement)
  // const Decrement = useCountStore((state) => state.onDecrement)
  // const Reset = useCountStore((state) => state.onReset)
  return (
    <div className='max-w-2xl mx-auto mt-20'>
      {/* <button className='bg-red-100 text-red-500 px-4 py-2 rounded-xl'>{count}</button>
      <button 
      onClick={() => Increment(count)}
      className='bg-blue-100 text-blue-500 px-4 py-2 rounded-xl'>Increment</button>
      <button 
       onClick={() => Decrement(count)}
      className='bg-green-100 text-green-500 px-4 py-2 rounded-xl'>Decrement</button>
      <button 
       onClick={() => Reset(count)}
      className='bg-green-100 text-green-500 px-4 py-2 rounded-xl'>Reset</button> */}
      <StepperForm />
    </div>
  )
}

export default App
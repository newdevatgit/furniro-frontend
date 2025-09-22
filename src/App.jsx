import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl font-bold text-pink-500'>Hello World</h1>
      <div className="text-3xl bg-gray-100 font-bold text-blue-600">
        Tailwind is working!
      </div>

    </>
  )
}

export default App

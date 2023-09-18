import { useState } from 'react'

import './App.css'
import MiniLab from './Componets/MiniLab'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MiniLab/>
    </>
  )
}

export default App

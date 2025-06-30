import { useState } from 'react'
import Login from './component/login/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Login/>
    </>
  )
}

export default App

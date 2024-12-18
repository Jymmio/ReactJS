import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { User } from './components/User/User'
import { Player } from './components/Player/Player'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Player />
      <User />
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { User } from './components/User/User'
import { Player } from './components/Player/Player'

function App() {
  const props = {
    fullname: {
      prenom: "Nadjim",
      nom: "BOUZIDI"
    },
    hobbies: ["Music", "Anime", "Chess", "Video games"]
  }

  return (
    <>
      <Player />
      <User  fullname={props.fullname} hobbies={props.hobbies}/>
    </>
  )
}

export default App

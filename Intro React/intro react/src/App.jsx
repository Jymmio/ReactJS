import './App.css'
import { User } from './components/User/User'
import { Player } from './components/Player/Player'
import { Routine } from './components/Routine/Routine'
import { Compteuer } from './components/Compteur/Compteur'
import { Menu } from './components/Menu/Menu'
function App() {
  const user = {
    fullname: {
      prenom: "Nadjim",
      nom: "BOUZIDI"
    },
    hobbies: ["Music", "Anime", "Chess", "Video games"]
  }

  return (
    <>
      <Menu />
      <Compteuer />
      <Player />
      <Routine />
      <User  fullname={user.fullname} hobbies={user.hobbies}/>
    </>
  )
}

export default App

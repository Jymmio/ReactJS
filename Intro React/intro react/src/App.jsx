import './App.css'
import { User } from './components/User/User'
import { Player } from './components/Player/Player'
import { Routine } from './components/Routine/Routine'
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
      <Player />
      <Routine />
      <User  fullname={user.fullname} hobbies={user.hobbies}/>
    </>
  )
}

export default App

import { FirstName } from "./FullName/FirstName";
import { LastName } from "./FullName/LastName";
import { Hobbies } from "./Hobbies/Hobbies";
import './User.css';


export function User({fullname, hobbies}) {

    return (
      <>
        <div id="fullname">
            <FirstName prenom={fullname.prenom}/>
            <LastName nom={fullname.nom}/>
        </div>
        <div>
            <Hobbies hobbies={hobbies}/>
        </div>
      </>
    )
  } //Je me suis trompé et ai directement push dans le main, ceci est un changement juste pour refaire après avoir crée la branche...
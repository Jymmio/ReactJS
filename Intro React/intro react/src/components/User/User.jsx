import { FirstName } from "./FullName/FirstName";
import { LastName } from "./FullName/LastName";
import { Hobbies } from "./Hobbies/Hobbies";
import './User.css';

export function User() {

    return (
      <>
        <div id="fullname">
            <FirstName />
            <LastName />
        </div>
        <div>
            <Hobbies />
        </div>
      </>
    )
  } //Je me suis trompé et ai directement push dans le main, ceci est un changement juste pour refaire après avoir crée la branche...
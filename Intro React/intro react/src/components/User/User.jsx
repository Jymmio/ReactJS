import PropTypes from 'prop-types';
import { FirstName } from "./FullName/FirstName";
import { LastName } from "./FullName/LastName";
import { Hobbies } from "./Hobbies/Hobbies";
import './User.css';
User.propTypes = {
  fullname: PropTypes.shape({
    prenom: PropTypes.string.isRequired,
    nom: PropTypes.string.isRequired
  }),
  hobbies: PropTypes.array.isRequired
}

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
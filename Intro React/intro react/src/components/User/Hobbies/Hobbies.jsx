import PropTypes from 'prop-types';
import { Bouton } from '../../Bouton/Bouton';
import { useState } from 'react';
Hobbies.propTypes = {
  hobbies: PropTypes.array.isRequired
};
export function Hobbies({hobbies}) {
  let hobbyInput = "";
  let [hobby, hobbiesFunction] = useState(hobbies)

  function setHobby(event){
    hobbyInput = event.target.value;
  }
  function addHobby(){
    let temp = [...hobby];
    temp.push(hobbyInput);
    hobbiesFunction(temp);
    console.log(hobby);
  }
    return (
      <>
          <h5>Add Hobby</h5>
            <input type='text' onChange={setHobby}></input>
            <Bouton action='confirm' clickAction={addHobby}/>
        <ul>
        {hobby.map((hob, index) => (
        <li key={index}>{hob}</li>
      ))}
        </ul>
      </>
    ) 
  }

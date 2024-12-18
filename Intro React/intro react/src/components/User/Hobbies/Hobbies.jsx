import PropTypes from 'prop-types';
Hobbies.propTypes = {
  hobbies: PropTypes.array.isRequired
};
export function Hobbies({hobbies}) {
/*<li>Musique</li>
            <li>Anime</li>
            <li>Jeux vidéos</li>
            <li>Jeux d'echecs</li>*/
    return (
      <>
        <ul>
        {hobbies.map((hobby, index) => (
        <li key={index}>{hobby}</li>
      ))}
        </ul>
      </>
    )
  }
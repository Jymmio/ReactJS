import PropTypes from 'prop-types';
FirstName.propTypes = {
  prenom: PropTypes.string.isRequired
}
export function FirstName({prenom}) {

    return (
      <>
        <h4>{prenom}</h4> 
      </>
    )
  }

  
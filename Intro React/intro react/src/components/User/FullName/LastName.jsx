import PropTypes from 'prop-types';
LastName.propTypes = {
  nom: PropTypes.string.isRequired
};
export function LastName({nom}) {

    return (
      <>
        <h4>{nom}</h4>
      </>
    )
  }
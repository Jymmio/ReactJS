import PropTypes from 'prop-types'

Bouton.propTypes = {
    action: PropTypes.string.isRequired,
    clickAction: PropTypes.func.isRequired
}
export function Bouton({ action, clickAction }){
    return(
        <>
        <button onClick={clickAction}>{action}</button>
        </>
    )
}

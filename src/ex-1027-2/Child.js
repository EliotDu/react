import PropTypes from 'prop-types'
// increment = 1 是預設傳入參數值為1的意思
function Child({ firstName, lastName }) {
  return (
    <>
      <h1>
        {firstName},{lastName}
      </h1>
    </>
  )
}
Child.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
}

export default Child

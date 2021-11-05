import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <img src="./logoImage.jpeg" />
    <Link to="/">
      <h1 className="description">Restaurant & Bar</h1>
    </Link>
    <nav>
      {isLoggedIn ? (
        <div className="options">
          {/* The navbar will show these links after you log in */}
          <Link to="/home">Home</Link>
          <Link to="/hours-location">Hours and Location</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/private-events">Private Events</Link>
          <Link className="options" to="/happenings">
            Happening
          </Link>
          <Link to="/contact-us">Contact Us</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div className="options">
          {/* The navbar will show these links before you log in */}
          {/* <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link> */}
          <Link to="/">Home</Link>
          <Link to="/hours-location">Hours and Location</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/private-events">Private Events</Link>
          <Link to="/happenings">Happening</Link>
          <Link to="/contact-us">Contact Us</Link>
        </div>
      )}
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}

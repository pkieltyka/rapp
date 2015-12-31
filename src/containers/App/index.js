import React from 'react'
import 'styles/core.scss'

// NOTE: Stateless/function components *will not* hot reload!
// react-transform *only* works on component classes.
const App = ({ children }) => {
  return (
    <div className='page-container'>
      <div className='view-container'>
        {children}
      </div>
    </div>
  )
}

App.propTypes = {
  children: React.PropTypes.element
}

export default App

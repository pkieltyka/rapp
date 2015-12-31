import React from 'react'
import styles from './styles/app.scss'

// NOTE: Stateless/function components *will not* hot reload!
// react-transform *only* works on component classes.
const App = ({ children }) => {
  return (
    <div className={styles.app}>
      {children}
    </div>
  )
}

App.propTypes = {
  children: React.PropTypes.element
}

export default App

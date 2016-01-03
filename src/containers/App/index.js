import { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import styles from './styles/app.scss'

// NOTE: Stateless/function components *will not* hot reload!
// react-transform *only* works on component classes.
// const App = ({ children }) => {
//   return (
//     <div className={styles.app}>
//       {children}
//     </div>
//   )
// }

class App extends Component {
  constructor(props) {
    super(props)
  }

  // componentDidMount() {
  //   const { dispatch } = this.props
  //   dispatch({ type: 'HII' })
  // }

  render() {
    return (
      <div className={styles.app}>
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.element,
  dispatch: PropTypes.func.isRequired
}

export default connect()(App)

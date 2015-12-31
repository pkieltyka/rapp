import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { actions as counterActions } from 'store/modules/counter'
import styles from './styles.scss'

import Test from 'components/Test'

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
  counter: state.counter
})
export class HomeView extends Component {
  static propTypes = {
    counter: React.PropTypes.number.isRequired,
    // doubleAsync: React.PropTypes.func.isRequired,
    increment: React.PropTypes.func.isRequired
  }

  render() {
    return (
      <div className='container text-center'>
        <h1>Welcomeeee!! this again.. okay</h1>
        <h2>
          Counter:&nbsp;
          <span className={styles['counter--green']}>{this.props.counter}</span>
        </h2>
        <button onClick={() => this.props.increment(1)}>Increment</button>
        <Link to='/about'>Go To About View</Link>
        <Test />
      </div>
    )
  }
}

export default connect(mapStateToProps, counterActions)(HomeView)
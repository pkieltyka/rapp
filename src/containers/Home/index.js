import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import styles from './styles.scss'

import * as counterActions from 'modules/counter'
import * as postActions from 'modules/posts'

export const Home = (props) => (
  <div className='container text-center'>
    <h1>Welcome!!</h1>
    <h2>
      Counter:&nbsp;
      <span className={styles['counter--green']}>{props.counter}</span>
    </h2>
    <button onClick={() => props.increment(1)}>Increment</button>
    <button onClick={() => props.fetchPosts(365)}>Fetch Posts</button>
    <Link to='/about'>Go To About View</Link>
  </div>
)

Home.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  counter: state.counter
})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(counterActions.increment()),
  fetchPosts: (hubID) => dispatch(postActions.fetchPosts(hubID))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

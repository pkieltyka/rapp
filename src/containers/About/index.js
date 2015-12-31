import React, { Component } from 'react'
import { Link } from 'react-router'

export class AboutView extends Component {
  render() {
    return (
      <div className='container text-center'>
        <h1>This is the about view cool!</h1>
        <hr />
        <Link to='/'>Back To Home View</Link>
      </div>
    )
  }
}

export default AboutView

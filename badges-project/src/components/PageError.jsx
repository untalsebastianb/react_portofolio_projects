import React, { Component } from 'react'
import './styles/PageError.css'

export class PageError extends Component {
  render() {
    return (
      <div className='PageError'>
        🔥 {this.props.error.message} 🆘
      </div>
    )
  }
}

export default PageError

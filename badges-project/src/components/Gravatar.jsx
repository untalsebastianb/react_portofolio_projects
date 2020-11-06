import React, { Component } from 'react'
import md5 from 'md5'

export class Gravatar extends Component {
  render() {
    const email = this.props.email
    const hash = md5(email)

    return (
      <img
        className={this.props.className}
        src={`https://www.gravatar.com/avatar/${hash}?d=identicon`}
        alt="avatar"
      />
    )
  }
}

export default Gravatar

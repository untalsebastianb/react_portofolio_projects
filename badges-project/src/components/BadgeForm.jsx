import React, { Component } from 'react'

export class BadgeForm extends Component {

  // Asi se guardaba el formulario antes ✅
  // handleChange = ({ target }) => {
  //   // console.log(target.value)
  //   this.setState({
  //     [target.name]: target.value
  //   })
  // }


  handleClick = (e) => {
    console.log('button was clicked')
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {

    const { firstName, lastName, Twitter, jobTitle, Email } = this.props

    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input onChange={this.props.onChange}
              className='form-control'
              type="text"
              name='firstName'
              value={firstName}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input onChange={this.props.onChange}
              className='form-control'
              type="text"
              name='lastName'
              value={lastName}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input onChange={this.props.onChange}
              className='form-control'
              type="email"
              name='Email'
              value={Email}
            />
          </div>

          <div className="form-group">
            <label>Job title</label>
            <input onChange={this.props.onChange}
              className='form-control'
              type="text"
              name='jobTitle'
              value={jobTitle}
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input onChange={this.props.onChange}
              className='form-control'
              type="text"
              name='Twitter'
              value={Twitter}
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">Save</button>
        </form>
      </div>
    )
  }
}

export default BadgeForm

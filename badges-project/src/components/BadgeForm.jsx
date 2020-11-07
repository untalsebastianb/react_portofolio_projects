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

    const { firstName, lastName, twitter, jobTitle, email, error } = this.props

    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.props.onSubmit}>
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
              name='email'
              value={email}
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
              name='twitter'
              value={twitter}
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">Save</button>
          {error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}
          {/* This is a way to a ternary conditional */}
          {/* {(error)
            ? <p className="text-danger">{this.props.error.message}</p>
            : null
          } */}
        </form>
      </div>
    )
  }
}

export default BadgeForm

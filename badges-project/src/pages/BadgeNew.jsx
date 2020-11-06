import React, { Component } from 'react'
import Badge from '../components/Badge.jsx'
import Navbar from '../components/NavBar.jsx'
import header from '../images/platziconf-logo.svg'
import '../pages/styles/BadgeNew.css'
import BadgeForm from '../components/BadgeForm'
import api from '../api.js'


class BadgeNew extends Component {

  state = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    }
  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    this.setState({
      loading: true,
      error: null
    })
    try {
      this.setState({
        loading: false
      })
      await api.badges.create(this.state.form)
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      })
    }
  }


  render() {
    return (
      <div>

        <div className="BadgeNew__hero">
          <img className="BadgeNew__hero-image img-fluid" src={header} alt="" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || 'First Name'}
                lastName={this.state.form.lastName || 'Last Name'}
                jobTitle={this.state.form.jobTitle || 'Job Title'}
                twitter={this.state.form.twitter || 'Twitter'}
                email={this.state.form.email || 'Email'}
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                {...this.state.form} />
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default BadgeNew
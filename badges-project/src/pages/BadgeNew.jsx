import React, { Component } from 'react'
import Badge from '../components/Badge.jsx'
import Navbar from '../components/NavBar.jsx'
import header from '../images/badge-header.svg'
import '../pages/styles/BadgeNew.css'
import BadgeForm from '../components/BadgeForm'


class BadgeNew extends Component {

  state = {
    form: {
      firstName: '',
      lastName: '',
      Email : '',
      jobTitle: '',
      Twitter: '',
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


  render() {
    return (
      <div>
        
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                jobTitle={this.state.form.jobTitle}
                Twitter={this.state.form.Twitter}
                email={this.state.form.Email}
              />
            </div>
            <div className="col-6">
              <BadgeForm onChange={this.handleChange} {...this.state.form} />
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default BadgeNew
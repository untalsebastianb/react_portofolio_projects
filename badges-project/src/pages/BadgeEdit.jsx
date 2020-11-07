import React, { Component } from 'react'
import Badge from '../components/Badge.jsx'
import PageLoading from '../components/PageLoading.jsx'
import header from '../images/platziconf-logo.svg'
import '../pages/styles/BadgeEdit.css'
import BadgeForm from '../components/BadgeForm'
import api from '../api.js'


class BadgeEdit
  extends Component {

  state = {
    loading: true,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async (e) => {
    this.setState({ loading: true, error: null })

    try {
      const data = await api.badges.read(
        this.props.match.params.badgeId
      )
      this.setState({ loading: false, form: data })
    } catch (error) {
      this.setState({ loading: false, error: error })
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
      await api.badges.update(this.props.match.params.badgeId, this.state.form)
      this.setState({
        loading: false
      })
      // Redirecto to badges
      this.props.history.push('/badges')
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      })
    }
    console.log(this.state.loading)
  }


  render() {
    // Case loading is true don't want to return the page
    if (this.state.loading) {
      return <PageLoading />
    }

    return (
      <div>

        <div className="BadgeEdit__hero">
          <img className="BadgeEdit__hero-image img-fluid" src={header} alt="" />
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
            <h1>Edit Attendant</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                error={this.state.error}
                {...this.state.form} />
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default BadgeEdit

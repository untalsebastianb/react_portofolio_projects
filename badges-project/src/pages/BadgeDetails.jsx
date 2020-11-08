import React, { Component } from 'react'
import './styles/BadgeDetails.css'
import confLogo from '../images/platziconf-logo.svg'
import PageLoading from '../components/PageLoading.jsx'
import Modal from '../components/Modal.jsx'
import PageError from '../components/PageError.jsx'
import api from '../api'
import Badge from '../components/Badge'
import { Link } from 'react-router-dom'


export class BadgeDetails extends Component {
  state = {
    loading: true,
    error: null,
    data: undefined
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({
      loading: true, error: null
    })

    try {
      const data = await api.badges.read(this.props.match.params.badgeId)
      this.setState({ loading: false, data: data })

    } catch (error) {
      this.setState({ loading: false, error: error })
    }

  }

  render() {

    if (this.state.loading) {
      return <PageLoading />
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />
    }

    const badge = this.state.data

    return (
      <div>
        <div className='BadgeDetails__hero'>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img src={confLogo} alt="Logo de la conferencia" />
              </div>
              <div className="col-6 BadgeDetails__hero-attendant-name">
                <h1>{badge.firstName} {badge.lastName}</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={badge.firstName || 'First Name'}
                lastName={badge.lastName || 'Last Name'}
                jobTitle={badge.jobTitle || 'Job Title'}
                twitter={badge.twitter || 'Twitter'}
                email={badge.email || 'Email'}
              />
            </div>
            <div className="col">
              <h2>Actions</h2>
              <div>
                <div>
                  <Link className='btn btn-primary mb-4' to={`/badges/${badge.id}/edit`}>
                    Edit
                  </Link>
                </div>
                <div>
                  <button className='btn btn-danger '>Delete</button>
                  <Modal isOpen={true}/>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default BadgeDetails

import React, { Component } from 'react'
import './styles/BadgeDetails.css'
import confLogo from '../images/platziconf-logo.svg'
import PageLoading from '../components/PageLoading.jsx'
import Modal from '../components/Modal.jsx'
import PageError from '../components/PageError.jsx'
import api from '../api'
import Badge from '../components/Badge'
import DeleteBadgeModal from '../components/DeleteBadgeModal.jsx'
import { Link } from 'react-router-dom'


export class BadgeDetails extends Component {
  state = {
    isOpen: false,
    loading: true,
    error: null,
    data: undefined
  }

  // onClose = (e) => {
  //   this.setState({ isOpen: false })
  // }

  componentDidMount() {
    this.fetchData()
  }

  handleDeleteBadge = async (e) => {
    this.setState({ loading: true, error: null })

    try {
      await api.badges.remove(this.props.match.params.badgeId)
      this.setState({ loading: false })
      this.props.history.push('/badges')

    } catch (error) {
      this.setState({ loading: false, error: error })
    }
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
                  <button onClick={() => { this.setState({ isOpen: true }) }} className='btn btn-danger '>Delete</button>
                  <DeleteBadgeModal isOpen={this.state.isOpen} onClose={() => { this.setState({ isOpen: false }) }} onDeleteBadge={this.handleDeleteBadge} />
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

import React, { Component } from 'react'
import NavBar from '../components/NavBar.jsx'
import './styles/Badges.css'
import confLogo from '../images/badge-header.svg'
import BadgesList from '../components/BadgesList.jsx';
import { Link } from 'react-router-dom'
import api from '../api'


export class Badges extends Component {

  state = {
    loading: true,
    error: null,
    data: undefined
  };

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null })

    try {
      const data = await api.badges.list()
      this.setState({ loading: false, data: data })

    } catch (error) {
      this.setState({ loading: false, error: error })

    }
  }

  render() {
    if (this.state.loading) {
      return 'Loading...'
    }

    if (this.state.error) {
      return 'Error'
    }

    return (
      <>

        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo"
                src={confLogo}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="Badge__container">

          <div className="Badges__buttons">
            <Link to="/badges/new" className='btn btn-primary'>
              New Badge
            </Link>
          </div>

          <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList badges={this.state.data} />
            </div>
          </div>


        </div>


      </>
    )
  }
}

export default Badges

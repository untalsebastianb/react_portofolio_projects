import React, { Component } from 'react'
import Badge from './Badge'
import './styles/BadgesList.css'
import { Link } from 'react-router-dom'
import Gravatar from './Gravatar'


export class BadgesList extends Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <>
          <h3>No badges were found</h3>
          <Link to='/badges/new' >
            <span className="btn btn-primary">
              Create new badge
        </span>
          </Link>
        </>
      )
    }

    return (
      <div className='BadgesList'>
        <ul className="list-unstyled" >
          {this.props.badges.map((badge) => (
            <Link className='text-reset text-decoration-none' to={`/badges/${badge.id}/edit`}>
              <li key={badge.id} className='BadgesListItem'>
                <Gravatar
                  className='BadgesListItem__avatar'
                  email={badge.email}
                />
                <div className='Badge__info__container'>
                  <section className='Badge__info'>{badge.firstName} {badge.lastName}</section>
                  <span className='Twitter__logo ' />
                  <span className='Twitter__info'>@{badge.twitter}</span>
                  <section>{badge.jobTitle}</section>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    )
  }
}

export default BadgesList

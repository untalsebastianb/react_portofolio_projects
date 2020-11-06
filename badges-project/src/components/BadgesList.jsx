import React, { Component } from 'react'
import Badge from './Badge'
import './styles/BadgesList.css'
import { Link } from 'react-router-dom'

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
            <li key={badge.id} className='BadgesListItem'>
              <img className='BadgesListItem__avatar' src={badge.avatarUrl} alt="Avatar" />
              <div className='Badge__info__container'>
                <section className='Badge__info'>{badge.firstName} {badge.lastName}</section>
                <span className='Twitter__logo ' />
                <span className='Twitter__info'>@{badge.twitter}</span>
                <section>{badge.jobTitle}</section>
              </div>

            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default BadgesList

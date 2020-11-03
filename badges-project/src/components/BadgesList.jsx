import React, { Component } from 'react'
import Badge from './Badge'
import './styles/BadgesList.css'

export class BadgesList extends Component {
  render() {
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

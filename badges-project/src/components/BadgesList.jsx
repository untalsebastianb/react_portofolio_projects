import React, { useState, useMemo } from 'react'
import './styles/BadgesList.css'
import { Link } from 'react-router-dom'
import Gravatar from './Gravatar'

function useSearchBadges(badges) {
  
}

const BadgesList = (props) => {

  //  const { badges } = props
  // This two are equivalent 
  const badges = props.badges

  const [query, setQuery] = useState('')
  const [filteredBadges, setFilteredResults] = useState(badges)

  useMemo(() => {
    const result = badges.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase())
    })

    setFilteredResults(result)

  }, [badges, query])

  if (filteredBadges.length === 0) {
    return (
      <>
        <div className="form-group">
          <label> Filter Badges</label>
          <input type="text" className='form-control'
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              console.log(e.target.value)
            }}
          />
        </div>

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
      <div className="form-group">
        <label> Filter Badges</label>
        <input type="text" className='form-control'
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            console.log(e.target.value)
          }}
        />
      </div>

      <ul className="list-unstyled" >
        {filteredBadges.map((badge) => (
          <Link className='text-reset text-decoration-none' to={`/badges/${badge.id}`}>
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

export default BadgesList

import React from 'react'
import logoConf from '../images/badge-header.svg'
import Gravatar from './Gravatar'
import './styles/Badge.css'

class Badge extends React.Component {
  render() {

    return (
      <div className='Badge'>
        <div className="Badge__header">
          <img src={logoConf} alt='logo de la conferencia' />
        </div>

        <div className="Badge__section-name ">
          {/* <img className="Badge__avatar" src={myAvatar} alt="avatar" /> */}
          <Gravatar
          className="Badge__avatar"
          email={this.props.email}
          alt='Avatar'
          />
          <h1>{this.props.firstName} <br /> {this.props.lastName}</h1>
        </div>

        <div className='Badge__section-info'>
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>

        <div className='Badge__footer'>
          <p>Platzi conf</p>
        </div>

      </div>
    )
  }

}

export default Badge
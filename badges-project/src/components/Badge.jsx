import React from 'react'
import logoConf from '../images/badge-header.svg'
import './styles/Badge.css'
import myAvatar from './styles/sebastiann.png'

class Badge extends React.Component {
  render() {

    return (
      <div className='Badge'>
        <div className="Badge__header">
          <img src={logoConf} alt='logo de la conferencia' />
        </div>

        <div className="Badge__section-name ">
          <img className="Badge__avatar" src={myAvatar} alt="avatar" />
          <h1>{this.props.firstName} <br /> {this.props.lastName}</h1>
        </div>

        <div className='Badge__section-info'>
          <h3>{this.props.job}</h3>
          <div>{this.props.twitter}</div>
        </div>

        <div className='Badge__footer'>
          <p>Platzi conf</p>
        </div>

      </div>
    )
  }

}

export default Badge
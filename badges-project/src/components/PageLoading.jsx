import React, { Component } from 'react'
import Loader from './Loader'
import './styles/PageLoading.css'

export class PageLoading extends Component {
  render() {
    return (
      <div className="PageLoading">
        <Loader/>
        
      </div>
    )
  }
}




export default PageLoading

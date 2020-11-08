import React, { Component } from 'react'
import ReactDOM from 'react-dom'



export class Modal extends Component {
  render() {
    if(!this.props.isOpen){
      return null
    }

    return (
      ReactDOM.createPortal(
        <div className='modal'></div>,
        document.getElementById('portal')
      )
    )
  }
}

export default Modal

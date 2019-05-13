import React, { Component } from "react";

class AccountItem extends Component {

  _handleOnClick() {
    console.log('on click')
  }

  render() {
    const { account, key } = this.props

    return (
      <div className='row' key={key}>
        <div className='col-md-2'>
          <img src='./src/assets/beans.jpeg'
            style={{ width: '100px', height: '100px' }}
            alt='avt'
          />  
        </div>
        <div className='col-md-3 text-left' >
          <h6>{account.customerName}</h6>
        </div>
        <div className='col-md-2'>
          <h6>{account.phoneNumber}</h6>
        </div>
        <div className='col-md-2'>
          <h6>{account.username}</h6>
        </div>
        <div className='col-md-1'>
          <button className='btn btn-primary btn-md'
            onClick={this._handleOnClick.bind(this)}>
            <span className='glyphicon glyphicon-chevron-right'>History</span>
          </button>
        </div>
        <div className='col-md-1'>
          <button className='btn btn-default btn-md'
            onClick={this._handleOnClick.bind(this)}>
            <span className='glyphicon glyphicon-info-sign'>More Info</span>
          </button>
        </div>
        <div className='col-md-1'>
          <button className='btn btn-danger btn-md'
            onClick={this._handleOnClick.bind(this)}>
            <span className='glyphicon glyphicon-remove'>Delete</span>
          </button>
        </div>
      </div>
    )
  }
}

export default AccountItem
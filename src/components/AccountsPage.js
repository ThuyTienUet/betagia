import React, { Component } from 'react'
import { connect } from "react-redux"
import Navbar from './Navbar'
import { fetchAccounts } from '../actions/account'
import { withRouter } from 'react-router-dom'
import _ from "lodash"
import AccountItem from './AccountItem'

class AccountsPage extends Component {

  componentWillMount() {
    this.props.fetchAccounts()
  }

  _renderAccountItem() {
    return _.map(this.props.accounts, (product, key) => {
      return <AccountItem account={account} key={key} />
    });
  }

  _handleOnClick() {
    console.log('click')
  }

  render() {
    const { accounts } = this.props

    if (!accounts) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Navbar activeNav='accounts' />
        <div className='container'>
          <hr />
          <div className='row'>
            <div className='col-md-5'>
              <h4>Customer</h4>
            </div>
            <div className='col-md-2'>
              <h4>Phone number</h4>
            </div>
            <div className='col-md-2'>
              <h4>Username</h4>
            </div>
            <div className='col-md-3'>
              <h4>Actions</h4>
            </div>
          </div>
          <hr />

          {!!accounts && this._renderAccountItem()}
        </div>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    accounts: state.accounts
  };
}

export default withRouter(connect(mapStateToProps, { fetchAccounts })(AccountsPage));
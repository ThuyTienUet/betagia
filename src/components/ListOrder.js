import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../actions/order";
import { withRouter } from 'react-router-dom';
import Order from './Order'
class ListOrder extends Component {
  componentWillMount() {
    this.props.fetchOrders();
  }

  renderList() {
    return _.map(this.props.orders, (order, key) => {
      return <Order order={order} key={key} />;
    });
  }

  render() {
    const { orders } = this.props;

    if (!orders) {
      return <div>Loading...</div>;
    }

    return ( 
      <div>
        <table>
          <thead>  
            <tr>
              <th>STT</th>
              <th>Customer Name</th>
              <th>Products</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.renderList()}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    orders: state.orders
  };
}

export default withRouter(connect(mapStateToProps, actions)(ListOrder));

import React, { Component } from 'react'
import { connect } from "react-redux"
import Navbar from './Navbar'
import { fetchProducts } from '../actions/products'
import { withRouter } from 'react-router-dom'
import _ from "lodash"
import ProductItem from './ProductItem'

class ProductsPage extends Component {

  componentWillMount() {
    this.props.fetchProducts()
  }

  _renderProductItem() {
    return _.map(this.props.products, (product, key) => {
      return <ProductItem product={product} key={key} />
    });
  }

  _handleOnClick() {
    console.log('click')
  }

  render() {
    const { products } = this.props

    if (!products) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Navbar activeNav='products' />
        <div className='container'>
          <hr />
          <div className='row'>
            <div className='col-md-5'>
              <h4>Items</h4>
            </div>
            <div className='col-md-2'>
              <h4>Category</h4>
            </div>
            <div className='col-md-2'>
              <h4>Price</h4>
            </div>
            <div className='col-md-3'>
              <h4>Actions</h4>
            </div>
          </div>
          <hr />

          {!!products && this._renderProductItem()}
        </div>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

export default withRouter(connect(mapStateToProps, { fetchProducts })(ProductsPage));
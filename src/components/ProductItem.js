import React, { Component } from "react";

class ProductItem extends Component {

  _handleOnClick() {
    console.log('on click')
  }

  render() {
    const { product, key } = this.props

    return (
      <div className='row' key={key}>
        <div className='col-md-2'>
          <img src='./src/assets/coffee.jpg'
            style={{ width: '100px', height: '100px' }}
            alt='avt'
          />  
        </div>
        <div className='col-md-3 text-left' >
          <h6>{product.productName}</h6>
        </div>
        <div className='col-md-2'>
          <h6>{product.category}</h6>
        </div>
        <div className='col-md-2'>
          <h6>{product.price}</h6>
        </div>
        <div className='col-md-1'>
          <button className='btn btn-success btn-md'
            onClick={this._handleOnClick.bind(this)}>
            <i className="far fa-edit"></i>
          </button>
        </div>
        <div className='col-md-1'>
          <button className='btn btn-primary btn-md'
            onClick={this._handleOnClick.bind(this)}>
            <i className="far fa-list-alt"></i>
          </button>
        </div>
        <div className='col-md-1'>
          <button className='btn btn-danger btn-md'
            onClick={this._handleOnClick.bind(this)}>
            <i className="far fa-trash-alt"></i>
          </button>
        </div>
      </div>
    )
  }
}

export default ProductItem
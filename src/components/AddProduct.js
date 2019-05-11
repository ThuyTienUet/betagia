import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addProduct } from '../actions/products';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import validate from '../validate';
import Navbar from './Navbar';

class AddProduct extends Component {

    state = {
        category: 'Drink',
        productCode: '',
        productName: '',
        image: '',
        description: '',
        price: '',
        quantity: '',
        relatedProduct: ''
    }

    _handleChangeTextForm(field, e) {
        const { value } = e.target;
        this.setState({
            [field]: value
        })
    }
    _handleSubmit = () => {       
        this.props.addProduct(this.state, () => {
            // this.props.history.push('/');
        });
    }

    render() {
        const { handleSubmit } = this.props;
        const { category, productCode, productName, image, description, price, quantity, relatedProduct } = this.state

        return (
            <div>
                <Navbar activeNav="add a product" />
                <form onSubmit={handleSubmit(this._handleSubmit.bind(this))}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            onChange={this._handleChangeTextForm.bind(this, 'productName')}
                            className="form-control" value={productName} type="text" />
                    </div>
                    {/* <input type="file" accept="image/*" capture></input> */}
                    <div className="form-group">
                        <label>Image</label>
                        <input
                            onChange={this._handleChangeTextForm.bind(this, 'image')}
                            className="form-control" value={image} type="text" />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea
                            onChange={this._handleChangeTextForm.bind(this, 'description')}
                            className="form-control" value={description} type="text" />
                    </div>
                    <div className="form-group">
                        <label>Price</label>
                        <input
                            onChange={this._handleChangeTextForm.bind(this, 'price')}
                            className="form-control" value={price} type="text" />
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <select className='category' value={category} onChange={this._handleChangeTextForm.bind(this, 'category')}>
                            <option value="drink">Drink</option>
                            <option value="soup">Soup</option>
                            <option value="salad">Salad</option>
                        </select>
                    </div>
                    <Button type="submit">Add Product</Button>
                    <Link to="/">
                        <Button>Cancel</Button>
                    </Link>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    validate,
    form: 'PostsNewProduct'
})(connect(null, { addProduct })(AddProduct));

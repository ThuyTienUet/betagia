import React, {Component} from "react"
import { login } from '../actions/account';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import validate from '../validate';
import { Button } from 'semantic-ui-react';

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    _handleChangeTextForm(field, e) {
        const { value } = e.target;
        this.setState({
            [field]: value
        })
    }

    _handleSubmit = () => {
        const {email, password} = this.state
        login(email, password)
        .then(res => {
            if (res) {
                this.props.history.push('/');
            }            
        })
        .catch(err => {
            console.log(err);           
        })        
    }

    render() {
        const { handleSubmit } = this.props;
        const {email, password} = this.state;

        return (
            <div className="Login"> 
                <form onSubmit={handleSubmit(this._handleSubmit.bind(this))}>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            onChange={this._handleChangeTextForm.bind(this, 'email')}
                            className="form-control" value={email} type="text" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            onChange={this._handleChangeTextForm.bind(this, 'password')}
                            className="form-control" value={password} type="password" />
                    </div>
                    <Button type="submit">Login</Button>
                </form>
            </div>
        )
    }
}

export default reduxForm({
    validate,
    form: 'Login'
})(connect(null, { login })(Login));
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducers from './reducers';
import HomePage from './components/HomePage';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductsPage from './components/ProductsPage'
import AccountsPage from './components/AccountsPage'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>

          <Route exact path="/" component={Login} />
          <Route path="/home" component={HomePage} />
          <Route path="/new" component={AddProduct} />
          <Route path="/products" component={ProductsPage}/> 
          <Route path="/accounts" component={AccountsPage}/>
          {/* <Route path="/recipes/:id" component={RecipeShow} /> */}
          {/* <Route path="/recipes" component={RecipePage} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));

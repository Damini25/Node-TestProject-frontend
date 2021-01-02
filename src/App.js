import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import './App.css';
import AsyncComponent from './common/utilities/AsyncComponent/index';

const Login = () => import('./login/container/Login');
const Signup = () => import('./signup/container/Signup');
const ProductListing = () => import('./user/productsListing/container/ProductListing');
const CreateProduct = () => import('./admin/createProduct/container/CreateProduct');
const ListProductAdmin = () => import('./admin/listProduct/container/ListProduct');
const EditProductAdmin = () => import('./admin/editProduct/container/EditProduct');

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Welcome to Shopping Cart
        <BrowserRouter>
          <Switch>

            <Route
              exact
              path="/login"
              component={props => (
                <AsyncComponent moduleProvider={Login} {...props} />
              )}
            />

            <Route
              exact
              path="/signup"
              component={props => (
                <AsyncComponent moduleProvider={Signup} {...props} />
              )}
            />

            <Route
              exact
              path="/user/products"
              component={props => (
                <AsyncComponent moduleProvider={ProductListing} {...props} />
              )}
            />

            <Route
              exact
              path="/admin/createProduct"
              component={props => (
                <AsyncComponent moduleProvider={CreateProduct} {...props} />
              )}
            />

            <Route
              exact
              path="/admin/listProducts"
              component={props => (
                <AsyncComponent moduleProvider={ListProductAdmin} {...props} />
              )}
            />
            <Route
              exact
              path="/admin/editProduct/:id"
              component={props => (
                <AsyncComponent moduleProvider={EditProductAdmin} {...props} />
              )}
            />
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

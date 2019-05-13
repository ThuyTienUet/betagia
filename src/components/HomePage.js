import React, { Component } from 'react';
import Navbar from './Navbar';
import ListOrder from './ListOrder';

class HomePage extends Component {

  render() {
    const isLogged = sessionStorage.getItem("isLogged");
    return (
      <div>
        <Navbar activeNav="home" />
        <ListOrder />
       </div>
    )
  }
}

export default HomePage;

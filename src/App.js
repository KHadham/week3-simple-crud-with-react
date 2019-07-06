import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Mainmenu from './components/Home';
import './css/App.css';


class App extends Component {

  render() {
    return (
      <div>
     <Navbar />
     <Search />
     <Mainmenu />   
    </div>
    );
  }
}

export default App;

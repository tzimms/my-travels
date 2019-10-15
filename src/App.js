import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Travels</h1>
        </header>
        <Travel
          destination="Phuket"
          country="Thailand"
          photo="https://cdn.pixabay.com/photo/2017/02/21/00/54/beach-2084350_1280.jpg"
          
          distance=  "10,941 km"
        />
        <Travel
          destination="Bali"
          country="Indonesia"
          photo="https://images.pexels.com/photos/1814376/pexels-photo-1814376.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          distance= "13,520 km"
        />
      </div>
    );
  }
}

export default App;

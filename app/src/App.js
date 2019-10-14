import React, { Component} from "react";
import Header from "./components/Layout/Header"
import Footer from "./components/Layout/Footer"
import Content from "./components/Layout/Content"

import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component{
  render(){
    return(
      <div className="App">
        <Header/>
          <Content/>      
        <Footer/>
      </div>
    );
  }
}

export default App;
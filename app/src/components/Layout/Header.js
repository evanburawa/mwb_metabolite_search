import React, { Component} from "react";
import Navbar from "./Navbar"

class Header extends Component{
  render(){
    return(
      <div className="header">
        <Navbar/>
      </div>
    );
  }
}

export default Header;
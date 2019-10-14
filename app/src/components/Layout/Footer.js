import React, { Component} from "react";

class Footer extends Component{
  constructor(props){

    super(props)

    this.style = {
        backgroundColor: "#F8F8F8",
        borderTop: "1px solid #E7E7E7",
        textAlign: "center",
        padding: "20px",
        position: "fixed",
        left: "0",
        bottom: "0",
        height: "60px",
        width: "100%",
    }

    this.phantom = {
      display: 'block',
      padding: '20px',
      height: '60px',
      width: '100%',
    }
  }

  render(){
    return(

      <div className="footer">
        <div style={this.phantom}/>
        <div style={this.style}>
        </div>
      </div>
    );
  }
}

export default Footer;
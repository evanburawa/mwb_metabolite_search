import React, { Component} from "react";

import LoadingImage from "./loading.gif"



class Loading extends Component{
  
  constructor(props){

    super(props)

    this.state = {
      show: false
    }

    this.Style = {
      width: "100%",
      height: "400px",
      backgroundImage: "url(" + { LoadingImage } + ")"
    };

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange({ target }) {
    
    this.setState({
      [target.id]: target.value
    });
  }


  render(){
    return(
      <div className="loading-container" style={ this.Style }>
      </div>
    );
  }
}

export default Loading;
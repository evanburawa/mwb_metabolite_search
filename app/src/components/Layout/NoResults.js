import React, { Component} from "react";

class NoResults extends Component{
  
  constructor(props){

    super(props)

  }


  render(){

    console.log(this.props);

    return(
      <div className="results-container">

        <h2>No results found</h2>    

      </div>
    );
  }
}

export default NoResults;
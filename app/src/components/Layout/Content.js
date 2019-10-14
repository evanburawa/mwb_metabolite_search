import React, { Component} from "react";
import SearchForm from './SearchForm';
import Results from './Results';

class Content extends Component{
  
  constructor(props){
    super(props)

    this.state = {
      showLoading: false,
      showResults: false,
      data : {}
    }

    this.handleLoading = this.handleLoading.bind(this);
    this.handleResults = this.handleResults.bind(this);
    this.apiDataFromSearch = this.apiDataFromSearch.bind(this);
  
  }

  handleLoading(){

   this.setState({
      showLoading: !this.state.showLoading
    })

  }

  handleResults(){
   this.setState({
      showResults: !this.state.showResults
    })
  }  
  
  apiDataFromSearch(apiDataFromSearchChild){
    
    console.log('recieved');

    this.handleLoading();
    this.handleResults();

    this.setState = {
      data: apiDataFromSearchChild
    }

  }

  render(){

    return(
      <div>
        <div className="left-content">
          <div className="content-container">
            <SearchForm apiDataCallback={ this.apiDataFromSearch } showLoading={this.handleLoading}/>

          </div>
        </div>

        <div className="right-content">
          <div className="content-container">
            
            { this.state.showLoading ? <div className="loading-container"></div> : null }

            { this.state.showResults ? <Results data = {this.state.data} /> : null }
            

          </div>
        </div>
        <div className="clear"></div>

      </div>
    );
  }
}

export default Content;
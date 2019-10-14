import React, { Component} from "react";
import SearchForm from './SearchForm';
import Results from './Results';
import NoResults from './NoResults';
import Loading from './Loading';

class Content extends Component{
  
  constructor(props){
    super(props)

    this.state = {
      showLoading: false,
      showResults: false,
      
      img: '',
      name : '',
      description: '',
      exactMass: '',
      formula: '',
      inchiKey: '',
      mainClass: '',
      subClass: '',
      sysName: '',
      pubchem_cid: '',
      regno: ''      
    }

    this.handleLoading = this.handleLoading.bind(this);
    this.handleResults = this.handleResults.bind(this);
    this.apiDataFromSearch = this.apiDataFromSearch.bind(this);
  
  }

  handleLoading = () =>{

   this.setState({
      showLoading: !this.state.showLoading
    })

  }

  handleResults = () => {
   this.setState({
      showResults: !this.state.showResults
    })
  }  

  
  apiDataFromSearch(apiDataFromSearchChild){
    
    this.handleLoading();

console.log(apiDataFromSearchChild.status);

    if(apiDataFromSearchChild.status == 204){

      this.handleResults();

    }else{
      const image = new Buffer(apiDataFromSearchChild.data.img).toString('base64');

      this.setState({
        img: image,
        name : apiDataFromSearchChild.data.name,
        description: apiDataFromSearchChild.data.description,
        exactMass: apiDataFromSearchChild.data.exactmass,
        formula: apiDataFromSearchChild.data.formula,
        inchiKey: apiDataFromSearchChild.data.inchi_key,
        mainClass: apiDataFromSearchChild.data.main_class,
        subClass: apiDataFromSearchChild.data.sub_class,
        sysName: apiDataFromSearchChild.data.sys_name,
        pubchem_cid: apiDataFromSearchChild.data.pubchem_cid,
        regno: apiDataFromSearchChild.data.regno,      
      })

      this.handleResults();
    }
  }

  render(){

    return(
      <div>
        <div className="left-content">
          <div className="content-container">
            <SearchForm loadingCallback = {this.handleLoading} apiDataCallback={ this.apiDataFromSearch } showLoading={this.handleLoading}/>

          </div>
        </div>

        <div className="right-content">
          <div className="content-container">
            
            { this.state.showLoading ? <Loading /> : null }

            { !this.state.showResults ? <NoResults /> : null }

            { this.state.showResults ? 
                <Results 
                  img = {this.state.img}
                  name = {this.state.name}
                  description  = {this.state.description}
                  exactMass = {this.state.exactMass}
                  formula = {this.state.formula}
                  inchiKey  = {this.state.inchiKey}
                  mainClass = {this.state.mainClass}
                  subClass = {this.state.subClass}
                  sysName = {this.state.sysName}
                  pubchem_cid = {this.state.pubchem_id}
                  regno = {this.state.regno}
                /> 

                : null 
            }

          </div>
        </div>
        <div className="clear"></div>

      </div>
    );
  }
}

export default Content;
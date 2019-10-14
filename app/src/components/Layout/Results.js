import React, { Component} from "react";
import {Table} from 'react-bootstrap'

class Results extends Component{
  
  constructor(props){

    super(props)

    this.state={
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
      regno: '',

    }
  }

  componentDidUpdate(prevProps) {
    console.log('new');
    this.setState({
        img: this.props.data.img,
        name : this.props.data.name,
        description: this.props.data.description,
        exactMass: this.props.exactMass,
        formula: this.props.formula,
        inchiKey: this.props.inchiKey,
        mainClass: this.props.mainClass,
        subClass: this.props.subClass,
        sysName: this.props.sysName,
        pubchem_cid: this.props.pubchem_cid,
        regno: this.props.regno,
    });

    {
    /*
    if(prevProps.value !== this.props.value) {
      this.setState({value: this.props.value});
    }
    */
    }

  }

  render(){
    return(
      <div className="results-container">
  

      <img src="{ this.state.img }" />
      <Table striped bordered hover>
          <thead>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{ this.state.name }</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>{ this.state.description }</td>
            </tr>
            <tr>
              <td>Exact Mass</td>
              <td>{ this.state.exactMass }</td>
            </tr>
            <tr>
              <td>Formula</td>
              <td>{ this.state.formula }</td>
            </tr>
            <tr>
              <td>Inchi Key</td>
              <td>{ this.state.inchiKey }</td>
            </tr>  
            <tr>
              <td>Main Class</td>
              <td>{ this.state.mainClass }</td>
            </tr>
            <tr>
              <td>Sub Class</td>
              <td>{ this.state.subClass }</td>
            </tr>
            <tr>
              <td>Sys Name</td>
              <td>{ this.state.sysName }</td>
            </tr>
            <tr>
              <td>PubChem CID</td>
              <td>{ this.state.pubchem_cid }</td>
            </tr>
            <tr>
              <td>Reg No</td>
              <td>{ this.state.regno }</td>
            </tr>                
          </tbody>
        </Table>     

      </div>
    );
  }
}

export default Results;
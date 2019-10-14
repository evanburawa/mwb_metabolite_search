import React, { Component} from "react";
import {Table} from 'react-bootstrap'

class Results extends Component{
  
  constructor(props){

    super(props)

  }


  render(){

    console.log(this.props);

    return(
      <div className="results-container">

      <img src={ this.props.img } />
      <Table striped bordered hover>
          <thead>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{ this.props.name }</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>{ this.props.description }</td>
            </tr>
            <tr>
              <td>Exact Mass</td>
              <td>{ this.props.exactMass }</td>
            </tr>
            <tr>
              <td>Formula</td>
              <td>{ this.props.formula }</td>
            </tr>
            <tr>
              <td>Inchi Key</td>
              <td>{ this.props.inchiKey }</td>
            </tr>  
            <tr>
              <td>Main Class</td>
              <td>{ this.props.mainClass }</td>
            </tr>
            <tr>
              <td>Sub Class</td>
              <td>{ this.props.subClass }</td>
            </tr>
            <tr>
              <td>Sys Name</td>
              <td>{ this.props.sysName }</td>
            </tr>
            <tr>
              <td>PubChem CID</td>
              <td>{ this.props.pubchem_cid }</td>
            </tr>
            <tr>
              <td>Reg No</td>
              <td>{ this.props.regno }</td>
            </tr>                
          </tbody>
        </Table>     

      </div>
    );
  }
}

export default Results;
import React, { Component} from "react";
import {Form, Button} from 'react-bootstrap'
import axios from 'axios'


class SearchForm extends Component{
  
  constructor(props){

    super(props)

    this.state = {
      metabolite: ''
    }

    this.searchMetabolites = this.searchMetabolites.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange({ target }) {
    
    console.log(target.id);

    this.setState({
      [target.id]: target.value
    });
  }

  searchMetabolites(){

    this.props.loadingCallback();

    // Search API and pass that shit back to the parent
    let data = {}
    let uri = `http://localhost:5000/api/metabolites?name=${this.state.metabolite}`
   axios.get(uri) 
    .then(res => {
        console.log(uri);
        console.log(res);

        //this.setState({ items: res.data });  
        this.props.apiDataCallback(res)
   });    

  }

  render(){
    return(
      <div className="search-form-container">
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Metabolite Name</Form.Label>
            <Form.Control type="text" id="metabolite" name="metabolite" placeholder="Ex. Tifluadom, ACACA, etc" onChange={ this.handleChange } 
/>
          </Form.Group>
          <Button variant="primary" onClick={ this.searchMetabolites }> Search</Button>
        </Form>        

      </div>
    );
  }
}

export default SearchForm;
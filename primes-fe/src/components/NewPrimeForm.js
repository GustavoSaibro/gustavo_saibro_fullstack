import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class NewPrimeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // id:0,
      "number": "" 
    };
}


  componentDidMount() {
    if (this.props.prime) {
      const { number } = this.props.prime;
      this.setState({ number});
    }
  }

  onChange = e => {
    this.setState({ number: e.target.value });
  };

  createPrime = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  // editPrime = e => {
  //   e.preventDefault();
  //   axios.put(API_URL + this.state.number, this.state).then(() => {
  //     this.props.resetState();
  //     this.props.toggle();
  //   });
  // };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={ this.createPrime}>
        <FormGroup>
          <Label for="number">number:</Label>
          <Input
            type="number" 
            number="number"
            onChange={this.onChange}
            // value={this.defaultIfEmpty(this.state.number)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewPrimeForm;
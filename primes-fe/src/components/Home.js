import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import PrimeList from "./PrimeList";
import NewPrimeModal from "./NewPrimeModal";
import ShowPrimeModal from "./ShowPrimeModal";

import axios from "axios";

import { API_URL } from "../constants";

class Home extends Component {
  state = {
    primes: []
  };



  componentDidMount() {
    this.resetState();
  }

  getPrimes = () => {
    axios.get(API_URL).then(res => this.setState({ primes: res.data }));
  };

  resetState = () => {
    this.getPrimes();
  };

  editPrime = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.id, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <PrimeList
              primes={this.state.primes}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
          <ShowPrimeModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
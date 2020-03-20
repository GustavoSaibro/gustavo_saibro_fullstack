import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import PrimeList from "./PrimeList";
import NewPrimeModal from "./NewPrimeModal";

import axios from "axios";

import { API_URL } from "../constants";

class Home extends Component {
  state = {
    students: []
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
            <NewPrimeModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
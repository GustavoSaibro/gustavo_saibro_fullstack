import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import DivisorList from "./DivisorList";

import axios from "axios";

import { API_URL } from "../constants";

class ShowDivisorModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      "number": "",
      modal: false
    };
  }

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  showDivisors = e => {
    axios.get(API_URL + this.state.number).then(() => {
      this.props.resetState();
      this.toggle();
    });
  };

  render() {
    const create = this.props.create;

    return (
      <Fragment>
        <Container style={{ marginTop: "20px" }}>
          <Row>
            <Col>
              <DivisorList
                divisors={this.state.divisors}
                resetState={this.resetState}
              />
            </Col>
          </Row>          
        </Container>
        
      </Fragment>
    );
  }
}

export default ShowDivisorModal;
import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

import ShowDivisorModal from "./ShowDivisorModal";

class ShowPrimeModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };


  render() {
    const create = this.props.create;

    var title = "inspect prime divisors";
    var button = (
        <Button
          color="secondary"
          className="float-right"
          onClick={this.toggle}
          // style={{ minWidth: "50px" }}
        >
          Show Divisors
        </Button>
      );    

    return (

      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
          <ShowDivisorModal/>
          <ModalBody>            
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default ShowPrimeModal;
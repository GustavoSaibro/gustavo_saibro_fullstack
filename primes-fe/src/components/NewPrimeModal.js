import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewPrimeForm from "./NewPrimeForm";

class NewPrimeModal extends Component {
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

    var title = "Showing Prime Number";
    var button = <Button onClick={this.toggle}>Show</Button>;

    if (create) {
      title = "Creating New Prime";

      button = (
        <Button
          color="primary"
          className="float-right"
          onClick={this.toggle}
          style={{ minWidth: "200px" }}
        >
          Create New
        </Button>
      );
    }

    return (

      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

          <ModalBody>
            <NewPrimeForm
              resetState={this.props.resetState}
              toggle={this.toggle}
              prime={this.props.prime}
            />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default NewPrimeModal;
import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

export default class NewModal extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("go");
    return (
      <div>
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container">
              Thanks For The Oppertunity
            </div>
            
          </Modal.Body>
          <Modal.Footer>
            <a href="http://localhost:3000/">Close</a>
            
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

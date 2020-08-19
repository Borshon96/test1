import React, { Component } from "react";
import NewModal from "./NewModal";
import { Button, ButtonToolbar } from "react-bootstrap";
import "./Card.css";

export class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { addModalShow: false };
  }
  render() {
    let addModalClose = () => this.setState({ addModalShow: false });
    return (
      <div
        className="card-container"
        onClick={() => this.setState({ addModalShow: true })}
        onClick={() => console.log("ok")}
      >
        
        <div className="marginSpacing" onClick={() => this.setState({ addModalShow: true })}>
          
          <NewModal show={this.state.addModalShow} onHide={addModalClose} />
          <p>{this.props.desc}</p>
          <img className="card-img" src={this.props.img} alt={this.props.alt} />
        </div>
      </div>
    );
  }
}

export default Card;

import React, { Component } from "react";
import "./App.css";
// import NewModal from "./NewModal";
import Card from "./Card";
import ch1 from "./images/ch1.png";
import ch2 from "./images/ch2.png";
import ch3 from "./images/ch3.png";
import ch4 from "./images/ch4.png";
import ch5 from "./images/ch5.png";
import ch6 from "./images/ch6.png";

export class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     addModalShow : false
  //   };
  // }
  
  render() {
    // let addModalClose =() => this.setState({addModalShow : false});
    return (
      <div className="App">
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              height: "100vh",
              width: "100vw",
              overflowY: "scroll",
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {/* <NewModal
                show={this.state.addModalShow}
                onHide={addModalClose}
              /> */}
              <Card
                //onClick={() => this.setState({addModalShow : true})}
                //onClick={() => console.log("ok")}
                img={ch1}
                alt="Interaction Designer"
                desc="Interaction Designer"
              >
              {/* <NewModal
                show={this.state.addModalShow}
                onHide={addModalClose}
              /> */}
              </Card>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <Card
                img={ch2}
                alt="Graphics Designer"
                desc="Graphics Designer"
              />
            </div>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <Card img={ch3} alt="Design Lead" desc="Design Lead" />
            </div>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <Card img={ch4} alt="UI Architect" desc="UI Architect" />
            </div>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <Card
                img={ch5}
                alt="FrontEnd Engineer"
                desc="FrontEnd Engineer"
              />
            </div>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <Card img={ch6} alt="Web Developer" desc="Web Developer" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

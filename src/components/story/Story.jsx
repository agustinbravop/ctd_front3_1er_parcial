import React from "react";
import StoryLog from "./StoryLog";
import StoryOption from "./StoryOption";
import "../../index.css";
import data from "../data.json";

export default class Story extends React.Component {

  state = {
    count: 1,
    prevSelection: "",
    currentId: "1"
  }

  handleSelect = e => {
    // Matches id from data.json's id
    if(this.state.count > 4) {
      alert("Fin.");
    } 
    else {
      const currentId = this.state.count + 1 + e.target.id.toLowerCase();

      this.setState({
        count: this.state.count + 1,
        prevSelection: e.target.id,
        currentId: currentId
      })
    }
  }

  render() {
    // Gets matching id object from data.json
    const d = data.find(el => el.id === this.state.currentId);

    return (
      <div className="layout">
        <h1 className="historia">{d.historia}</h1>
        
        <div className="opciones">
          <StoryOption id="A" desc={d.opciones.a} onSelect={this.handleSelect} />
          <StoryOption id="B" desc={d.opciones.b} onSelect={this.handleSelect} />
        </div>

        <div className="recordatorio">
          <StoryLog prevSelection={this.state.prevSelection} />
        </div>
      </div>
    )
  }
}
// sidepanel.js
import React from "react";

// Preferred styles
const onStyleLight = {
  boxShadow: "0 0 15px #fff, 0 0 25px #fff, 0 0 35px #fff",
};

const offStyleLight = {
  boxShadow: "none",
};

const offStyleButton = {
  background: "#555",
  boxShadow: "0 3px #555",
};

class SidePanel extends React.Component {
  render() {
    const { power, currentSound, togglePower, changeVolume, lightDance } = this.props;
    const style = power ? { background: "#d5d5d5" } : { background: "#212121" };
    const powerText = power ? "ON" : "OFF";

    return (
      <div className="side-panel-container">
        <h1>Drum Machine</h1>
        <div className="sidePanel">
          <input
            readOnly
            style={power ? { background: "#eee" } : { background: "#504e4e" }}
            id="display"
            value={currentSound}
          />
          <button id="power" onClick={togglePower} style={style}>
            {powerText}
          </button>
          <input id="volumeButton" onClick={changeVolume} type="range" min="1" max="100" />
          <div className="speaker">
            <div className="subSpeaker" style={lightDance ? onStyleLight : offStyleLight} />
          </div>
        </div>
        <p id="creator">Made By Amir Sefidgar</p>
      </div>
    );
  }
}

export default SidePanel;

// pad.js
import React from "react";

// Preferred styles
const onStyle = {
  background: "#f44336",
  boxShadow: "0 3px #f44336",
};

const offStyle = {
  background: "#212121",
  boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.3)",
};

const offStyleButton = {
  background: "#555",
  boxShadow: "0 3px #555",
};

class Pad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
    };
    this.onPlay = this.onPlay.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleClick);
  }

  handleClick(e) {
    if (e.keyCode === this.props.pad.keyCode) {
      this.onPlay();
    }
  }

  onPlay() {
    if (this.props.power) {
      const { pad, volume, updateDisplay, updateLight } = this.props;
      const sound = document.getElementById(pad.letter);
      sound.currentTime = 0;
      sound.volume = volume;
      sound.play();
      updateDisplay(pad.id);
      this.setState({ playing: true });
      setTimeout(() => {
        this.setState({ playing: false });
      }, 100);
      updateLight();
    }
  }

  render() {
    const { power, pad } = this.props;
    const { playing } = this.state;
    const style = !power ? { background: "#212121" } : playing ? onStyle : offStyle;

    return (
      <div style={style} className="buttonHolder">
        <div
          style={!power ? offStyleButton : playing ? onStyle : offStyle}
          className="drum-pad"
          onClick={this.onPlay}
          id={pad.id}
        >
          <audio id={pad.letter} src={pad.rel} className="clip" />
          {pad.letter}
        </div>
      </div>
    );
  }
}

export default Pad;

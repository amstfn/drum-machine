import React from 'react';
import SidePanel from './container/sidePanel';
import Pad from './container/pad';
import { Data } from "./container/sounds"
import './App.scss';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            power: true,
            currentSound: '',
            volume: 0.5,
            currentVolume: 50,
            lightDance: false
        }
        this.togglePower = this.togglePower.bind(this);
        this.changeVolume = this.changeVolume.bind(this);
        this.updateDisplay = this.updateDisplay.bind(this);
        this.updateLight = this.updateLight.bind(this)
    }

    updateLight() {
        this.setState({
            lightDance: true
        })
        setTimeout(() => {
            this.setState({ lightDance: false })
        }, 100)
    }

    togglePower() {
        const message = !this.state.power ? "Welcome" : "BYE"
        this.setState({
            power: !this.state.power,
            currentSound: message
        })
        setTimeout(() => {
            this.setState({ currentSound: '' })
        }, 1500)
    }

    changeVolume(e) {
        const volume = e.target.value / 100;
        this.setState({
            currentSound: "Volume: " + e.target.value,
            volume: volume,
            currentVolume: e.target.value
        })
    }

    updateDisplay(id) {
        this.setState({
            currentSound: id
        })
    }

    render() {
        const pads = Data.map(pad => {
            return (
                <Pad
                    pad={pad}
                    power={this.state.power}
                    volume={this.state.volume}
                    updateDisplay={this.updateDisplay}
                    updateLight={this.updateLight}
                    lightDance={this.state.lightDance}
                />
            )
        })
        return (
            <div id="drum-machine" className="drum-machine">
                <div className="keypad">
                    {pads}
                </div>

                <SidePanel
                    changeVolume={this.changeVolume}
                    togglePower={this.togglePower}
                    updateDisplay={this.updateDisplay}
                    power={this.state.power}
                    volume={this.state.volume}
                    currentVolume={this.state.currentVolume}
                    currentSound={this.state.currentSound}
                    lightDance={this.state.lightDance}
                />
                <p id="creatorMobilMode">By Amir Sefidgar</p>
            </div>
        )
    };
}

export default App;

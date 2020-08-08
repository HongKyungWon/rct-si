import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Event Handlng * 

class EventHandling extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn : true
        }
    }
    handleClick= () => {
        this.setState(state => ({
            isToggleOn: !this.state.isToggleOn
        }))
    }
    render() {
        return (
            <button onClick = {this.handleClick}>
                {this.state.isToggleOn? 'ON' : 'OFF'}
                </button>
        );
    }
}

ReactDOM.render(<EventHandling/>,
     document.getElementById('root'));
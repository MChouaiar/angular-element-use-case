import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            message:"Message from React"
        };

        this.handleChange = this.handleChange.bind(this);
        this.increaseCounter = this.increaseCounter.bind(this);
        this.decreaseCounter = this.decreaseCounter.bind(this);
    }

    componentDidMount() {
        this.refs.elem.addEventListener('count-change',(event)=> {
            this.setState({count: Number(event.detail)});
        })
    }

    handleChange(event) {
        this.setState({message: event.target.value});
    }

    increaseCounter() {
        this.setState({count: this.state.count + 1});
    }

    decreaseCounter() {

        this.setState({count: this.state.count - 1});
    }

  render() {
    return (
      <div className="App">
          <div className="react">
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
              </header>
              <div className="angular">
                  <app-root ref="elem" number={this.state.count} message={this.state.message} ></app-root>
              </div>

              <TextField
                  id="outlined-name"
                  label="Message"
                  value={this.state.message}
                  onChange={this.handleChange}
                  margin="normal"
                  variant="outlined"
              />
              <h3>{this.state.count}</h3>
              <h3>{this.state.message}</h3>

              <Button variant="contained" color="primary" style={{marginRight: 15}} onClick={this.increaseCounter}>Increase the counter</Button>
              <Button variant="contained" color="secondary" onClick={this.decreaseCounter}>Decrease the counter</Button>
          </div>

      </div>
    );
  }
}

export default App;

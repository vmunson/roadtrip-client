import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import {BrowserRouter as Router,
} from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sessionToken: ''
    }
    this.setSessionState = this.setSessionState.bind(this)
    this.logout = this.logout.bind(this)
  }
  setSessionState(token) {
    localStorage.setItem('token', token);
    this.setState({ sessionToken: token });
  }
  componentWillMount() {
    const token = localStorage.getItem('token')

    if (token && !this.state.sessionToken) {
      this.setState({ sessionToken: token });
    }
  }
  logout() {
    console.log('logout')
    this.setState({ sessionToken: '' });
    localStorage.removeItem('token');
  }

  render() {
    return (
      <div className='map'>
        <Router>
        <Navbar clickLogout={this.logout} token={this.state.sessionToken} setSessionToken={this.setSessionState}/>
        </Router>
      </div>
    );
  }
}


export default App;

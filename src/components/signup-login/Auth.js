import React from 'react'
import { Button } from 'reactstrap'
import Signup from './Signup'
import Login from './Login'
import '../../App.css'

export default class Auth extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            signup: false,
            login: false
        }
    }
    signup = () => {
        this.setState({ signup: false })
    }
    login = () => {
        this.setState({ login: false })
    }
    view = () => {
        if (this.state.signup === true && this.state.login === false) {
            return (
                <div>
                    <Signup setSessionToken={this.props.setSessionToken} signup={this.signup} />
                </div>
            )
        } else if (this.state.signup === false && this.state.login === true) {
            return (
                <div>
                    <Login setSessionToken={this.props.setSessionToken} login={this.login} />
                </div>
            )
        } else {
            return (
                <div>
                    <Button className="button" color="success" onClick={() => { this.setState({ signup: true }) }}>Signup</Button>
                    <Button className="button" color="success" onClick={() => { this.setState({ login: true }) }}>Login</Button>
                </div>
            )
        }

    }
    render() {
        return (
            <div className="welcome">
                <h1>Welcome</h1>
                {this.view()}
            </div>
        )

    }

}


import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Route, Link } from 'react-router-dom'
import Auth from './signup-login/Auth'
import Player from './Profile/PlayerInfo'

export default class Navbar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let name = this.props.token ? 'logout' : 'login'
        return (
            <div>
                <div>
                    <Nav>
                        <NavItem>
                            <NavLink onClick={() => this.props.clickLogout()}  ><span>{name} </span></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to={`/auth`}>Home</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to={`/player`}>Player</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Story</NavLink>
                        </NavItem>
                    </Nav>
                </div>
                <div className="navbar-route">
                    <Route exact path="/player" render={(props) => (<Player token={this.props.token} />)} />
                    <Route exact path="/auth" render={(props) => (<Auth setSessionToken={this.setSessionState}/> )}/>
                </div>
            </div>
        );
    }
}
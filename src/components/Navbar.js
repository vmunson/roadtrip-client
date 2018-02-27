import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Route, Link } from 'react-router-dom'
import Auth from './signup-login/Auth'
import Player from './Profile/PlayerInfo'
import Story from './Story/Story'
import '../App.css'

export default class Navbar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let name = this.props.token ? 'logout' : 'login'
        return (
            <div>
                <div>
                    <Nav className='navBar'>
                        <NavItem>
                            <NavLink className='login' onClick={() => this.props.clickLogout()}  ><span>{name} </span></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to={`/auth`}>Home</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to={`/player`}>Player</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to={`/story`}>Story</Link></NavLink>
                        </NavItem>
                    </Nav>
                </div>
                <div className="navbar-route">
                    <Route exact path="/player" render={(props) => (<Player token={this.props.token} />)} />
                    <Route exact path="/auth" render={(props) => (<Auth setSessionToken={this.props.setSessionToken}/> )}/>
                    <Route exact path="/story" render={(props) => (<Story token={this.props.token}/>)} />
                </div>
            </div>
        );
    }
}
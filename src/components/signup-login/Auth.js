import React from 'react'
import { Row, Col } from 'reactstrap'
import Signup from './Signup'
import Login from './Login'
import '../../App.css'

const Auth = (props) => {
    return (
        <div className="welcome">
            <h1>Welcome</h1>
            <div className='signin'>
                <Row>
                    <Col>
                        <Signup setSessionToken={props.setSessionToken} />
                    </Col>
                    <Col>
                        <Login setSessionToken={props.setSessionToken} />
                    </Col>
                </Row>
            </div>
        </div>
    )
}



export default Auth
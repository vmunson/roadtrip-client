import React from 'react'
import {Row, Col} from 'reactstrap'
import Signup from './Signup'
import Login from './Login'

const Auth = (props) => {
        return(
            <div>
                <Row>
                    <Col>
                        <Signup setSessionToken={props.setSessionToken} />
                    </Col>
                    <Col>
                        <Login setSessionToken={props.setSessionToken} />
                    </Col>
                    </Row>
            </div>
        )
    }     

    export default Auth
import React from 'react'
import { Button, Row, Col } from 'reactstrap'

export default class Story extends React.Component {
    constructor() {
        super()
        this.state = {
            yes: false,
            no: false,
            gasYes: false,
            gasNo: false,
            location: ''
        }
        this.yesClick = this.yesClick.bind(this)
        this.noClick = this.noClick.bind(this)
        this.yesGasClick = this.yesGasClick.bind(this)
        this.noGasClick = this.noGasClick.bind(this)
    }

    yesClick() {
        this.setState({ yes: true, no: false })
    }
    noClick() {
        this.setState({ yes: false, no: true })
    }
    yesGasClick() {
        this.setState({ gasYes: true, gasNo: false })
    }
    noGasClick() {
        this.setState({ gasYes: false, gasNo: true })
    }

    render() {
        return (
            <div>
                <Welcome yes={this.state.yes} no={this.state.no} yesClick={this.yesClick} noClick={this.noClick} yesGas={this.state.gasYes} noGas={this.state.gasNo} yesGasClick={this.yesGasClick} noGasClick={this.noGasClick} />
            </div>
        )
    }
}


const Welcome = (props) => {
    console.log(props)
    if (props.yes) {
        return (
            <div>
                <Gas yesGas={props.yesGas} noGas={props.noGas} yesGasClick={props.yesGasClick} noGasClick={props.noGasClick}/>
            </div>
        )
    }
    else if (props.no) {
        console.log(props)
        return <Really />
    } else {
        return (
            <div>
                <h3>Are you ready to hit the road?</h3>
                <Row>
                    <Col>
                        <Button onClick={props.yesClick}>Yes</Button>
                    </Col>
                    <Col>
                        <Button onClick={props.noClick}>No</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}
const Gas = (props) => {
    console.log(props)
    if (props.yesGas) {
        return <Good />
    } else if (props.noGas) {
        return <Bad />
    } else {
        return (
            <div>
                <h3>Do you want to stop for gas?</h3>
                <Row>
                    <Col>
                        <Button onClick={props.yesGasClick}>Yes</Button>
                    </Col>
                    <Col>
                        <Button onClick={props.noGasClick}>No</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}
const Really = () => {
    return <h3>Are you sure?</h3>
}
const Good = () => {
    return <h3>You are set for the next 250 miles</h3>
}
const Bad = () => {
    return <h3>You ran out of gas and ruined your engine. Try again next year!</h3>
}
const TryAgain = () => {
    return <h3>Ok. See ya later!</h3>
}
import React from 'react'
import { Button, Row, Col } from 'reactstrap'
import '../../App.css'

export default class Story extends React.Component {
    constructor() {
        super()
        this.state = {
            yes: false,
            no: false,
            gasYes: false,
            gasNo: false,
            broomYes: false,
            broomNo: false,
            crHotelYes: false,
            crHotelNo: false,
            crStayYes: false,
            crStayNo: false,
            iRockYes: false,
            iRockNo: false,
            hHickerYes: false,
            hHickerNo: false,
            stormYes: false,
            stormNo: false,
            fairYes: false,
            fairNo: false,
            location: 'Home'
        }
        this.yesClick = this.yesClick.bind(this)
        this.noClick = this.noClick.bind(this)
        this.yesGasClick = this.yesGasClick.bind(this)
        this.noGasClick = this.noGasClick.bind(this)
        this.yesBroomClick = this.yesBroomClick.bind(this)
        this.noBroomClick = this.noBroomClick.bind(this)
        this.yesCRHotelClick = this.yesCRHotelClick.bind(this)
        this.noCRHotelClick = this.noCRHotelClick.bind(this)
        this.yesCRStayClick = this.yesCRStayClick.bind(this)
        this.noCRStayClick = this.noCRStayClick.bind(this)
        this.yesIRockClick = this.yesIRockClick.bind(this)
        this.noIRockClick = this.noIRockClick.bind(this)
        this.yesHHickerClick = this.yesHHickerClick.bind(this)
        this.noHHickerClick = this.noHHickerClick.bind(this)
        this.yesStormClick = this.yesStormClick.bind(this)
        this.noStormClick = this.noStormClick.bind(this)
        this.yesFairClick = this.yesFairClick.bind(this)
        this.noFairClick = this.noFairClick.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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
    yesBroomClick() {
        this.setState({ broomYes: true, broomNo: false, location: 'Independence' })
    }
    noBroomClick() {
        this.setState({ broomYes: false, broomNo: true })
    }
    yesCRHotelClick() {
        this.setState({ crHotelYes: true, crHotelNo: false })
    }
    noCRHotelClick() {
        this.setState({ crHotelYes: false, crHotelNo: true, location: 'Chimney Rock' })
    }
    yesCRStayClick() {
        this.setState({ crStayYes: true, crStayNo: false, location: 'Chimney Rock to Fort Laramie' })
    }
    noCRStayClick() {
        this.setState({ crStayYes: false, crStayNo: true, location: 'Chimney Rock to Fort Laramie' })
    }
    yesIRockClick() {
        this.setState({ iRockYes: true, iRockNo: false, location: 'Independence Rock' })
    }
    noIRockClick() {
        this.setState({ iRockYes: false, iRockNo: true, location: 'Independence Rock' })
    }
    yesHHickerClick() {
        this.setState({ hHickerYes: true, hHickerNo: false, location: 'Fort Bridger to Fort Hall' })
    }
    noHHickerClick() {
        this.setState({ hHickerYes: false, hHickerNo: true })
    }
    yesStormClick() {
        this.setState({ stormYes: true, stormNo: false, location: 'Fort Boise' })
    }
    noStormClick() {
        this.setState({ stormYes: false, stormNo: true, location: 'Fort Boise' })
    }
    yesFairClick() {
        this.setState({ fairYes: true, fairNo: false })
    }
    noFairClick() {
        this.setState({ fairYes: false, fairNo: true, location: 'Whitman Mission to The Dalles to Oregon City' })
    }
    handleSubmit(e) {
        e.preventDefault()
        // localhost:3000
        // oregon-roadtrip.herokuapp.com
        fetch("https://oregon-roadtrip.herokuapp.com/api/story", {
            method: 'POST',
            body: JSON.stringify({ story: this.state.location }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
    }
    fetchCar = () => {
        fetch("https://oregon-roadtrip.herokuapp.com/api/player", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
    }
    render() {
        return (
            <div className='story'>
                <Button color='success' className="float-right" size="sm" onClick={this.handleSubmit}>Save</Button>
                <h5>Location: {this.state.location}</h5>
                <Welcome yes={this.state.yes} no={this.state.no}
                    yesClick={this.yesClick} noClick={this.noClick}
                    yesGas={this.state.gasYes} noGas={this.state.gasNo}
                    yesGasClick={this.yesGasClick} noGasClick={this.noGasClick}
                    yesBroom={this.state.broomYes} noBroom={this.state.broomNo}
                    yesBroomClick={this.yesBroomClick} noBroomClick={this.noBroomClick}
                    yesCRHotel={this.state.crHotelYes} noCRHotel={this.state.crHotelNo}
                    yesCRHotelClick={this.yesCRHotelClick} noCRHotelClick={this.noCRHotelClick}
                    yesCRStay={this.state.crStayYes} noCRStay={this.state.crStayNo}
                    yesCRStayClick={this.yesCRStayClick} noCRStayClick={this.noCRStayClick}
                    yesIRock={this.state.iRockYes} noIRock={this.state.iRockNo}
                    yesIRockClick={this.yesIRockClick} noIRockClick={this.noIRockClick}
                    yesHHicker={this.state.hHickerYes} noHHicker={this.state.hHickerNo}
                    yesHHickerClick={this.yesHHickerClick} noHHickerClick={this.noHHickerClick}
                    yesStorm={this.state.stormYes} noStorm={this.state.stormNo}
                    yesStormClick={this.yesStormClick} noStormClick={this.noStormClick}
                    yesFair={this.state.fairYes} noFair={this.state.fairNo}
                    yesFairClick={this.yesFairClick} noFairClick={this.noFairClick}
                />
            </div>
        )
    }
}


const Welcome = (props) => {
    if (props.yes) {
        return (
            <div>
                <Gas yesGas={props.yesGas} noGas={props.noGas}
                    yesGasClick={props.yesGasClick} noGasClick={props.noGasClick}
                    yesBroom={props.yesBroom} noBroom={props.noBroom}
                    yesBroomClick={props.yesBroomClick} noBroomClick={props.noBroomClick}
                    yesCRHotel={props.yesCRHotel} noCRHotel={props.noCRHotel}
                    yesCRHotelClick={props.yesCRHotelClick} noCRHotelClick={props.noCRHotelClick}
                    yesCRStay={props.yesCRStay} noCRStay={props.noCRStay}
                    yesCRStayClick={props.yesCRStayClick} noCRStayClick={props.noCRStayClick}
                    yesIRock={props.yesIRock} noIRock={props.noIRock}
                    yesIRockClick={props.yesIRockClick} noIRockClick={props.noIRockClick}
                    yesHHicker={props.yesHHicker} noHHicker={props.noHHicker}
                    yesHHickerClick={props.yesHHickerClick} noHHickerClick={props.noHHickerClick}
                    yesStorm={props.yesStorm} noStorm={props.noStorm}
                    yesStormClick={props.yesStormClick} noStormClick={props.noStormClick}
                    yesFair={props.yesFair} noFair={props.noFair}
                    yesFairClick={props.yesFairClick} noFairClick={props.noFairClick}
                />
            </div>
        )
    }
    else if (props.no) {
        return <h3>Ok. See ya later!</h3>
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
        return <Good yesBroom={props.yesBroom} noBroom={props.noBroom}
            yesBroomClick={props.yesBroomClick} noBroomClick={props.noBroomClick}
            yesCRHotel={props.yesCRHotel} noCRHotel={props.noCRHotel}
            yesCRHotelClick={props.yesCRHotelClick} noCRHotelClick={props.noCRHotelClick}
            yesCRStay={props.yesCRStay} noCRStay={props.noCRStay}
            yesCRStayClick={props.yesCRStayClick} noCRStayClick={props.noCRStayClick}
            yesIRock={props.yesIRock} noIRock={props.noIRock}
            yesIRockClick={props.yesIRockClick} noIRockClick={props.noIRockClick}
            yesHHicker={props.yesHHicker} noHHicker={props.noHHicker}
            yesHHickerClick={props.yesHHickerClick} noHHickerClick={props.noHHickerClick}
            yesStorm={props.yesStorm} noStorm={props.noStorm}
            yesStormClick={props.yesStormClick} noStormClick={props.noStormClick}
            yesFair={props.yesFair} noFair={props.noFair}
            yesFairClick={props.yesFairClick} noFairClick={props.noFairClick}
        />
    } else if (props.noGas) {
        return <h3>You ran out of gas and ruined your engine. Try again next year!</h3>
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

const Good = (props) => {
    console.log(props)
    if (props.yesBroom) {
        return <Refill yesCRHotel={props.yesCRHotel} noCRHotel={props.noCRHotel}
            yesCRHotelClick={props.yesCRHotelClick} noCRHotelClick={props.noCRHotelClick}
            yesCRStay={props.yesCRStay} noCRStay={props.noCRStay}
            yesCRStayClick={props.yesCRStayClick} noCRStayClick={props.noCRStayClick}
            yesIRock={props.yesIRock} noIRock={props.noIRock}
            yesIRockClick={props.yesIRockClick} noIRockClick={props.noIRockClick}
            yesHHicker={props.yesHHicker} noHHicker={props.noHHicker}
            yesHHickerClick={props.yesHHickerClick} noHHickerClick={props.noHHickerClick}
            yesStorm={props.yesStorm} noStorm={props.noStorm}
            yesStormClick={props.yesStormClick} noStormClick={props.noStormClick}
            yesFair={props.yesFair} noFair={props.noFair}
            yesFairClick={props.yesFairClick} noFairClick={props.noFairClick}
        />
    } else if (props.noBroom) {
        return <Cleanup yesCRHotel={props.yesCRHotel} noCRHotel={props.noCRHotel}
            yesCRHotelClick={props.yesCRHotelClick} noCRHotelClick={props.noCRHotelClick}
            yesCRStay={props.yesCRStay} noCRStay={props.noCRStay}
            yesCRStayClick={props.yesCRStayClick} noCRStayClick={props.noCRStayClick}
            yesIRock={props.yesIRock} noIRock={props.noIRock}
            yesIRockClick={props.yesIRockClick} noIRockClick={props.noIRockClick}
            yesHHicker={props.yesHHicker} noHHicker={props.noHHicker}
            yesHHickerClick={props.yesHHickerClick} noHHickerClick={props.noHHickerClick}
            yesStorm={props.yesStorm} noStorm={props.noStorm}
            yesStormClick={props.yesStormClick} noStormClick={props.noStormClick}
            yesFair={props.yesFair} noFair={props.noFair}
            yesFairClick={props.yesFairClick} noFairClick={props.noFairClick}
        />
    } else {
        return (
            <div>
                <h3>You are set for the next 250 miles</h3>
                <br />
                <br />
                <h3>The kids need to use the bathroon and you have half a tank of gas.<br />Do you stop?</h3>
                <Row>
                    <Col>
                        <Button onClick={props.yesBroomClick}>Yes</Button>
                    </Col>
                    <Col>
                        <Button onClick={props.noBroomClick}>No</Button>
                    </Col>
                </Row>
            </div>
        )
    }

}

const Refill = (props) => {
    if (props.yesCRHotel) {
        return <CRStay yesCRStay={props.yesCRStay} noCRStay={props.noCRStay}
            yesCRStayClick={props.yesCRStayClick} noCRStayClick={props.noCRStayClick}
            yesIRock={props.yesIRock} noIRock={props.noIRock}
            yesIRockClick={props.yesIRockClick} noIRockClick={props.noIRockClick}
            yesHHicker={props.yesHHicker} noHHicker={props.noHHicker}
            yesHHickerClick={props.yesHHickerClick} noHHickerClick={props.noHHickerClick}
            yesStorm={props.yesStorm} noStorm={props.noStorm}
            yesStormClick={props.yesStormClick} noStormClick={props.noStormClick}
            yesFair={props.yesFair} noFair={props.noFair}
            yesFairClick={props.yesFairClick} noFairClick={props.noFairClick}
        />
    } else if (props.noCRHotel) {
        return <h3>You made it to Chimney Rock, but all of the near by hotels were booked. While driving to look for a hotel you fall asleep at the wheel and crash.<br /> <b>Game over.</b></h3>
    } else {
        return (
            <div>
                <h3>You refill the tank and the kids are happy.</h3>
                <br />
                <br />
                <h3>You are almost to Chimney Rock. Do you want to look for a hotel and have dinner now?</h3>
                <Row>
                    <Col>
                        <Button onClick={props.yesCRHotelClick}>Yes</Button>
                    </Col>
                    <Col>
                        <Button onClick={props.noCRHotelClick}>No</Button>
                    </Col>
                </Row>

            </div>
        )
    }
}

const Cleanup = (props) => {
    if (props.yesCRHotel) {
        return <CRStay yesCRStay={props.yesCRStay} noCRStay={props.noCRStay}
            yesCRStayClick={props.yesCRStayClick} noCRStayClick={props.noCRStayClick}
            yesIRock={props.yesIRock} noIRock={props.noIRock}
            yesIRockClick={props.yesIRockClick} noIRockClick={props.noIRockClick}
            yesHHicker={props.yesHHicker} noHHicker={props.noHHicker}
            yesHHickerClick={props.yesHHickerClick} noHHickerClick={props.noHHickerClick}
            yesStorm={props.yesStorm} noStorm={props.noStorm}
            yesStormClick={props.yesStormClick} noStormClick={props.noStormClick}
            yesFair={props.yesFair} noFair={props.noFair}
            yesFairClick={props.yesFairClick} noFairClick={props.noFairClick}
        />
    } else if (props.noCRHotel) {
        return <h3>You made it to Chimney Rock, but all of the near by hotels were booked. While driving to look for a hotel you fall asleep at the wheel and crash.<br /> <b>Game over.</b></h3>
    } else {
        return (
            <div>
                <h3>Timmy couldn't hold it. You had to stop, clean the car, and get Timmy new pants.</h3>
                <br />
                <br />
                <h3>You are almost to Chimney Rock. Do you want to look for a hotel and have dinner now?</h3>
                <Row>
                    <Col>
                        <Button onClick={props.yesCRHotelClick}>Yes</Button>
                    </Col>
                    <Col>
                        <Button onClick={props.noCRHotelClick}>No</Button>
                    </Col>
                </Row>

            </div>
        )
    }
}

const CRStay = (props) => {
    if (props.yesCRStay) {
        return <IRock yesIRock={props.yesIRock} noIRock={props.noIRock}
            yesIRockClick={props.yesIRockClick} noIRockClick={props.noIRockClick}
            yesHHicker={props.yesHHicker} noHHicker={props.noHHicker}
            yesHHickerClick={props.yesHHickerClick} noHHickerClick={props.noHHickerClick}
            yesStorm={props.yesStorm} noStorm={props.noStorm}
            yesStormClick={props.yesStormClick} noStormClick={props.noStormClick}
            yesFair={props.yesFair} noFair={props.noFair}
            yesFairClick={props.yesFairClick} noFairClick={props.noFairClick}
        />
    } else if (props.noCRStay) {
        return (
            <div>
                <h3>You had a great morning exploring Chimney Rock! For lunch you stopped at Fort Laramie.</h3>
                <br />
                <br />
                <h3>You didn't quite make it to Independence Rock. Since you were in the middle of nowhere you had to stay at a run down motel. When you woke up in the morning you couldn't find your car. It was stolen. <br /><b>Game over.</b></h3>
            </div>
        )
    }
    else {
        return (
            <div>
                <h3>You found a great hotel and had a wonderful dinner. Tomorrow you'll wake up early in the morning and head to Chimney Rock.</h3>
                <br />
                <br />
                <h3>You made it to Chimney Rock! Do you want to spend the day here?</h3>
                <Row>
                    <Col>
                        <Button onClick={props.yesCRStayClick}>Yes</Button>
                    </Col>
                    <Col>
                        <Button onClick={props.noCRStayClick}>No</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

const IRock = (props) => {
    if (props.yesIRock) {
        return <Keys yesHHicker={props.yesHHicker} noHHicker={props.noHHicker}
            yesHHickerClick={props.yesHHickerClick} noHHickerClick={props.noHHickerClick}
            yesStorm={props.yesStorm} noStorm={props.noStorm}
            yesStormClick={props.yesStormClick} noStormClick={props.noStormClick}
            yesFair={props.yesFair} noFair={props.noFair}
            yesFairClick={props.yesFairClick} noFairClick={props.noFairClick}
        />
    } else if (props.noIRock) {
        return <FBLunch yesHHicker={props.yesHHicker} noHHicker={props.noHHicker}
            yesHHickerClick={props.yesHHickerClick} noHHickerClick={props.noHHickerClick}
            yesStorm={props.yesStorm} noStorm={props.noStorm}
            yesStormClick={props.yesStormClick} noStormClick={props.noStormClick}
            yesFair={props.yesFair} noFair={props.noFair}
            yesFairClick={props.yesFairClick} noFairClick={props.noFairClick}
        />
    } else {
        return (
            <div>
                <h3>It started to downpour. Your car got stuck in the mud and you had to wait for a tow. You don't make it to Fort Laramie till late at night.</h3>
                <br />
                <br />
                <h3>You spent the night in Fort Laramie and make your way to Independence Rock.</h3>
                <br />
                <br />
                <h3>You made it to Independence Rock! Do you want to take a look around?.</h3>
                <Row>
                    <Col>
                        <Button onClick={props.yesIRockClick}>Yes</Button>
                    </Col>
                    <Col>
                        <Button onClick={props.noIRockClick}>No</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

const Keys = (props) => {
    if (props.yesHHicker) {
        return <Storm yesStorm={props.yesStorm} noStorm={props.noStorm}
            yesStormClick={props.yesStormClick} noStormClick={props.noStormClick}
            yesFair={props.yesFair} noFair={props.noFair}
            yesFairClick={props.yesFairClick} noFairClick={props.noFairClick}
        />
    } else if (props.noHHicker) {
        return <h3>On the way to Fort Bridger you lost cell service and got lost. While trying to find you way you ran out of gas.<br /><b>Game over.</b></h3>
    } else {
        return (
            <div>
                <h3>You have a nice look around and get some great Instagrams. When you get back to the car and you can't find the keys, so you have to go back and look for them. Turns out Sally had them the whole time. You spend the night in a hotel and head for Fort Bridger in the morning.</h3>
                <br />
                <br />
                <h3>You see a hitchhicker on the side of the road. Do you pick him up?</h3>
                <Row>
                    <Col>
                        <Button onClick={props.yesHHickerClick}>Yes</Button>
                    </Col>
                    <Col>
                        <Button onClick={props.noHHickerClick}>No</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}
const FBLunch = (props) => {
    if (props.yesHHicker) {
        return <Storm yesStorm={props.yesStorm} noStorm={props.noStorm}
            yesStormClick={props.yesStormClick} noStormClick={props.noStormClick}
            yesFair={props.yesFair} noFair={props.noFair}
            yesFairClick={props.yesFairClick} noFairClick={props.noFairClick}
        />
    } else if (props.noHHicker) {
        return <h3>On the way to Fort Bridger you lost cell service and got lost. While trying to find you way you ran out of gas.<br /><b>Game over.</b></h3>
    } else {
        return (
            <div>
                <h3>You have lunch and continue on to Fort Bridger</h3>
                <br />
                <br />
                <h3>You see a hitchhicker on the side of the road. Do you pick him up?</h3>
                <Row>
                    <Col>
                        <Button onClick={props.yesHHickerClick}>Yes</Button>
                    </Col>
                    <Col>
                        <Button onClick={props.noHHickerClick}>No</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

const Storm = (props) => {
    if (props.yesStorm) {
        return <KeepGoing yesFair={props.yesFair} noFair={props.noFair}
            yesFairClick={props.yesFairClick} noFairClick={props.noFairClick} />
    } else if (props.noStorm) {
        return <PullOver yesFair={props.yesFair} noFair={props.noFair}
            yesFairClick={props.yesFairClick} noFairClick={props.noFairClick} />
    } else {
        return (
            <div>
                <h3>On the way to Fort Bridger you lost cell service and got lost. Luckily, the hitchhicker knew how to get there.</h3>
                <br />
                <br />
                <h3>Smooth sailing all the way to Fort Hall</h3>
                <br />
                <br />
                <h3>You get caught in an unexpected thunderstorm. Do you keep going?</h3>
                <Row>
                    <Col>
                        <Button onClick={props.yesStormClick}>Yes</Button>
                    </Col>
                    <Col>
                        <Button onClick={props.noStormClick}>No</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

const KeepGoing = (props) => {
    if (props.yesFair) {
        return <h3>You go to the fair. The kids go on a roller coaster that is old and rusty. Timmy falls out and breaks his legs</h3>
    } else if (props.noFair) {
        return (
            <div>
                <h3>The kids are really angry and you wish you could leave them on the side of the road, but you keep driving and they get over it. You make it to Whitman Mission.</h3>
                <br />
                <br />
                <h3>You made it to Dalles and have the best day</h3>
                <br />
                <br />
                <h3>Congratulations! You made it to Oregon City!</h3>
            </div>
        )
    }
    else {
        return (
            <div>
                <h3>You keep going. You almost hydroplane but make it to Fort Boise</h3>
                <br />
                <br />
                <h3>Timmy and Sally see a sign for a county fair on the side of the road and REALLY want to stop. Do you?</h3>
                <Row>
                    <Col>
                        <Button onClick={props.yesFairClick}>Yes</Button>
                    </Col>
                    <Col>
                        <Button onClick={props.noFairClick}>No</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

const PullOver = (props) => {
    if (props.yesFair) {
        return <h3>You go to the fair. The kids go on a roller coaster that is old and rusty. Timmy falls out and breaks his legs</h3>
    } else if (props.noFair) {
        return (
            <div>
                <h3>The kids are really angry and you wish you could leave them on the side of the road, but you keep driving and they get over it. You make it to Whitman Mission.</h3>
                <br />
                <br />
                <h3>You made it to Dalles and have the best day</h3>
                <br />
                <br />
                <h3>Congratulations! You made it to Oregon City!</h3>
            </div>
        )
    }
    else {
        return (
            <div>
                <h3>You keep going. You almost hydroplane but make it to Fort Boise</h3>
                <br />
                <br />
                <h3>Timmy and Sally see a sign for a county fair on the side of the road and REALLY want to stop. Do you?</h3>
                <Row>
                    <Col>
                        <Button onClick={props.yesFairClick}>Yes</Button>
                    </Col>
                    <Col>
                        <Button onClick={props.noFairClick}>No</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}
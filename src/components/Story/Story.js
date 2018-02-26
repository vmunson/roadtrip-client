import React from 'react'
import { Button, Row, Col } from 'reactstrap'

class Story extends React.Component {
    constructor() {
        super()
        this.state = {
            yes: false,
            no: false,
        }
        this.yesClick = this.yesClick.bind(this)
        this.noClick = this.noClick.bind(this)
        this.story = this.story.bind(this)
    }

    yesClick() {
        this.setState({yes: true, no: false})
    }
    noClick() {
        this.setState({yes: false, no: true})
    }

    story() {
        // if(!this.state.yes && !this.state.no){
        //     return <Welcome />
        // }else if(this.state.yes && !this.state.no){
        //     return (<Gas />)
        //     if(this.state.yes && !this.state.no){
        //         return <Good />
        //     }else{
        //         return <Bad />
        //     }
        
        // }
        // else{
        //     return <Really />
        // }
        
        switch(this.state) {
            case (this.state.yes):
                return <Gas />
                this.setState({yes: false, no: false})
                switch(this.state){
                    case(this.state.yes):
                        return <Good />
                        break
                    case(this.state.no):
                        return <Bad />
                        break
                }
            case(this.state.no):
                return <Really />
                this.setState({yes:false, no: false})
                switch(this.state){
                    case(this.state.yes):
                    return <Welcome />
                    break
                    case(this.state.no):
                    return <TryAgain />
                    break
                }
            default:
            <Welcome/>
            
        }
    }

    render() {
        return (
            <div>
                {this.story()}
                <Row>
                    <Col>
                        <Button onClick={this.yesClick}>Yes</Button>
                    </Col>
                    <Col>
                        <Button onClick={this.noClick}>No</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

const Welcome = () => {
    return <h3>Are you ready to hit the road?</h3>
}
const Gas = () => {
    return <h3>Do you want to stop for gas?</h3>
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

export default Story
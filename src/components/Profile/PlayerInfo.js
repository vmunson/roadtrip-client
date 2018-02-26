import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import '../../App.css'

class PlayerInfo extends React.Component {
    constructor(props) {
        super()
        this.state = {
            player: '',
            occupation: '',
            carType: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
        console.log(this.state)
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:3000/api/player", {
            method: 'POST',
            body: JSON.stringify({ player: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        }).then(res=>res.json())
        .then(() => {
            document.getElementById("playerinfo").reset()
        })
    }
    render() {
        return (
            <div className='player'>
                <h1>Enter Player Information</h1>
                <Form id="playerinfo" onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label>Player Name</Label>
                        <Input className="form-control" type="text" name="player" placeholder="Your name" onChange={this.handleChange} />
                        <Label>Occupation</Label>
                        <Input className="form-control" type="select" name="occupation" onChange={this.handleChange}>
                            <option></option>
                            <option>Lawyer</option>
                            <option>Teacher</option>
                            <option>Mechanic</option>
                            <option>Coder</option>
                        </Input>
                        <Label>Car</Label>
                        <Input className="form-control" type="select" name="carType" onChange={this.handleChange}>
                            <option></option>
                            <option>Suburban</option>
                            <option>Grand Caravan</option>
                            <option>Volvo</option>
                            <option>Mazda</option>
                        </Input>
                        <Button id='playerButton'type="submit" color="success">Save</Button>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default PlayerInfo 

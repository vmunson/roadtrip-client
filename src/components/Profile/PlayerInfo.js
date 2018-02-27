import React from 'react'
import { Button, Form, FormGroup, Label, Input, Table } from 'reactstrap'
import '../../App.css'

class PlayerInfo extends React.Component {
    constructor(props) {
        super()
        this.state = {
            player: '',
            occupation: '',
            carType: '',
            editInfo: false,
            playerInfo:[]
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.fetchPlayerInfo = this.fetchPlayerInfo.bind(this);
        this.updatePIArray = this.updatePIArray.bind(this);
        this.playerInfoDelete = this.playerInfoDelete.bind(this);
    }
    componentWillMount(){
        this.fetchPlayerInfo()
    }
    fetchPlayerInfo(){
        fetch("http://localhost:3000/api/player", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
              })
        })
        .then((res) => res.json())
        .then((playerData) => {
            return this.setState({playerInfo: playerData})
        })
    }

    updatePIArray(){
        this.fetchPlayerInfo()
    }

    playerInfoDelete(event){
        fetch("http://localhost:3000/api/player", {
            method: 'DELETE',
            body: JSON.stringify({player: {id:event.target.id}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
              })
        })
        .then((res) => this.updatePIArray())
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
        })
            .then(() => {
                document.getElementById("playerinfo").reset()
            })
    }
    render() {
        return (
            <div>
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
                        <Button id='playerButton' type="submit" color="success">Save</Button>
                    </FormGroup>
                </Form>
                </div>
                <div>
            <h3>Player Information</h3>
            <hr />
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Occupation</th>
                        <th>Car Type</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.playerInfo.map((playerInfo, id) => {
                            return (
                                <tr key={id}>
                                    <th scope="row">{playerInfo.id}</th>
                                    <td>{playerInfo.player}</td>
                                    <td>{playerInfo.occupation}</td>
                                    <td>{playerInfo.carType}</td>
                                    <td><Button id={playerInfo.id} onClick={this.playerInfoDelete} color="danger">Delete</Button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
                </div>
                
        )
    }
}

export default PlayerInfo 

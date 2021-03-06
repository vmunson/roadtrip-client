import React from 'react'
import { Button, Form, FormGroup, Label, Input, Table, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import '../../App.css'

class PlayerInfo extends React.Component {
    constructor(props) {
        super()
        this.state = {
            player: '',
            occupation: '',
            carType: '',
            id: 0,
            playerInfo: [],
            modal: false,
        }
        this.toggle = this.toggle.bind(this)
        this.closetoggle = this.closetoggle.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.fetchPlayerInfo = this.fetchPlayerInfo.bind(this);
        this.updatePIArray = this.updatePIArray.bind(this);
        this.playerInfoDelete = this.playerInfoDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this)
    }
    toggle(e, id) {
        console.log(id)
        this.setState({
            modal: !this.state.modal,
            id: id
        });
    }
    closetoggle() {
        this.setState({
            modal: !this.state.modal,
        });
    }
    componentDidMount() {
        this.fetchPlayerInfo()
    }
    fetchPlayerInfo() {
        // localhost:3000
        // oregon-roadtrip.herokuapp.com
        fetch("https://oregon-roadtrip.herokuapp.com/api/player", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            .then((playerData) => {
                return this.setState({ playerInfo: playerData })
            })
    }

    updatePIArray() {
        this.fetchPlayerInfo()
    }

    playerInfoDelete(event) {
        // localhost:3000
        // oregon-roadtrip.herokuapp.com
        fetch("https://oregon-roadtrip.herokuapp.com/api/player", {
            method: 'DELETE',
            body: JSON.stringify({ player: { id: event.target.id } }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        }).then((res) => this.updatePIArray())
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit(e) {
        e.preventDefault()
        // localhost:300
        // oregon-roadtrip.herokuapp.com
        fetch("https://oregon-roadtrip.herokuapp.com/api/player", {
            method: 'POST',
            body: JSON.stringify({ player: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        }).then((res) => this.updatePIArray())
    }
    handleUpdate(e) {
        e.preventDefault()
        // localhost:3000
        // oregon-roadtrip.herokuapp.com
        fetch("https://oregon-roadtrip.herokuapp.com/api/player", {
            method: 'PUT',
            body: JSON.stringify({ player: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        }).then((res) => this.updatePIArray())
    }
    addInfoView = () => {
        if (this.state.playerInfo.length === 0) {
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
                            <Button id='playerButton' type="submit" color="success">Save</Button>
                        </FormGroup>
                    </Form>
                </div>
            )
        }
    }
    render() {
        return (
            <div>
                {this.addInfoView()}
                <div className='playerUpdate'>
                    <h1>Player Information</h1>
                    <hr />
                    <Table>
                        <thead>
                            <tr>
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

                                            <td >{playerInfo.player}</td>
                                            <td>{playerInfo.occupation}</td>
                                            <td>{playerInfo.carType}</td>
                                            <td>
                                                <Button className="buttonTable" id={playerInfo.id} size="sm" onClick={e => this.toggle(e, playerInfo.id)} color="primary">Update</Button>
                                                <Button className="buttonTable" id={playerInfo.id} size="sm" onClick={this.playerInfoDelete} color="danger">Delete</Button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                    <Modal isOpen={this.state.modal} className={this.props.className}>
                        <ModalHeader>Update Player Information</ModalHeader>
                        <Form onSubmit={this.handleUpdate}>
                            <ModalBody>
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
                                </FormGroup>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="success" type="submit" onClick={this.closetoggle}>Save</Button>
                                <Button onClick={this.closetoggle}>Cancel</Button>
                            </ModalFooter>
                        </Form>
                    </Modal>
                </div>
            </div>

        )
    }
}

export default PlayerInfo 

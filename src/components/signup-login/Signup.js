import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Row, Col } from 'reactstrap';
import '../../App.css'

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      modal: false
    };
    console.log(this.props)
    this.toggle = this.toggle.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  toggle() {
    if (this.state.password >= 5 && this.state.email == value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      this.setState({
        modal: !this.state.modal
      });
    }
  }

  handleChange(e) {
    console.log(this.state)
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault()
    // localhost:3000
    // oregon-roadtrip.herokuapp.com
    fetch("https://oregon-roadtrip.herokuapp.com/api/user", {
      method: 'POST',
      body: JSON.stringify({ user: this.state }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })

    }).then(
      (response) => response.json()
    ).then((data) => {
      this.props.setSessionToken(data.sessionToken)

    })
  }

  render() {
    return (
      <div>
        <Row>
          <Col>
            <Button className="signupButton" onClick={this.toggle}>Sign Up</Button>
          </Col>
          <Col>
          </Col>
        </Row>
        <Modal isOpen={this.state.modal} className={this.props.className}>
          <ModalHeader>Sign Up</ModalHeader>
          <Form onSubmit={this.handleSubmit}>
            <ModalBody>
              <FormGroup>
                <label>Email: </label>
                <input className="form-control" type="email" name="email" placeholder="example@example.com" required onChange={this.handleChange} />
                <br />
                <label>Password: </label>
                <input className="form-control" type="password" name="password" minLength="5" required onChange={this.handleChange} />
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>{' '}
              <Button color="success" type="submit" onClick={this.toggle}>Sign Up</Button>
            </ModalFooter>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default Signup;
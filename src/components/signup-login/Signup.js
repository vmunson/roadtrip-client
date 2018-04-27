import React from 'react';
import { Button, Form, FormGroup } from 'reactstrap';
import '../../App.css'

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      modal: false
    };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
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
          <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <label>Email: </label>
                <input className="form-control" type="email" name="email" placeholder="example@example.com" required onChange={this.handleChange} />
                <br />
                <label>Password: </label>
                <input className="form-control" type="password" name="password" minLength="5" required onChange={this.handleChange} />
              </FormGroup>
              <Button className="button" color="secondary" onClick={this.props.signup}>Cancel</Button>
              <Button className="button" color="success" type="submit">Sign Up</Button>
          </Form>
      </div>
    );
  }
}

export default Signup;
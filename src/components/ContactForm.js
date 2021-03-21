import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            agree: false,
            feedback: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        alert("Thank you for your submission " + JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {
        return(
            <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
                  <Label htmlFor="firstName" md={2}>
                    First Name
                  </Label>
                  <Col md={8}>
                    <Input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      value={this.state.firstName}
                      onChange={this.handleChange}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="lastName" md={2}>
                    Last Name
                  </Label>
                  <Col md={8}>
                    <Input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      value={this.state.lastName}
                      onChange={this.handleChange}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="phoneNum" md={2}>
                    Phone Number
                  </Label>
                  <Col md={8}>
                    <Input
                      type="tel"
                      id="phoneNum"
                      name="phoneNum"
                      placeholder="(123)123-1234"
                      value={this.state.phoneNum}
                      onChange={this.handleChange}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="email" md={2}>
                    Email
                  </Label>
                  <Col md={8}>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="test@test.com"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={{size: 4, offset: 2}}>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="agree" checked={this.state.agree} onChange={this.handleChange} /> {' '}
                                May we contact you?
                            </Label>
                        </FormGroup>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="feedback" md={2}>Your Feedback</Label>
                    <Col md={8}>
                        <Input type="textarea" id="feedback" name="feedback" rows="8" value={this.state.feedback} onChange={this.handleChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={{size: 10, offset: 2}}>
                        <Button type="submit" color="light" onClick={this.handleSubmit} active>Send Feedback</Button>
                    </Col>
                </FormGroup>
              </Form>
        );
    }
}

export default ContactForm;
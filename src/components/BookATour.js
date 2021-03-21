import React, { useState, Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
} from "reactstrap";

class BookATour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      firstName: "",
      lastName: "",
      phoneNum: "",
      email: "",
      date: "",
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleSubmit(event) {
    alert("Thank you for your submission " + JSON.stringify(this.state));
    event.preventDefault();
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Button color="light" onClick={this.toggleModal} active>
          Book A Tour
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Book A Tour</ModalHeader>
          <ModalBody>
            <div className="container">
              <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
                  <Label htmlFor="firstName" md={2}>
                    First Name
                  </Label>
                  <Col md={10}>
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
                  <Col md={10}>
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
                  <Col md={10}>
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
                  <Col md={10}>
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
                  <Label htmlFor="date" md={2}>
                    Date
                  </Label>
                  <Col md={10}>
                    <Input
                      type="date"
                      id="date"
                      name="date"
                      placeholder="mm/dd/yyyy"
                      value={this.state.date}
                      onChange={this.handleChange}
                    />
                  </Col>
                </FormGroup>
              </Form>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              className="mr-auto"
              type="submit"
              value="submit"
              color="light"
              active
              onClick={this.handleSubmit}
            >
              Submit
            </Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}

export default BookATour;

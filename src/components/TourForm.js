import React from 'react';
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';

const TourForm = (props) => {
    return (
        <Form>
            <FormGroup row>
                <div className="col-md-2">
                    <Label for="firstName">First Name</Label>
                </div>
                <div className="col-md-10">
                    <Input type="text" name="firstName" id="firstName" placeholder="First Name" />
                </div>
            </FormGroup>
            <FormGroup row>
                <div className="col-md-2">
                    <Label for="lastName">Last Name</Label>
                </div>
                <div className="col-md-10">
                    <Input type="text" name="lastName" id="lastName" placeholder="Last Name" />
                </div>
            </FormGroup>
            <FormGroup row>
                <div className="col-md-2">
                    <Label for="areaCode">Contact Number</Label>
                </div>
                <div className="col-5 col-md-3">
                    <Input type="tel" name="areaCode" id="areaCode" placeholder="Area Code" />
                </div>
                <div className="col-7">
                    <Input type="tel" name="telNum" placeholder="Phone Number" />
                </div>
            </FormGroup>
            <FormGroup row>
                <div className="col-md-2">
                    <Label for="email">Email</Label>
                </div>
                <div className="col-md-10">
                    <Input type="email" name="email" id="email" placeholder="test@test.com" />
                </div>
            </FormGroup>
        </Form>
    );
}

export default TourForm;
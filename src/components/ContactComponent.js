import React from "react";
import { Container, Row } from "reactstrap";
import BookATour from "./BookATour";
import ContactForm from './ContactForm';

const Contact = (props) => {
  return (
    <Container className="mt-3">
      <Row>
        <h2>Contact Us</h2>
        <div className="ml-auto">
          <BookATour />
        </div>
      </Row>
      <hr />

      <Row className="row-content align-items-center">
        <div className="col-sm-4">
          <h5>Our Address</h5>
          <address>
            123 Cityview Lofts Lane
            <br />
            Ogden, UT 84401
          </address>
        </div>
        <div className="col">
          <h5>Phone/Email</h5>
          <a role="button" className="m-auto pt-3" href="tel:+15551231234">
            <i className="fa fa-phone"></i> 1-555-123-1234
          </a>
          <br />
          <a
            role="button"
            className="m-auto pt-3"
            href="mailto:management@cityviewlofts.com"
          >
            <i className="fa fa-envelope"></i> management@cityviewlofts.com
          </a>
        </div>
      </Row>
      <hr />

      <Row className="row-content align-items-center">
        <div className="col">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96030.6289890148!2d-112.04271381395617!3d41.22270413114323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87530e94da9c4d7b%3A0x61dcd77b34b32c!2sOgden%2C%20UT!5e0!3m2!1sen!2sus!4v1614277207471!5m2!1sen!2sus"
          width="400"
          height="300"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
        </div>
      </Row>
      <hr />

      <Row className="row-content">
          <div className="col">
              <h2>Send Us Your Feedback</h2>
          </div>
      </Row>
      <hr />

      <ContactForm />
    </Container>
  );
};

export default Contact;

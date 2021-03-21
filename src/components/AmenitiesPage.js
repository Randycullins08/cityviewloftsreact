import React from "react";
import { Container, Row } from "reactstrap";
import BookATour from "./BookATour";

const AmenitiesPage = (props) => {
  return (
    <Container className="mt-3">
      <Row>
        <h2>Amenities</h2>
        <div className="ml-auto">
          <BookATour />
        </div>
      </Row>
      <hr />
      <Row>
        <h3>Community Amenities</h3>
      </Row>
      <Row className="align-items-start mt-4">
        <div className="col-md">
          <ul>
            <li>Club House</li>
            <li>Fitness Center</li>
            <li>Game Room</li>
            <li>Indoor Bike Storage</li>
          </ul>
        </div>
        <div className="col-md">
          <ul>
            <li>Elevator</li>
            <li>Additional Storage Available</li>
            <li>24 Hour Emergency Maintenance</li>
          </ul>
        </div>
        <div className="col-md">
          <img
            className="img-fluid"
            width="300"
            height="225"
            src="https://commoncdn.entrata.com/images/thumbNailer.php?src=/media_library/15273/60304ce37f4372.10003018832.jpg&w=2048&h=1536"
            alt="gym"
          />
        </div>
      </Row>
      <hr />

      <Row>
          <h4>Apartment Amenities</h4>
      </Row>

      <Row className="align-items-start mt-4">
          <div className="col-md">
              <ul>
                  <li>Washer/Dryer</li>
                  <li>Dishwasher</li>
                  <li>Refrigerator</li>
              </ul>
          </div>
          <div className="col-md">
              <ul>
                <li>Modern Industrial Design</li>
                <li>Covered and Uncovered Parking Available</li>
              </ul>
          </div>
          <div className="col-md">
              <img 
                className="img-fluid"
                width="300"
                height="225"
                src="https://commoncdn.entrata.com/images/thumbNailer.php?src=/media_library/15273/60304d44afd115.43201797724.jpg&w=2048&h=1536"
                alt="Kitchen"
              />
          </div>
      </Row>
    </Container>
  );
};

export default AmenitiesPage;

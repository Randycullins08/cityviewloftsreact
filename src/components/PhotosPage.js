import React from "react";
import { Container, Row } from "reactstrap";
import BookATour from "./BookATour";


const PhotosPage = (props) => {
  return (
    <Container className="mt-3">
      <Row>
        <h2>Photos & Floor Plans</h2>
        <div className="ml-auto">
          <BookATour />
        </div>
      </Row>
      <hr />
      <Row>
        <h3>Photos</h3>
      </Row>


      <Row className="align-items-start">
        <div className="col-md">
          <img
            className="img-fluid"
            src="https://commoncdn.entrata.com/images/thumbNailer.php?src=/media_library/15273/60304ca05a3082.69923843868.jpg&w=2048&h=1536"
            alt="Clubhouse1"
          />
        </div>
        <div className="col-md">
          <img
            className="img-fluid"
            src="https://commoncdn.entrata.com/images/thumbNailer.php?src=/media_library/15273/60304ca0df6933.61596209445.jpg&w=2048&h=1536"
            alt="Clubhouse2"
          />
        </div>
        <div className="col-md">
          <img
            className="img-fluid"
            src="https://commoncdn.entrata.com/images/thumbNailer.php?src=/media_library/15273/60304ca12ebef1.73841628930.jpg&w=2048&h=1536"
            alt="Clubhouse3"
          />
        </div>
      </Row>


      <Row className="align-items-center mt-2">
        <div className="col-md">
          <img
            className="img-fluid"
            src="https://commoncdn.entrata.com/images/thumbNailer.php?src=/media_library/15273/60304c58be4809.69414905658.jpg&w=2048&h=1536"
            alt="Clubhouse4"
          />
        </div>
        <div className="col-md">
          <img
            className="img-fluid"
            src="https://commoncdn.entrata.com/images/thumbNailer.php?src=/media_library/15273/60304176a05664.87512470156.jpg&w=2048&h=1536"
            alt="Bike Room1"
          />
        </div>
        <div className="col-md">
          <img
            className="img-fluid"
            src="https://commoncdn.entrata.com/images/thumbNailer.php?src=/media_library/15273/60304176294345.83205057554.jpg&w=2048&h=1536"
            alt="Bike Room2"
          />
        </div>
      </Row>


      <Row className="align-items-end mt-2">
        <div className="col-md">
          <img
            className="img-fluid"
            src="https://commoncdn.entrata.com/images/thumbNailer.php?src=/media_library/15273/603041766374c8.01553884505.jpg&w=2048&h=1536"
            alt="Bike Room3"
          />
        </div>
        <div className="col-md">
          <img
            className="img-fluid"
            src="https://commoncdn.entrata.com/images/thumbNailer.php?src=/media_library/15273/60304ce3b9ba04.54911116474.jpg&w=2048&h=1536"
            alt="Gym1"
          />
        </div>
        <div className="col-md">
          <img
            className="img-fluid"
            src="https://commoncdn.entrata.com/images/thumbNailer.php?src=/media_library/15273/60304ce37f4372.10003018832.jpg&w=2048&h=1536"
            alt="Gym2"
          />
        </div>
      </Row>

      <Row className="align-items-start">
        <div className="col-md">
          <img
            className="img-fluid"
            src="https://commoncdn.entrata.com/images/thumbNailer.php?src=/media_library/15273/60304d7a951b38.76911066875.jpg&w=2048&h=1536"
            alt="Living Room1"
          />
        </div>
        <div className="col-md">
          <img
            className="img-fluid"
            src="https://commoncdn.entrata.com/images/thumbNailer.php?src=/media_library/15273/60304d7ad0abd6.31314503152.jpg&w=2048&h=1536"
            alt="Living Room2"
          />
        </div>
        <div className="col-md">
          <img
            className="img-fluid"
            src="https://commoncdn.entrata.com/images/thumbNailer.php?src=/media_library/15273/60304d7bb28c98.38333808355.jpg&w=2048&h=1536"
            alt="Living Room3"
          />
        </div>
      </Row>

      <Row className="align-items-center mt-2">
        <div className="col-md">
          <img
            className="img-fluid"
            src="https://commoncdn.entrata.com/images/thumbNailer.php?src=/media_library/15273/60304d44afd115.43201797724.jpg&w=2048&h=1536"
            alt="Kitchen"
          />
        </div>
        <div className="col-md">
          <img
            className="img-fluid"
            src="https://commoncdn.entrata.com/images/thumbNailer.php?src=/media_library/15273/60304d7a5eaf18.68428775651.jpg&w=2048&h=1536"
            alt="Bathroom1"
          />
        </div>
        <div className="col-md">
          <img
            className="img-fluid"
            src="https://commoncdn.entrata.com/images/thumbNailer.php?src=/media_library/15273/60304175897652.96594097472.jpg&w=2048&h=1536"
            alt="Bathroom2"
          />
        </div>
      </Row>

      <Row className="align-items-end mt-2">
        <div className="col-md">
          <img
            className="img-fluid"
            src="https://commoncdn.entrata.com/images/thumbNailer.php?src=/media_library/15273/60304d7b75a019.96676443392.jpg&w=2048&h=1536"
            alt="Hallway"
          />
        </div>
        <div className="col-md">
          <img
            className="img-fluid"
            src="https://commoncdn.entrata.com/images/thumbNailer.php?src=/media_library/15273/60304175bc2029.95481996502.jpg&w=2048&h=1536"
            alt="Bedroom1"
          />
        </div>
        <div className="col-md">
          <img
            className="img-fluid"
            src="https://commoncdn.entrata.com/images/thumbNailer.php?src=/media_library/15273/60304175ecef58.51189029686.jpg&w=2048&h=1536"
            alt="Bedroom2"
          />
        </div>
      </Row>

      <Row>
          <h3>Floor Plans</h3>
      </Row>
      <hr />
      <Row className="align-items-start">
        <div className="col-md">
          <p>1 Bedroom, 1 Bathroom</p>
          <img
            className="img-fluid"
            src="/images/1-bed-1-bath.jpeg"
            alt="1 Bedroom, 1 Bathroom"
          />
        </div>
        <div className="col-md">
            <p>2 Bedrom, 1 Bathroom</p>
          <img
            className="img-fluid"
            src="/images/2-bed-1-bath.jpeg"
            alt="2 Bedrom, 1 Bathroom"
          />
        </div>
        <div className="col-md">
          <p>2 Bedrom, 2 Bathroom</p>
          <img
            className="img-fluid"
            src="/images/2-bed-2-bath.jpeg"
            alt="2 Bedrom, 2 Bathroom"
          />
        </div>
      </Row>

      <Row className="align-items-center mt-2">
        <div className="col-md">
          <p>3 Bedrom, 2 Bathroom</p>
          <img
            className="img-fluid"
            src="/images/3-bed-2-bath.jpeg"
            alt="3 Bedrom, 2 Bathroom"
          />
        </div>
        <div className="col-md">
          <p>Studio</p>
          <img
            className="img-fluid"
            src="/images/Studio.jpeg"
            alt="Studio"
          />
        </div>
      </Row>
    </Container>
  );
};

export default PhotosPage;

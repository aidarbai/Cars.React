import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Container, Row, Carousel, Col, Badge } from "react-bootstrap";
import { getCar } from "../api/api";
// import GetSwiper from "./Myswiper";

export default function Car() {
  const [car, setCar] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    (async function () {
      const [carsRes, carsResError] = await getCar(id);
      if (!carsResError) {
        setCar(carsRes.data);
      }
    })();
  }, [id]);

  let carouselItems = car && car.photoUrls.map((url, idx) => {
    return (
      <Carousel.Item className="carousel-slide" key={idx}>
        <img
          className="car-image rounded"
          src={url}
          alt={`${idx} slide`}
          loading="lazy"
          decoding="async"
        />
      </Carousel.Item>
    );
  });

  return (
    <>
      <Container className="my-container">
        {car ? <>
        <Row>
          <Col>
            <Carousel>{carouselItems}</Carousel>
          </Col>
        </Row>
        <Row md={4} lg={4} xl={4} className="mt-3">
          <Col className="car-details">
            <h4>
              <Badge bg="primary">
                {car.make} {car.model} {car.year}
              </Badge>
            </h4>
            <p>
              <Badge bg="secondary">VIN: {car.vin}</Badge>
            </p>
            <p>
              <Badge bg="success">${car.price}</Badge>
            </p>
            <p>
              <Badge bg="warning" text="dark">
                Color: {car.color}
              </Badge>
            </p>
            <p>
              <Badge bg="secondary">Body: {car.bodyType}</Badge>
            </p>
            <p>
              <Badge bg="secondary">Mileage: {car.mileage} miles</Badge>
            </p>
            <p>
              <Badge bg="secondary">City: {car.city}</Badge>
            </p>
          </Col>
        </Row>
        </> : <h2>Loading</h2>}
        {/* <GetSwiper></GetSwiper> */}
      </Container>
    </>
  );
}

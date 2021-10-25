import { useFinalCars } from "../hooks/useFinalCars";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Container, Card, Row, Badge } from "react-bootstrap";

export default function CarsTable() {
  const cars = useFinalCars();
  const cards = cars.map((car) => {
    return (
      <Link key={car.id} to={`/car/${car.id}`} className="car-link">
        <Card>
          <Card.Img
            variant="top"
            src={car.primaryPhotoUrl}
            loading="lazy"
            decoding="async"
          />
          <Card.Body>
            <Card.Title>
              <Badge pill bg="primary">
                {car.make} {car.model} {car.year}
              </Badge>{" "}
              <Badge pill bg="secondary">
                ${car.price}
              </Badge>{" "}
              <Badge pill bg="success">
                {car.mileage} miles
              </Badge>{" "}
            </Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </Link>
    );
  });

  return (
    <>
      <Container className="mt-3">
        <Row xs={1} md={2} className="g-4">
          {cards}
        </Row>
      </Container>
    </>
  );
}

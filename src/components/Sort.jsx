import { Form, Row, Col } from "react-bootstrap";
import { useCars } from "../hooks/useCars";

export default function Sort() {
  const [, dispatchData] = useCars();

  const handleSelectProp = (sortProperty) => {
    dispatchData({ type: "SET_SORT_KEY", payload: sortProperty });
  };

  const handleSelectDir = (sortDir) => {
    dispatchData({ type: "SET_SORT_DIR", payload: sortDir });
  };

  return (
    <>
      <Row >
        <Col>
          <Form.Select
            onChange={(e) => handleSelectDir(e.target.value)}
            defaultValue="1"
          >
            <option value="1">Ascending</option>
            <option value="-1">Descending</option>
          </Form.Select>
        </Col>
        <Col>
          <Form.Select
            onChange={(e) => handleSelectProp(e.target.value)}
            defaultValue="price"
          >
            <option value="make">Make</option>
            <option value="model">Model</option>
            <option value="year">Year</option>
            <option value="price">Price</option>
          </Form.Select>
        </Col>
      </Row>
    </>
  );
}

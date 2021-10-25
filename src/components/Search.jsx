import { Button, Form } from "react-bootstrap";
import { useCars } from "../hooks/useCars";

export default function Search() {
  const [, dispatchData] = useCars();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchData({ type: "SET_QUERY", payload: e.target.search.value });
  };

  return (
    <Form onSubmit={handleSubmit} className="search-form">
      <Form.Group>
        <Form.Control
          type="search"
          name="search"
          placeholder="Make, model, year"
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="search-btn">
        Search
      </Button>
    </Form>
  );
}

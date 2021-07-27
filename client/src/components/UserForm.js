import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";


const UserForm = () => {
  const [formObject, setFormObject] = React.useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    document.location.replace('/user=' + formObject.name);
  }

  return (
    <Form onSubmit = {handleSubmit}>
      <Form.Group as={Row} className="my-3" >
        <Form.Label column sm="2">
          Comunity Code:
        </Form.Label>
        <Col sm="8">
          <Form.Control
          placeholder="Enter Community Code Here!"
          name="name"
          onChange={handleInputChange}
          />
        </Col>
        <Col sm="2">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default UserForm;
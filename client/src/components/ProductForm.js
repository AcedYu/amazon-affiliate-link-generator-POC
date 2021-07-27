import React from "react";
import { Form, Col, Row } from "react-bootstrap";


const ProductForm = () => {

  return (
    <Form>
      <Form.Group as={Row} className="my-3" >
        <Form.Label column sm="2">
          Search:
        </Form.Label>
        <Col sm="10">
          <Form.Control placeholder="products"/>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default ProductForm;
import React from "react";
import { Card, Image } from "react-bootstrap";
import users from "./users.json";

const CommunityEntry = ({ name, origin, image, links }) => {
  return (
    <a href={"/user="+name}>
    <Card className="my-3">
      <Card.Title>
        <h1>{name}</h1>
      </Card.Title>
      <Card.Title>From {origin}</Card.Title>
      <Card.Img variant="bottom" src={image} />
    </Card>
    </a>
  )
}

export default CommunityEntry;
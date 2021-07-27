import React from "react";
import { Image } from "react-bootstrap";

const Landing = () => {
  return (
    <div className="container text-center">
      <Image
        alt="Failed to Load"
        src="./img/community-chest.png"
        className="d-inline-block align-top my-2"
      />
      <h1>Welcome to Community Chest.</h1>
      <div className = "list-group list-group-flush d-flex text-left w-75 mx-auto">
        <li className="d-inline list-group-item">• Find products and services reccomended by your favorite streamers and youtubers.</li>
        <li className="d-inline list-group-item">• Empowering small community owners to share the products they love with their followers.</li>
        <li className="d-inline list-group-item">• Great for *AS SEEN ON STREAM* or for for highlighting products featured in your videos.</li>
      </div>
      <p>Enter your community name to get started! </p>
    </div>
  );
}

export default Landing;
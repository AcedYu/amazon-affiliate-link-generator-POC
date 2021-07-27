import React from "react";
import { Image } from "react-bootstrap";
import Nav from "../components/Nav.js";
import UserForm from "../components/UserForm.js";
import Landing from  "../components/Landing.js";
import CommunityList from "../components/CommunityList.js";

const Home = () => {
  return (
    <div>
      <Nav />
      <Landing />
      <div className="container my-5">
        <UserForm />
      </div>
      <CommunityList />
      <p className="text-center">As an Amazon Associate I earn from qualifying purchases.</p>
    </div>
  );
}

export default Home;
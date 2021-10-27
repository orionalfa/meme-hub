import React, { useEffect } from "react";

import { Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import "./styles.css";

export default function NavBar() {
  const isLoggedIn = useSelector((state) => state.userReducer);

  useEffect(() => {
    console.log("reducer");
  }, [isLoggedIn]);

  return (
    <>
      <nav>
        <Row>
          <Col sm={9}>
            <Link to="/">Home {isLoggedIn && "(You are logged in)"} </Link>
          </Col>
          <Col sm={2}>
            <Link to="/register">Register</Link>
          </Col>
          <Col sm={1}>
            <Link to="/login">Login</Link>
          </Col>
        </Row>
      </nav>
    </>
  );
}

import React from "react";

import { Row, Col } from "react-bootstrap";

// import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { Redirect } from "react-router";

import "./styles.css";

export default function NavBar() {
  return (
    <>
      <nav>
        <Row>
          <Col sm={9}>
            <Link to="/">Home</Link>
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

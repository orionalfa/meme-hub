import React, { useState, useRef } from "react";

import * as $ from "jquery";
import { logIn } from "../../services/firebase";
// import { getByEmail } from "../../services/apiUsers";
import { Redirect } from "react-router";
import { useDispatch } from "react-redux";
import { setUserLogged } from "../../redux/userData/actions";

//Import components
import { Row, Col } from "react-bootstrap";
import Button from "../../components/Button/index";
import Input from "../../components/Input/index";
import validate from "jquery-validation";

function Login() {
  const formRegister = useRef();
  const dispatch = useDispatch();

  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });

  //Manage values of state properties
  function handleChange(e) {
    setloginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  }

  //Register user on firebase and apiserver
  async function handleSubmit(e) {
    e.preventDefault();
    $(formRegister.current).validate({
      rules: {
        email: { required: true },
        password: { required: true },
      },
      messages: {
        email: { required: "Email is required" },
        password: { required: "Password is required" },
      },
      submitHandler: async () => {
        const { email, password } = loginData;
        console.log("submit ", email);
        logIn(email, password)
          .then((response) => {
            console.log(response);
            setLoginSuccess(true);
            dispatch(setUserLogged());
          })
          .catch((error) => console.log(error));
      },
    });
  }

  return loginSuccess ? (
    <Redirect to="/" />
  ) : (
    <main>
      <Row>
        <Col xs={12} md={6} className="">
          <h1 className="">Sign in</h1>
          <form ref={formRegister} onSubmit={handleSubmit}>
            <Input
              type="email"
              id="email"
              label="Email"
              value={loginData.email}
              handleChange={handleChange}
            />
            <Input
              type="password"
              id="password"
              label="Password"
              value={loginData.password}
              handleChange={handleChange}
            />
            <div className="">
              <Button title="Submit" />
            </div>
          </form>
        </Col>
      </Row>
    </main>
  );
}

export default Login;

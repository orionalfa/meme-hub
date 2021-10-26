//Imports
import React, { useState, useRef } from "react";

import * as $ from "jquery";
// import { registerNewUser } from "../../services/firebase";
// import { registerInApi, getByEmail } from "../../services/api/index";

//Import components
import { Row, Col } from "react-bootstrap";
import Button from "../../components/Button/index";
import Input from "../../components/Input/index";
import validate from "jquery-validation";

function Register() {
  const formRegister = useRef();
  const [registerData, setRegisterData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const registerNewUser = () => {};
  const registerInApi = () => {};
  const getByEmail = () => {};

  //Manage values of state properties
  function handleChange(e) {
    setRegisterData({
      ...registerData,
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
        firstname: { required: true },
        lastname: { required: true },
        username: { required: true },
        confirmPassword: { required: true },
      },
      messages: {
        email: { required: "Email is required" },
        password: { required: "Password is required" },
        firstname: { required: "Firstname is required" },
        lastname: { required: "Lastname is required" },
        username: { required: "Username is required" },
        confirmPassword: { required: "ConfirmPassword is required" },
      },
      submitHandler: async () => {
        const { email, password, confirmPassword } = registerData;
        if (confirmPassword === password) {
          console.log("submit ", registerData);
          const { user } = await registerNewUser(email, password);
          console.log("the userFirebase: ", user);
          const userApi = await registerInApi(registerData, user.uid);
          console.log("the userApi: ", userApi);
        } else {
          console.log("los datos no coinciden");
        }
      },
    });
  }

  return (
    <main>
      <Row>
        <Col xs={12} md={6} className="">
          <h1 className="">Please sign up</h1>
          <form ref={formRegister} onSubmit={handleSubmit}>
            <Input
              type="text"
              id="firstname"
              label="Firstname"
              value={registerData.firstname}
              handleChange={handleChange}
            />
            <Input
              type="text"
              id="lastname"
              label="Lastname"
              value={registerData.lastname}
              handleChange={handleChange}
            />
            <Input
              type="text"
              id="username"
              label="Username"
              value={registerData.username}
              handleChange={handleChange}
            />
            <Input
              type="email"
              id="email"
              label="Email"
              value={registerData.email}
              handleChange={handleChange}
            />
            <Input
              type="password"
              id="password"
              label="Password"
              value={registerData.password}
              handleChange={handleChange}
            />
            <Input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              label="Confirm password"
              value={registerData.confirmPassword}
              handleChange={handleChange}
            />

            <div className="">
              <Button title="Register" />
            </div>
          </form>
        </Col>
      </Row>
    </main>
  );
}

export default Register;

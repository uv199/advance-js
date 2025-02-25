import { PersonStanding, User } from "lucide-react";
import React, { Component, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import { Button } from "reactstrap";
import LoginModal from "./LoginModal";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import RegisterModal from "./RegisterModal";

export default () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [regModal, setRegModal] = useState(false);
  console.log("--=-=-=-=-=>");

  const regToggle = () => setRegModal(!regModal);

  let jsonData = localStorage.getItem("user") || "{}";
  let user = JSON.parse(jsonData);
  const navigate = useNavigate();

  return (
    <>
      <LoginModal modal={modal} toggle={toggle} regToggle={regToggle} />
      <RegisterModal modal={regModal} toggle={regToggle} loginToggle={toggle} />
      <div
        style={{
          width: "100%",
          backgroundColor: "darkgray",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <div className="w-75 d-flex justify-content-center gap-4 m-3">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
        </div>
        <div className="w-25 gap-4 align-items-center d-flex justify-content-end pe-4">
          {Object.keys(user).length === 0 ? (
            <Button color="danger" onClick={() => toggle()}>
              Login
            </Button>
          ) : (
            <User role="button" onClick={() => navigate("/profile")} />
          )}
        </div>
      </div>
    </>
  );
};

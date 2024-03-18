import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const initialUser = {
  name: "",
  email: "",
  number: "",
  password: "",
  conPassword: "",
  gender: "",
  age: "",
};
const initialAddress = {
  add: "",
  city: "",
  state: "",
  pinCode: "",
};

export default function UserForm({ refreshData }) {
  let [user, setUser] = useState(initialUser);
  let [address, setAddress] = useState(initialAddress);

  const submitHandler = (e) => {
    e.preventDefault();
    let mainData = { ...user, address: [address] };

    axios({
      method: "post",
      url: "http://localhost:9999/user/signup",
      data: mainData,
    })
      .then((res) => {
        console.log("-----------  res----------->", res.data);
        toast.success("get data successfully");
        refreshData();
      })
      .catch((error) => {
        console.log("-----------  error----------->", error);
      });
  };

  return (
    <div className="d-flex flex-column align-items-center p-4 w-100">
      <h1>User Register Form</h1>
      <hr style={{ width: "50%" }} />
      <Form
        onSubmit={(e) => submitHandler(e)}
        className="border p-4 rounded-2 w-50"
      >
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            id="name"
            placeholder="Enter your name"
            value={user?.name}
            onChange={(e) => setUser({ ...user, name: e?.target?.value })}
            type="text"
          />
        </FormGroup>

        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            id="email"
            placeholder="Enter your email"
            value={user?.email}
            onChange={(e) => setUser({ ...user, email: e?.target?.value })}
            type="email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="number">Number</Label>
          <Input
            id="number"
            placeholder="Enter your number"
            value={user?.number}
            onChange={(e) => setUser({ ...user, number: e?.target?.value })}
            type="number"
          />
        </FormGroup>
        <FormGroup>
          <Label for="age">Age</Label>
          <Input
            id="age"
            placeholder="Enter your age"
            value={user?.age}
            onChange={(e) => setUser({ ...user, age: e?.target?.value })}
            type="number"
          />
        </FormGroup>
        <FormGroup tag="fieldset">
          <Label>Gender</Label>
          <FormGroup>
            <Input ed={user.gender === "male"} type="radio" />{" "}
            <Label>Male</Label>
          </FormGroup>
          <FormGroup>
            <Input checked={user.gender === "female"} type="radio" />{" "}
            <Label>Female</Label>
          </FormGroup>
        </FormGroup>

        <FormGroup>
          <Label for="add">Add-1</Label>
          <Input
            placeholder="Enter your add"
            id="add"
            name="text"
            onChange={(e) => setAddress({ ...address, add: e?.target?.value })}
            type="textarea"
          />
        </FormGroup>
        <FormGroup>
          <Label for="city">City</Label>
          <Input
            placeholder="Enter your City"
            id="city"
            name="text"
            onChange={(e) => setAddress({ ...address, city: e?.target?.value })}
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="state">State</Label>
          <Input
            placeholder="Enter your state"
            id="state"
            name="text"
            onChange={(e) =>
              setAddress({ ...address, state: e?.target?.value })
            }
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="pinCode">Pincode</Label>
          <Input
            placeholder="Enter your pinCode"
            id="pinCode"
            name="text"
            onChange={(e) =>
              setAddress({ ...address, pinCode: e?.target?.value })
            }
            type="number"
          />
        </FormGroup>
        <FormGroup>
          <Label for="Password">Password</Label>
          <Input
            placeholder="Enter your Password"
            id="Password"
            name="text"
            onChange={(e) => setUser({ ...user, password: e?.target?.value })}
            type="number"
          />
        </FormGroup>
        <FormGroup>
          <Label for="Password">Confirm password</Label>
          <Input
            placeholder="Enter your Password"
            id="Password"
            name="text"
            onChange={(e) =>
              setUser({ ...user, conPassword: e?.target?.value })
            }
            type="number"
          />
        </FormGroup>

        <Button color="danger" className="w-100">
          Submit
        </Button>
      </Form>
    </div>
  );
}
//  url: "http://localhost:9999/user/login"
// data : {email,password}
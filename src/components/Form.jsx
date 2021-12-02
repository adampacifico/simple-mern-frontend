import React from "react";
import styled from "styled-components";
import { Form, Button, FormGroup, Input, Label } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Forms = ({ setPerson, person, btnSubmit }) => {
  return (
    <Main>
    <Form inline className="container-fluid">
      <FormGroup floating>
        <Input
          value={person.firstname}
          id="firstname"
          name="firstname"
          placeholder="firstname"
          type="firstname"
          onChange={(e) => setPerson({ ...person, firstname: e.target.value })}
        />
        <Label for="firstname">First name</Label>
      </FormGroup>
      <FormGroup floating>
        <Input
          value={person.lastname}
          id="lastname"
          name="lastname"
          placeholder="lastname"
          type="lastname"
          onChange={(e) => setPerson({ ...person, lastname: e.target.value })}
        />
        <Label for="lastname">Last name</Label>
      </FormGroup>
      <FormGroup floating>
        <Input
          value={person.age}
          id="age"
          name="age"
          placeholder="age"
          type="age"
          onChange={(e) => setPerson({ ...person, age: e.target.value })}
        />
        <Label for="age">Age</Label>
      </FormGroup>
      <FormGroup floating>
        <Input
          value={person.description}
          id="description"
          name="description"
          placeholder="description"
          type="description"
          onChange={(e) =>
            setPerson({ ...person, description: e.target.value })
          }
        />
        <Label for="description">Description</Label>
      </FormGroup>
      <Button
        color="primary"
        onClick={(e) => {
          e.preventDefault();
          btnSubmit();
        }}
      >
        Submit
      </Button>
    </Form>
   </Main>
  );
};

const Main = styled.div`
  flex-basis: 40%;
`
export default Forms;

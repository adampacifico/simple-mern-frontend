import React from "react";
import styled from "styled-components";
import { Form, Button, FormGroup, Input, Label, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import FileBase64 from "react-file-base64";

const Forms = ({ setPerson, person, btnSubmit }) => {
  return (
    <Main>
      <Form inline className="container-fluid">
        <Col
          md={12}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <FormGroup floating>
            <Input
              // style={{ width: "98%" }}
              value={person.firstname}
              id="firstname"
              name="firstname"
              placeholder="firstname"
              type="firstname"
              onChange={(e) =>
                setPerson({ ...person, firstname: e.target.value })
              }
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
              onChange={(e) =>
                setPerson({ ...person, lastname: e.target.value })
              }
            />
            <Label for="lastname">Last name</Label>
          </FormGroup>
          {/* </Col> */}
        </Col>
        <FormGroup floating>
          <Input
            value={person.title}
            id="title"
            name="title"
            placeholder="title"
            type="title"
            onChange={(e) => setPerson({ ...person, title: e.target.value })}
          />
          <Label for="Title">Title</Label>
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
        <FormGroup>
          <FileBase64
            type="file"
            multiple={false}
            name="file"
            onDone={({ base64 }) =>
              setPerson({ ...person, selectedFile: base64 })
            }
          />
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
  flex-basis: 50%;
  max-width: 450px;
`;
export default Forms;

import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";
import { FaTrash, FaRegEdit } from "react-icons/fa";
import { BiTime } from "react-icons/bi";
import moment from "moment";
const List = ({ records, setCurrentId, deleteHandler }) => {
  return (
    <Record>
      <img src={records.selectedFile} alt="posted" />
      <p className="name">
        {records.firstname} {records.lastname}
      </p>
      <div className="time">
        <BiTime />
        <span>{moment(records.createdAt).fromNow()}</span>
      </div>
      <hr />
      <p>" {records.description} "</p>
      <Btn>
        <Button color="success">
          <FaRegEdit onClick={() => setCurrentId(records._id)} />
        </Button>
        <Button color="danger">
          <FaTrash onClick={() => deleteHandler(records._id)} />
        </Button>
      </Btn>
    </Record>
  );
};
const Record = styled.li`
  border: 1px solid black;
  border-radius: 5px;
  width: 100%;
  margin: 0 5px 10px;
  padding: 10px;
  text-transform: capitalize;

  .name {
    font-weight: bold;
    margin: 0;
  }
  svg {
    height: 15px;
  }
  img {
    width: 100%;
    margin-bottom: 10px;
  }
  hr {
    margin: 5px 0 10px 0;
  }
  .time {
    color: gray;
    font-style: italic;
    font-size: 10px;
    span {
      text-transform: lowercase;
      margin-left: 8px;
    }
  }
`;

const Btn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  width: 100%;

  button {
    height: 30px;
    width: 150px;
    margin: 5px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default List;

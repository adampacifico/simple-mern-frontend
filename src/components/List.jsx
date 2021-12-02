import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";
import { FaTrash, FaRegEdit } from "react-icons/fa";
import moment from "moment"
const List = ({ records, setCurrentId, deleteHandler }) => {

  return (
    <Record>
      {/* {console.log(records.createdAt)} */}
      <div style={{ flexBasis: "90%", display: "flex", justifyContent: "space-around", flexDirection: "column" }}>
        <Details>
          <div>
            {records.lastname}, {records.firstname} <span>({records.age})</span>
          </div>
        </Details>
        <Description>"{records.description}"</Description>
        <span style={{ fontSize: "12px", fontStyle: "italic"}}>{moment(records.createdAt).calendar()}</span>

      </div>
      <Btn>
        <Button color="success">
          <FaRegEdit onClick={() => setCurrentId(records._id)} />
        </Button>
        <Button color="danger">
          <FaTrash onClick={()=>deleteHandler(records._id)} />
        </Button>
      </Btn>
    </Record>
  );
};
const Record = styled.li`
  border: 1px solid black;
  width: 100%;
  margin: 5px;
  padding: 10px;
  display: flex;
  height: 150px;
  text-transform: capitalize;
  /* flex-direction: column; */
`;
const Details = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgrey;
  padding: 8px 0;
  width: 100%;
  span {
    color: grey;
    font-style: italic;
  }
`;

const Description = styled.div`
  font-style: italic;
  padding: 8px 0;
`;

const Btn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  flex-direction: column;
  width: 100px;
  button {
    height: 100%;
    margin: 5px 0;
  }
`;

export default List;

import styled from "styled-components";
import Lists from "./components/List";
import Forms from "./components/Form";
import {
  readPersons,
  createPerson,
  updatePerson,
  deletePerson,
} from "./api/api";
import { useEffect, useState } from "react";

import Loader from "react-loader-spinner";

function App() {
  const [person, setPerson] = useState({
    lastname: "",
    firstname: "",
    title: "",
    description: "",
  });
  const [records, setRecords] = useState([]);
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    const currentPerson =
      currentId !== 0
        ? records.find((person) => person._id === currentId)
        : { lastname: "", firstname: "", title: "", description: "" };
    setPerson(currentPerson);
  }, [currentId]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await readPersons();
      setRecords(result.data);
    };
    fetchData();
    // console.log("1")
  }, [records]);

  // create hander
  const btnSubmit = async () => {
    if (currentId === 0) {
      await createPerson(person);
      setRecords(...records, person);
    } else {
      await updatePerson(currentId, person);
    }
    clearFields();
  };

  // delete Handler
  const deleteHandler = async (id) => {
    await deletePerson(id);
    const personRec = [...records];
    personRec.filter((record) => record._id !== id);
    // setRecords(personRec);
  };

  function clearFields() {
    setPerson({ lastname: "", firstname: "", title: "", description: "" });
  }
  return (
    <Container>
      {/* <Title>Simple Crud App</Title> */}
      <Forms setPerson={setPerson} person={person} btnSubmit={btnSubmit} />
      <Records>
        {/* {console.log(records)} */}
        {records.length > 0 ? (
          records.map((rec, i) => (
            <Lists
              key={i}
              records={rec}
              deleteHandler={deleteHandler}
              setCurrentId={setCurrentId}
            />
          ))
        ) : (
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Loader type="Puff" color="#00BFFF" height={100} width={100} />
            <h2>Post A Memory</h2>
          </div>
        )}
      </Records>
    </Container>
  );
}

const Container = styled.div`
  width: 90%;
  height: 95vh;
  margin: 20px auto;
  padding: 20px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;
const Records = styled.ul`
  list-style-type: none;
  /* flex-basis: 50%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: fit-content;
  max-height: 90vh;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-right: 20px;
  ::-webkit-scrollbar {
    width: 0;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  h2 {
    margin-left: 10px;
  }
  @media (max-width: 768px) {
    margin-top: 15px;
    padding: 0;
    display: block;
    overflow: unset;
  }
`;

export default App;

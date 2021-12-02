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

function App() {
  const [person, setPerson] = useState({
    lastname: "",
    firstname: "",
    age: "",
    description: "",
  });
  const [records, setRecords] = useState([]);
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    const currentPerson =
      currentId !== 0
        ? records.find((person) => person._id === currentId)
        : { lastname: "", firstname: "", age: "", description: "" };
    setPerson(currentPerson);
  }, [currentId]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await readPersons();
      setRecords(result.data);
    };
    fetchData();
  }, [records]);

  // create hander
  const btnSubmit = async () => {
    if (currentId === 0) {
      await createPerson(person);
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
    setRecords(personRec);
  };

  function clearFields() {
    setPerson({ lastname: "", firstname: "", age: "", description: "" });
  }
  return (
    <Container>
      {/* <Title>Simple Crud App</Title> */}
      <Forms setPerson={setPerson} person={person} btnSubmit={btnSubmit} />
      <Records>
        {records
          .sort((a, b) => a.datecreated - b.datecreated)
          .map((rec, i) => (
            <Lists
              key={i}
              records={rec}
              deleteHandler={deleteHandler}
              setCurrentId={setCurrentId}
            />
          ))}
      </Records>
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  border: 2px blue solid;
  height: 95vh;
  margin: 20px auto;
  padding: 20px;
  display: flex;

  @media (max-width: 600px) {
    display: block;
  }
`;
const Records = styled.ul`
  list-style-type: none;
  flex-basis: 60%;
  display: flex;
  flex-direction: column-reverse;
  height: fit-content;
  max-height: 90vh;
  padding: 10px;
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
`;
// const Title = styled.div`
//   text-align: center;
// `;
export default App;

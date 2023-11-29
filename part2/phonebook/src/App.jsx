import { useState, useEffect } from "react";
import Persons from "./components/Persons.jsx";
import axios from "axios";

function Filter({ newSearch, handleNewSearch }) {
  return (
    <div>
      filter show with <input value={newSearch} onChange={handleNewSearch} />
    </div>
  );
}

function PersonForm({
  addPerson,
  newName,
  newPhone,
  handleNameChange,
  handlePhoneChange,
}) {
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        phone: <input value={newPhone} onChange={handlePhoneChange} />
      </div>
      <div>debug: {newName}</div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}

function App() {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newSearch, setNewSearch] = useState("");
  const [newId, setNewId] = useState(5);

  const hook = () => {
    console.log("effect");
    axios
    .get("http://localhost:3001/persons")
    .then(response => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  };

  useEffect(hook, []);
  console.log("render", persons.length, "persons");

  function checkNameForExistance(props) {
    console.log(`checkNameForExistance ${props.name}`);
    console.log(persons);
    return persons.find((person) => person.name === props);
  }

  function addPerson(event) {
    event.preventDefault();
    console.log("button clicked", event.target);
    console.log(`name: ${newName} phone:${newPhone}`);

    const personObject = {
      name: newName,
      number: newPhone,
      id: newId,
    };

    if (checkNameForExistance(newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      console.log(checkNameForExistance(newName));
      setNewId(newId + 1);
      setPersons(persons.concat(personObject));

      setNewName("");
      setNewPhone("");
    }
  }

  function handleNameChange(event) {
    console.log(event.target.value);
    setNewName(event.target.value);
  }
  function handlePhoneChange(event) {
    console.log(event.target.value);
    setNewPhone(event.target.value);
  }
  function handleNewSearch(event) {
    console.log(event.target.value);
    setNewSearch(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newSearch={newSearch} handleNewSearch={handleNewSearch} />
      <h3>Add a new</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newPhone={newPhone}
        handleNameChange={handleNameChange}
        handlePhoneChange={handlePhoneChange}
      />
      <h3>Numbers</h3>
      <ul>
        <Persons persons={persons} keyword={newSearch} />
      </ul>
    </div>
  );
}

export default App;

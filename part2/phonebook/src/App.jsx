import { useState } from "react";
import Persons from "./components/Persons.jsx";

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
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newSearch, setNewSearch] = useState("");
  const [newId, setNewId] = useState(5);

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

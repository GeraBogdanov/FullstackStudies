import { useState, useEffect } from "react";
import Persons from "./components/Persons.jsx";
import PersonForm from "./components/PersonForm.jsx";
import Filter from "./components/Filter.jsx";
import noteService from "./services/persons.js";
import Notification from "./components/Notification.jsx";

function App() {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewPhone] = useState("");
  const [newSearch, setNewSearch] = useState("");
  const [message, setMessage] = useState(null);

  useEffect(() => {
    noteService.getAll().then((initialState) => {
      setPersons(initialState);
    });
  }, []);
  console.log("render", persons.length, "persons");

  function deletePerson(itemId) {
    console.log(`deletePerson ${itemId}`);
    noteService
      .remove(itemId)
      .then(() => {
        setPersons(persons.filter((person) => person.id !== itemId));
      })
      .catch((error) => {
        console.log(error);
        setMessage({
          message: `Information of ${persons.find((person) => person.id === itemId).name
            } has already been removed from server`,
          type: "error",
        });
        setPersons(persons.filter((person) => person.id !== itemId));
        setTimeout(() => setMessage(null), 5000);
      });
  }

  function findPersonInList(newName) {
    return persons.find((person) => person.name === newName);
  }

  function comparePhone(num1, num2) {
    return num1 === num2;
  }

  function clearInputs() {
    setNewName("");
    setNewPhone("");
  }

  function changeNumber(newNumber, id) {
    noteService
      .change(newNumber, id)
      .then(() => {
        setPersons(
          // create new persons array and change number if the id is the same
          persons.map((person) => {
            if (person.id === id) {
              person.number = newNumber;
              return person;
            }
            return person;
          })
        );
        console.log(persons);
        clearInputs();
      })
      .catch((error) => {
        console.log(error);
        setMessage({
          message: `Information of ${persons.find((person) => person.id === id).name
            } has already been removed from server`,
          type: "error",
        });
        setPersons(persons.filter((person) => person.id !== id));
        setTimeout(() => setMessage(null), 5000);
      });
  }

  function addPerson(event) {
    event.preventDefault();

    console.log("button clicked", event.target);
    console.log(`name: ${newName} phone:${newNumber}`);

    const personObject = {
      name: newName,
      number: newNumber,
    };
    const person = findPersonInList(newName);

    if (person) {
      if (comparePhone(person.number, newNumber)) {
        alert(`${newName} is already added to phonebook`);
      } else {
        if (
          window.confirm(
            `${newName} is already added to phonebook, preplace the old number with a new one?`
          )
        )
          changeNumber(newNumber, person.id);
      }
    } else {
      noteService.create(personObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setMessage({
          message: `Added ${returnedPerson.name}`,
          type: "success",
        });
        setTimeout(() => setMessage(null), 5000);
        clearInputs();
      });
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
      <Notification message={message} />
      <Filter newSearch={newSearch} handleNewSearch={handleNewSearch} />
      <h3>Add a new</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newPhone={newNumber}
        handleNameChange={handleNameChange}
        handlePhoneChange={handlePhoneChange}
      />
      <h3>Numbers</h3>
      <ul>
        <Persons
          persons={persons}
          keyword={newSearch}
          deletePerson={deletePerson}
        />
      </ul>
    </div>
  );
}

export default App;

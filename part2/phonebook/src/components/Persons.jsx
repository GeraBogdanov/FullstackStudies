function Name({ name }) {
  return name;
}

function PhoneNumber({ number }) {
  return number;
}

function Person({ person, deletePerson }) {
  return (
    <div>
      <li>
        <Name name={person.name} /> <PhoneNumber number={person.number} />
        <button onClick={() => { if (window.confirm(`Delete ${person.name}`)) deletePerson(person.id) }}>delete</button>
      </li>
    </div>
  );
}


function Persons({ keyword, persons, deletePerson }) {
  // console.log(deletePerson); // function deletePerson(itemId)
  // console.log(deletePerson()); // undefined
  // console.log(() => deletePerson()); // function Persons()
  // console.log(() => deletePerson); // funciton Persons()
  return persons.map((person) => {
    if (person.name.search(keyword) === -1) {
      return;
    } else {
      return <Person key={person.id} person={person} deletePerson={deletePerson} />;
    }
  });
}

export default Persons;

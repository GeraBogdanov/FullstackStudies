function Name({ name }) {
  return name;
}
function PhoneNumber({ number }) {
  return number;
}
function Person({ person }) {
  return (
    <div>
      <li>
        <Name name={person.name} /> <PhoneNumber number={person.number} />
      </li>
    </div>
  );
}

function Persons({ keyword, persons }) {
  return persons.map((person) => {
    if (person.name.search(keyword) === -1) {
      return;
    } else {
      return <Person key={person.id} person={person} />;
    }
  });
}

export default Persons;

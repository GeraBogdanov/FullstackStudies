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

  export default PersonForm
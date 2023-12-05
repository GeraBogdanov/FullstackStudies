function Filter({ newSearch, handleNewSearch }) {
    return (
      <div>
        filter show with <input value={newSearch} onChange={handleNewSearch} />
      </div>
    );
  }

  export default Filter
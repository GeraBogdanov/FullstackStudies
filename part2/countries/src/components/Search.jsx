function Search({ newSearch, handleNewSearch }) {
  return (
    <div>
      find countries <input value={newSearch} onChange={handleNewSearch} />
    </div>
  )
} 
export default Search;
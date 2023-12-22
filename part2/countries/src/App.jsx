import { useState } from "react";
import { useEffect } from "react";
import  Search  from "./components/Search";
import  Countries from "./components/Countries";
import  Weather  from "./components/Weather";
import  requestCountry  from "./services/countries.js";

function App() {
  const api_key = import.meta.env.VITE_WEATHER_KEY;
  const [newSearch, setNewSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [newCountry, setNewCountry] = useState("");
  const [weather, setWeather] = useState("");

  useEffect(() => {
    requestCountry.getAll().then(response => {
      setCountries(response);
      console.log(response);
    });
  }, []);

  console.log(`render ${countries.length} countries`);

  function handleNewSearch(event) {
    console.log(event.target.value);
    setNewSearch(event.target.value);
  }

  return (
    <>
      <div className="card">
        <Search newSearch={newSearch} handleNewSearch={handleNewSearch} />
        <Countries key={countries.id} countries={countries} keyword={newSearch} setNewSearch={setNewSearch} api_key={api_key} />

      </div>
    </>
  );
}




export default App;

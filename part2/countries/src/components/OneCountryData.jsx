import Weather from "./Weather";
function OneCountryData({searchedCountry}) {
  console.log(searchedCountry);
  const country = searchedCountry[0];

  const languageKeys = Object.keys(country.languages);
  console.log(languageKeys);
  return (
    <>
      <br />
      <div style={{ 'fontWeight': 'bold' }}>{country.name.common}</div>
      <br />
      <div>capital: {country.capital[0]}</div>
      <div>area: {country.area}</div>
      <br />
      <div>languages:
        <ul>
          {languageKeys.map(lang => <li key={lang}>{country.languages[lang]}</li>)}
        </ul>
      </div>
      <br />
      <div>
        <img src={country.flags.png}></img>
      </div>

      <Weather city={country.capital[0]}/>
    </>
  )
}

export default OneCountryData;
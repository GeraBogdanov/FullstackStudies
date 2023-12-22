import OneCountryData from "./OneCountryData";

function Countries({ countries, keyword, setNewSearch, api_key }) {

	let searched = [];

	console.log("function: Countries; keyword: ", keyword);

	let searchedCountries = countries.filter((country) => country.name.common.toLowerCase().includes(keyword.toLowerCase()))

	if (searchedCountries.length > 10) {
		return (
			<div>To many matches, specify another filter</div>
		)
	} else if (searchedCountries.length === 1) {
		return (<>
			<OneCountryData searchedCountry={searchedCountries} />
		</>)
	} else {
		searchedCountries.forEach(country => {
			searched = searched.concat(
				<li key={country.name.common}>{country.name.common}
					<button onClick={() => setNewSearch(country.name.common)}>show</button>
				</li>)
		});
		return (
			<>
				<ul>
					{searched}
				</ul>
			</>
		)
	}
}
export default Countries;
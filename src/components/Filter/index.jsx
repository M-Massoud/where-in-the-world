import styles from './Filter.module.css';
function Filter({ allCountries, setMatchedCountries }) {
  const handleChange = event => {
    const selectedRegion = event.target.value;
    if (selectedRegion === 'All') return setMatchedCountries(allCountries);

    const matchedCountriesArray = allCountries.filter(country => {
      return country.region === selectedRegion;
    });

    setMatchedCountries(matchedCountriesArray);
  };

  return (
    <form className={`${styles['filter-form']} shadow`}>
      <select
        name="filter"
        id="filter"
        onChange={handleChange}
        defaultValue="All"
      >
        <option disabled value="All">
          Filter by Region
        </option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        <option value="All">All Countries</option>
      </select>
    </form>
  );
}

export default Filter;

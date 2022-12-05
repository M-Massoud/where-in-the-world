import styles from './Search.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Search({ allCountries, setMatchedCountries, matchedCountries }) {
  const handleFormChange = event => {
    const searchText = event.target.value.toLowerCase();
    if (!searchText) return setMatchedCountries(allCountries);

    const matchedCountriesArray = allCountries.filter(country => {
      return country.name.common.toLowerCase().includes(searchText);
    });
    // console.log('mathced counteries', matchedCountries);
    return setMatchedCountries(matchedCountriesArray);
  };

  return (
    <>
      <form className={`${styles['search-form']} shadow`}>
        <label htmlFor="search-input">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </label>
        <input
          placeholder="Search by a country..."
          type="search"
          name="search-input"
          id="search-input"
          onChange={handleFormChange}
        />
      </form>
    </>
  );
}

export default Search;

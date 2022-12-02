import { useEffect, useState } from 'react';
import Card from '../Card';
import Search from '../Search';
import Filter from '../Filter';
import styles from './Countries.module.css';

function Countries() {
  const [allCountries, setAllCountries] = useState([]);
  const [matchedCountries, setMatchedCountries] = useState([]);

  useEffect(() => {
    const fetchCountriesData = async () => {
      const response = await fetch('https://restcountries.com/v3.1/all');
      console.log(response);

      const data = await response.json();
      console.log(data);
      setAllCountries(data);
      setMatchedCountries(data);
      console.log('countries data', allCountries);
    };

    try {
      fetchCountriesData();
    } catch (error) {
      console.log('error', error);
    }
  }, []);

  return (
    <>
      <div className={styles['filter-search-wrapper']}>
        <Search
          matchedCountries={matchedCountries}
          allCountries={allCountries}
          setMatchedCountries={setMatchedCountries}
        />

        <Filter
          allCountries={allCountries}
          setMatchedCountries={setMatchedCountries}
        />
      </div>

      <main className={styles['countries-section']}>
        {matchedCountries.map(country => (
          <Card
            key={country.name.official}
            flag={country.flags.svg}
            name={country.name.common}
            officialName={country.name.official}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        ))}
      </main>
    </>
  );
}

export default Countries;

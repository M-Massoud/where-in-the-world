import { useEffect, useState } from 'react';
import Card from '../Card';
import Search from '../Search';
import Filter from '../Filter';
import styles from './Countries.module.css';
import Spinner from '../Spinner';

function Countries() {
  const [allCountries, setAllCountries] = useState([]);
  const [matchedCountries, setMatchedCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCountriesData = async () => {
      try {
        const response = await fetch(
          'https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital'
        );
        const data = await response.json();
        setAllCountries(data);
        setMatchedCountries(data);
        setIsLoading(false);
        // console.log('countries data', allCountries);
        // throw new Error('Something Went Wrong!');
      } catch (error) {
        console.log('Error', error);
      }
    };

    fetchCountriesData();
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

      {isLoading ? (
        <Spinner />
      ) : (
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
      )}
    </>
  );
}

export default Countries;

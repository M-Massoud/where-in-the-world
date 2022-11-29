import { useEffect, useState } from 'react';
import Card from '../Card';
import styles from './Countries.module.css';

function Countries() {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    const fetchCountriesData = async () => {
      const response = await fetch('https://restcountries.com/v3.1/all');
      console.log(response);

      const data = await response.json();
      console.log(data);
      setCountriesData(data);
      console.log('countries data', countriesData);
    };

    try {
      fetchCountriesData();
    } catch (error) {
      console.log('error', error);
    }
  }, []);

  return (
    <main className={styles['countries-section']}>
      {countriesData.map(country => (
        <Card
          key={country.name.official}
          flag={country.flags.svg}
          name={country.name.common}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />
      ))}
    </main>
  );
}

export default Countries;

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Country from '../components/Country';
import Spinner from '../components/Spinner';

function CountryPage() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [countryData, setCountryData] = useState({});
  const [countryBorders, setCountryBorders] = useState([]);

  const getBorderCountries = async borders => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha?codes=${borders}&fields=name`
      );
      const data = await response.json();
      setCountryBorders(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${id}?fullText=true`
        );

        const data = await response.json();
        setCountryData(data[0]);

        if (data[0].borders) {
          const stringifiedBorders = data[0].borders.join(',');
          getBorderCountries(stringifiedBorders);
        }

        // throw new Error('Something went wrong!');
      } catch (error) {
        console.log('error', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountryData();
  }, [id]);

  return isLoading ? (
    <Spinner />
  ) : (
    <Country
      name={countryData.name.common}
      flag={countryData.flags.svg}
      countryNames={countryData.name}
      population={countryData.population}
      region={countryData.region}
      subRegion={countryData.subregion}
      capital={countryData.capital}
      topLevelDomain={countryData.tld}
      currencies={countryData.currencies}
      languages={countryData.languages}
      borderCountries={countryBorders}
    />
  );
}

export default CountryPage;

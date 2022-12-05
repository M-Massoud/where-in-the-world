import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Country from '../components/Country';
import Spinner from '../components/Spinner';

function CountryPage() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const [countryData, setCountryData] = useState({});

  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${id}?fullText=true`
      );

      const data = await response.json();
      // console.log(data);
      setCountryData(data[0]);
      setIsLoading(false);
    };

    try {
      fetchCountryData();
    } catch (error) {
      console.log('error', error);
    }
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
      borderCountries={countryData.borders}
    />
  );
}

export default CountryPage;

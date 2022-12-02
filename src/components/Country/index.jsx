import styles from './Country.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Country(props) {
  console.log('country propppppps', props);

  const formatedPopulation = props.population.toLocaleString('en-us');

  const countryCurrency = Object.keys(props.currencies)[0];

  const countryLanguages = Object.values(props.languages);
  console.log(props.languages);
  console.log(countryLanguages);
  const countryNativeLanguage = Object.keys(props.languages).at(-1);
  const countryNativeName =
    props.countryNames.nativeName[countryNativeLanguage].common;

  return (
    <>
      <main className="wrapper">
        <Link className="back-button shadow" to="/">
          <FontAwesomeIcon icon={faArrowLeft} /> Back
        </Link>
        <article className={styles['country-info-wrapper']}>
          <div className={styles['img-wrapper']}>
            <img src={props.flag} alt="" />
          </div>
          <section className={styles['country-info']}>
            <h1>{props.name}</h1>
            <div className={styles['country-info-column']}>
              <p>
                Native Name: <span>{countryNativeName}</span>
              </p>
              <p>
                Population: <span>{formatedPopulation}</span>
              </p>
              <p>
                Region: <span>{props.region}</span>
              </p>
              <p>
                Sub Region: <span>{props.subRegion}</span>
              </p>
              <p>
                Capital: <span>{props.capital}</span>
              </p>
            </div>

            <div className={styles['country-info-column']}>
              <p>
                Top Level Domain: <span>{props.topLevelDomain}</span>
              </p>
              <p>
                Currencies: <span>{countryCurrency}</span>
              </p>
              <p>
                Languages:
                {countryLanguages.map((language, index) => {
                  return (
                    <span key={language}> {(index ? ',' : '') + language}</span>
                  );
                })}
              </p>
            </div>
            <div className={styles['border-countries']}>
              <p>
                Border Countries:
                {props.borderCountries?.map(country => {
                  return <span key={country}>{country}</span>;
                })}
              </p>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}

export default Country;

import { Link } from 'react-router-dom';

import styles from './Card.module.css';

function Card(props) {
  const formatedPopulation = props.population.toLocaleString('en-us');

  return (
    <>
      <article className={`${styles['country-card']} shadow`}>
        <Link to={`country/${props.officialName}`}>
          <img src={props.flag} alt={`${props.name} flag`} />
        </Link>
        <div className={styles['country-info']}>
          <Link
            className={styles['country-name-link']}
            to={`country/${props.officialName}`}
          >
            <h2 className="country-name">{props.name}</h2>
          </Link>

          <p>
            Population: <span>{formatedPopulation}</span>
          </p>
          <p>
            Region: <span>{props.region}</span>
          </p>
          <p>
            Capital: <span>{props.capital}</span>
          </p>
        </div>
      </article>
    </>
  );
}

export default Card;

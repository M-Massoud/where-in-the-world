import styles from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

function Header() {
  return (
    <>
      <header className={`${styles['main-header']} shadow wrapper`}>
        <h1>Where in the world?</h1>
        <div className="switch-theme-wrapper">
          <FontAwesomeIcon icon={faMoon} /> <span>Dark Mode</span>
        </div>
      </header>
    </>
  );
}

export default Header;

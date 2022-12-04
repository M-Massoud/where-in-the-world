import styles from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

const rootEl = document.documentElement;
console.log(rootEl);

function Header() {
  // check if there's a selected theme in the local storage
  if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'light');
  }

  let selectedTheme = localStorage.getItem('theme');
  rootEl.setAttribute('data-theme', selectedTheme);

  const handleSwitchTheme = () => {
    selectedTheme = selectedTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', selectedTheme);
    rootEl.setAttribute('data-theme', selectedTheme);
  };

  return (
    <>
      <header className={`${styles['main-header']} shadow wrapper`}>
        <h1>Where in the world?</h1>
        <button
          onClick={handleSwitchTheme}
          className={`${styles['theme-switcher-wrapper']}`}
        >
          <FontAwesomeIcon
            className={`${styles['switch-theme-icon']}`}
            icon={faMoon}
          />

          <span>Switch Theme</span>
        </button>
      </header>
    </>
  );
}

export default Header;

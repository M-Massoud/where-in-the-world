import React from 'react';
import styles from '../ErrorBoundary/ErrorBoundary.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles['error-container']}>
          <h1 className={styles['error-title']}>Something went wrong!</h1>
          <Link className="back-button shadow" to="/">
            <FontAwesomeIcon icon={faHouse} /> Return To Home Page
          </Link>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

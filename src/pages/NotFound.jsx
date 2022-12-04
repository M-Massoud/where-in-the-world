import styles from './NotFound.module.css';

function NotFound() {
  return (
    <h2 className={styles['not-found']}>
      opps! we can't find the page you're looking for!
    </h2>
  );
}

export default NotFound;

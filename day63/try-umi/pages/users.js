import router from 'umi/router'
import styles from './users.css';

export default function() {
  return (
    <div className={styles.normal}>
      <h1>Page users</h1>
      <button onClick={() => {
        router.goBack()
      }}>go back</button>
    </div>
  );
}

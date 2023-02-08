import { Diaryform } from './Diaryform';
import styles from './Home.module.css';

export default function Home() {
  return (
    <main className={styles.cont}>
      <aside className={styles.side_menu}>
        <Diaryform />
      </aside>
      <ul className={styles.content_list}>Dairy List</ul>
    </main>
  );
}

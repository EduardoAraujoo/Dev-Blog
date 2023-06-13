import styles from './Form.module.scss'

export function Form() {
  return (
    <form action="submit" className={styles.form}>
      <input type="text" placeholder='Search...'
        className={styles.form__inputSearch} />
      <ul>
        <li className={styles.form__filters}>All</li>
        <li className={styles.form__filters}>JavaScript</li>
        <li className={styles.form__filters}>AI</li>
        <li className={styles.form__filters}>Routine</li>
        <li className={styles.form__filters}>Tech</li>
      </ul>
    </form>
  )
}

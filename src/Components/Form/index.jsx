import { useEffect, useState } from 'react'
import styles from './Form.module.scss'
import posts from '../../json/posts.json'
import Posts from '../Posts'

export function Form() {

  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search && search.length >= 3) {
      Posts.filter(post => post.filter === search)
    }
  }, [search])


  return (
    <form
      action="text"
      className={styles.form}>
      <input
        type="text"
        placeholder='Search...'
        value={search}
        onChange={(event) => setSearch(event.target.value)}
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
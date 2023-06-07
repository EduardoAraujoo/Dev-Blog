import styles from './Form.module.scss'

export function Form() {
  return (
    <form action="submit" className={styles.form}>
        <input type="text" placeholder='Search...' 
        className={styles.form__inputSearch}/>
        <ul>
        <input type='checkbox' className={styles.inputCheck}
         placeholder='All'/>
        <input type='checkbox' className={styles.inputCheck}
         placeholder='JavaScript'/>
        <input type='checkbox' className={styles.inputCheck}
         placeholder='AI'/>
        <input type='checkbox' className={styles.inputCheck}
         placeholder='Routine'/>
        <input type='checkbox' className={styles.inputCheck}
         placeholder='Notices'/>
        </ul>
    </form>
  )
}

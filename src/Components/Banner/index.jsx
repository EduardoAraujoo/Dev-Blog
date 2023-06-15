import LinkMain from '../LinkMain'
import styles from './Banner.module.scss'

export default function Banner() {
  return (
    <header className={styles.banner}>
      <section className={styles.section}><h1>Dev Blog</h1></section>
      
      <article className={styles.article}>
        <ul className={styles.article__ul}>
          <li className={styles.article__li}>Home</li>
          <li className={styles.article__li}>
            <LinkMain className={styles.article__li} to="/aboutme">
            About me
            </LinkMain>
            </li>
          <li className={styles.article__li}>Posts</li>
          <li className={styles.article__li}>Contact Me</li>
        </ul>
      </article >

      <section className={styles.section}><div className={styles.section__circle}></div></section>

    </header>
  )
}

 


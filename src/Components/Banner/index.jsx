import styles from './Banner.module.scss'

export default function Banner() {
  return (
    <header className={styles.banner}>
      <section className={styles.section}><h1>Dev Blog</h1></section>

      <article className={styles.article}>
        <nav className={styles.article__nav}>
          <p>Home</p>
          <p>About me</p>
          <p>Posts</p>
          <p>Contact Me</p>
        </nav>
      </article >

      <section className={styles.section}><div className={styles.section__circle}></div></section>

    </header>
  )
}




import LinkMain from '../LinkMain'
import styles from './Banner.module.scss'

export default function Banner() {
  return (
    <header className={styles.banner}>
      <section className={styles.section}><h1>DevBlog</h1></section>


      <nav className={styles.nav}>

        <LinkMain to='/'>
          Home
        </LinkMain>

        <LinkMain to='/aboutme'>
          About me
        </LinkMain>

        <LinkMain>
          Posts
        </LinkMain>

        <LinkMain>
          Contact Me
        </LinkMain>

      </nav>


      <section className={styles.section}><div className={styles.section__circle}></div></section>

    </header>
  )
}




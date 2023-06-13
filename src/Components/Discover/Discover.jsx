import { Form } from '../Form';
import styles from './Discover.module.scss';

export function DiscoverText() {
  return (
    <section className={styles.discover}>
                <article className={styles.discover__text}>
                    <h2>You can Discover
                        <span className={styles.discover__ColoredSpan}> Nice
                        </span>
                        <span className={styles.discover__ColoredSpan}> Articles
                        </span> Here, Explore!
                    </h2>
                    <p>Here I wanna post some things of my life,</p>
                    <p>
                        <span className={styles.discover__emphasis}>
                            Tech notices
                        </span> and my career at a <span className={styles.discover__emphasis}>
                            software Dev
                        </span>.
                    </p>
                </article>
                <Form />
                </section>         
  )
}

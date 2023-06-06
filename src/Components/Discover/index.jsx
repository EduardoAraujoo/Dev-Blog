import styles from './Discover.module.scss'

export default function Discover() {
    return (
        <div className={styles.container}>
            <section className={styles.discover}>
                <article className={styles.discover__text}>
                    <h2>You can Dicover <span>Nice</span> <span>Articles</span> Here, Explore!</h2>
                    <p>Here I wanna post some things of my life,</p>
                    <p> Tech notices and my career at a software Dev </p>
                </article>
            </section>
        </div>
    )
}

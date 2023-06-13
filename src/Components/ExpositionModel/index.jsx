import styles from './ExpositionModel.module.scss';



export default function ExpositionModel({ exposition }) {
    return (
        <section className={styles.content}>
            <h4 className={styles.content__filter}>
                {exposition.filter}
            </h4>
            <h1 className={styles.title}>
                {exposition.title}
            </h1>
            <p className={styles.content__preview}>
                {exposition.preview}
            </p>
        </section>
    )
}

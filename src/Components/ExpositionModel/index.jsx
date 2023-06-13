import styles from './ExpositionModel.module.scss';


export default function ExpositionModel({ filter, title, preview }) {
    return (
        <section className={styles.content}>
            <h4 className={styles.content__filter}>
                {filter}
            </h4>
            <h1 className={styles.title}>
                {title}
            </h1>
            <p className={styles.content__preview}>
                {preview}
            </p>
        </section>
    )
}

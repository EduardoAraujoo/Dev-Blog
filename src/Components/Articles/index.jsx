import ExpositionModel from '../ExpositionModel'
import styles from './Articles.module.scss'

export default function Articles() {
    return (
        <div className={styles.container}>
            <h1 className={styles.container__title}>Articles</h1>
            <section className={styles.article}>
                <ExpositionModel />
            </section>
        </div>
    )
}

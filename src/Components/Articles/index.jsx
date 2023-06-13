import ExpositionModel from '../ExpositionModel';
import styles from './Articles.module.scss';
import exposition from '../../json/exposition.json'


export default function Articles() {
    return (
        <div className={styles.container}>
            <h1 className={styles.container__title}>Articles</h1>

            {exposition.map(exposition =>
                <section
                    className={styles.article}
                    style={{
                        backgroundImage:
                            `url(${exposition.image})`
                    }}>
                    <ExpositionModel key={exposition.id} exposition={exposition} />
                </section>
            )}

        </div>
    )
}

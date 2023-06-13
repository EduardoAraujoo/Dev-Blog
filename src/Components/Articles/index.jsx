import ExpositionModel from '../ExpositionModel';
import styles from './Articles.module.scss';


export default function Articles({ exposition }) {
    return (
        <div className={styles.container}>
            <h1 className={styles.container__title}>Articles</h1>
            <section
                className={styles.article}
                style={{
                    backgroundImage:
                        `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzAqY18oIV3mCxsHEwkxiqY38yqajTF5hmJQ&usqp=CAU')`
                }}>
                <ExpositionModel />
            </section>
        </div>
    )
}

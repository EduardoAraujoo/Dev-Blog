import styles from './Footer.module.scss'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <article className={styles.footer__article}>
                <span className={styles.footer__span}>Created by</span> Eduardo de Oliveira Araujo
            </article>
        </footer>
    )
}

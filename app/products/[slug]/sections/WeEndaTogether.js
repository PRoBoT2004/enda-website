// app/products/[slug]/sections/WeEndaTogether.js
import styles from './WeEndaTogether.module.css'

export default function WeEndaTogether() {
    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <img
                    src="/images/products/we-enda-together.svg"
                    alt="We Enda Together"
                    className={styles.image}
                />
            </div>
        </section>
    )
}
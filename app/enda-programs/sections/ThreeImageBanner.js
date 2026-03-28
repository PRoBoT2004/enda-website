// app/enda-programs/sections/ThreeImageBanner.js
import styles from './ThreeImageBanner.module.css'

export default function ThreeImageBanner() {
    return (
        <section className={styles.section}>
            <div className={styles.imageWrap}>
                <img src="/images/enda-programs/banner-1.png" alt="" className={styles.image} aria-hidden="true" />
            </div>
            <div className={styles.imageWrap}>
                <img src="/images/enda-programs/banner-2.png" alt="" className={styles.image} aria-hidden="true" />
            </div>
            <div className={styles.imageWrap}>
                <img src="/images/enda-programs/banner-3.png" alt="" className={styles.image} aria-hidden="true" />
            </div>
        </section>
    )
}
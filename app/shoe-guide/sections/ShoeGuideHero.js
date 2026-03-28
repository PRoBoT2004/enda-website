// app/shoe-guide/sections/ShoeGuideHero.js
import styles from './ShoeGuideHero.module.css'

export default function ShoeGuideHero() {
    return (
        <div className={styles.stickyWrapper}>
            <div className={styles.stickyImage}>
                <img
                    src="/images/shoe-guide/hero.png"
                    alt="Shoe Guide"
                    className={styles.image}
                />
            </div>
            <div className={styles.textBlock}>
                <img
                    src="/images/shoe-guide/spear.svg"
                    alt=""
                    className={styles.spear}
                    aria-hidden="true"
                />
                <div className={styles.textContent}>
                    <h1 className={styles.heading}>
                        Find Your Perfect Training Shoe with Enda
                    </h1>
                    <p className={styles.subheading}>
                        Performance-Driven, Comfortable, and Sustainable
                    </p>
                    <p className={styles.body}>
                        At <span className={styles.lowercase}>enda</span>, we craft shoes that meet the demands of serious runners. Whether you're pushing for speed, endurance, or conquering trails, our shoes are designed to maximize performance, comfort, and sustainability. As a B-Corp and Climate Neutral company, every purchase helps create a positive impact.
                    </p>
                    <a href="/collections" className={styles.cta}>
                        Browse Our Shoes
                    </a>
                </div>
            </div>
        </div>
    )
}
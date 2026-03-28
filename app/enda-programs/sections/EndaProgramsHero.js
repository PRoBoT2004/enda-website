// app/enda-programs/sections/EndaProgramsHero.js
import styles from './EndaProgramsHero.module.css'

export default function EndaProgramsHero() {
    return (
        <div className={styles.stickyWrapper}>
            <div className={styles.stickyImage}>
                <img
                    src="/images/enda-programs/hero.png"
                    alt="Enda Programs"
                    className={styles.image}
                />
            </div>
            <div className={styles.textBlock}>
                <img
                    src="/images/enda-programs/spear.svg"
                    alt=""
                    className={styles.spear}
                    aria-hidden="true"
                />
                <div className={styles.textContent}>
                    <h1 className={styles.heading}>
                        Join The{' '}
                        <span className={styles.lowercase}>enda</span>{' '}
                        Movement
                    </h1>
                    <p className={styles.subheading}>
                        Train, Compete, and Grow Together
                    </p>
                    <p className={styles.body}>
                        At <span className={styles.lowercase}>enda</span>, we believe every runner has greatness within them. Whether you're preparing for your first race or striving for your next personal best, our{' '}
                        <strong>enda Programs</strong> are designed to guide you every step of the way.
                    </p>
                    <a href="#programs" className={styles.cta}>
                        Explore Programs
                    </a>
                </div>
            </div>
        </div>
    )
}
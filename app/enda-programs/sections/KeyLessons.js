// app/enda-programs/sections/KeyLessons.js
import styles from './KeyLessons.module.css'

export default function KeyLessons() {
    return (
        <section className={styles.section}>
            <p className={styles.label}>Key Lessons from Kenyan Athletes:</p>

            <div className={styles.grid}>
                {/* Left panel */}
                <div className={styles.panel}>
                    <img
                        src="/images/enda-programs/key-lessons-buddy.png"
                        alt="Two runners in starting position on a track"
                        className={styles.image}
                    />
                    <div className={styles.overlay} />
                    <div className={styles.caption}>
                        <span className={styles.captionTitle}>Find a Running Buddy</span>
                        <span className={styles.captionBody}>
                            Run with a friend to stay motivated and improve your pace.
                        </span>
                    </div>
                </div>

                {/* Right panel */}
                <div className={styles.panel}>
                    <img
                        src="/images/enda-programs/key-lessons-training.png"
                        alt="Runner sprinting on a city street"
                        className={styles.image}
                    />
                    <div className={styles.overlay} />
                    <div className={styles.caption}>
                        <span className={styles.captionTitle}>Vary Your Training</span>
                        <span className={styles.captionBody}>
                            Incorporate a mix of easy runs, speed work, and long runs to build endurance and strength.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}
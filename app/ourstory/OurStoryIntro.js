import styles from './OurStoryIntro.module.css'

export default function OurStoryIntro() {
    return (
        <div className={styles.introSection}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <span>
                        <span className={styles.boldText}>
                            MORE THAN A BRAND, ENDA IS A MOVEMENT.{' '}
                        </span>
                        <span className={styles.lightText}>
                            Rooted in kenya’s running excellence, we create performance footware that
                            embodies the sprit of resilience, innovation and social impact. every pair
                            carries the energy of world-class athletes and the promise of sustainable
                            craftmanship
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}

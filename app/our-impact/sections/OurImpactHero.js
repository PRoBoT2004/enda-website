// app/our-impact/sections/OurImpactHero.js
import styles from './OurImpactHero.module.css'

export default function OurImpactHero() {
    return (
        <section className={styles.section}>
            <video
                src="/videos/our-impact/hero.mp4"
                autoPlay
                muted
                loop
                playsInline
                className={styles.video}
            />
        </section>
    )
}
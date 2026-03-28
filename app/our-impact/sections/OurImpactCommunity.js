// app/our-impact/sections/OurImpactCommunity.js
import styles from './OurImpactCommunity.module.css'

export default function OurImpactCommunity() {
    return (
        <section className={styles.section}>
            <img
                src="/images/our-impact/community.png"
                alt="Empowering Kenyan Communities"
                className={styles.image}
            />
            <div className={styles.overlay}>
                <h2 className={styles.heading}>Empowering Kenyan Communities</h2>
                <p className={styles.sub}>We <span className={styles.lowercase}>enda</span> Together</p>
            </div>
        </section>
    )
}
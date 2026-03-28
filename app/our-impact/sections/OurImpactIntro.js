// app/our-impact/sections/OurImpactIntro.js
import styles from './OurImpactIntro.module.css'

export default function OurImpactIntro() {
    return (
        <div className={styles.stickyWrapper}>
            <div className={styles.stickyImage}>
                <img
                    src="/images/our-impact/intro.png"
                    alt="Our Impact"
                    className={styles.image}
                />
            </div>
            <div className={styles.textBlock}>
                <img
                    src="/images/our-impact/spear.svg"
                    alt=""
                    className={styles.spear}
                    aria-hidden="true"
                />
                <div className={styles.textContent}>
                    <h2 className={styles.heading}>
                        Fueling Economic Growth in Kenya
                    </h2>
                    <p className={styles.subheading}>
                        Empowering communities through job creation, skills development, and long-term economic opportunities.
                    </p>
                    <p className={styles.body}>
                        At <span className={styles.lowercase}>enda</span>, we believe that creating jobs is just the beginning. By developing innovative products that have never been made in Kenya before, we aim to create high-skill positions that offer higher wages and better opportunities for local communities.
                        <br /><br />
                        <strong>We focus on building sustainable industries and expanding the local supply chain, ensuring that economic growth benefits everyone.</strong>
                    </p>
                </div>
            </div>
        </div>
    )
}
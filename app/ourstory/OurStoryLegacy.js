// OurStoryLegacy.js
import styles from './OurStoryLegacy.module.css'

export default function OurStoryLegacy() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.titleColumn}>
                    <h2 className={styles.title}>
                        KEEPING THE LEGACY<br />
                        ALIVE – OUR EVOLUTION
                    </h2>
                </div>
                <div className={styles.contentColumn}>
                    <p className={styles.paragraph}>
                        In January 2024, Enda took a bold step forward by becoming a subsidiary of NVH Studios, a global fashion and lifestyle holding company dedicated to celebrating Africa's creative and sporting contributions on a global scale.
                    </p>
                    <p className={styles.paragraph}>
                        Led by Nana Baffour, Executive Chairman, Co-Founder & Chief Creative Officer of NVH Studios, Enda continues its mission to push the boundaries of performance footwear while remaining deeply committed to sustainability, ethical craftsmanship, and innovation.
                    </p>
                    <p className={styles.paragraph}>
                        This partnership enables Enda to expand globally, bringing the Kenyan running spirit to more athletes and fitness enthusiasts than ever before.
                    </p>
                </div>
            </div>
        </section>
    )
}
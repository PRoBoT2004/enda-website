// app/our-impact/sections/OurImpactCraftsmanship.js
import styles from './OurImpactCraftsmanship.module.css'

const columns = [
    {
        icon: '/images/our-impact/icon-community.svg',
        title: 'Community Partnerships',
        body: 'We collaborate with local experts and the enda global community to identify high-impact projects that can drive sustainable change.',
    },
    {
        icon: '/images/our-impact/icon-focus.svg',
        title: 'Our Focus Areas',
        body: "Our contributions focus on education, healthcare access, infrastructure, and youth sports programs—all of which are integral to Kenya's long-term growth.",
    },
    {
        icon: '/images/our-impact/icon-empowering.svg',
        title: 'Empowering Communities',
        body: 'With the spirit of Harambee, we are committed to engaging both local and global communities, ensuring that change is driven by collective action.',
    },
]

export default function OurImpactCraftsmanship() {
    return (
        <section className={styles.section}>
            <div className={styles.topRow}>
                <div className={styles.leftCol}>
                    <h2 className={styles.heading}>
                        Shaping Global Perception of Kenyan Craftsmanship
                    </h2>
                </div>
                <div className={styles.rightCol}>
                    <p className={styles.subheading}>
                        Transforming the world's view of Kenya—from local excellence to global recognition.
                    </p>
                    <div className={styles.imageAndColumns}>
                        <div className={styles.imageWrap}>
                            <img
                                src="/images/our-impact/craftsmanship.png"
                                alt="Kenyan runner in New York"
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.bottomRow}>
                            {columns.map((col) => (
                                <div key={col.title} className={styles.col}>
                                    <img src={col.icon} alt="" className={styles.icon} aria-hidden="true" />
                                    <p className={styles.colTitle}>
                                        {col.title} <img src="/images/our-impact/vector.svg" alt="" className={styles.vectorArrow} />
                                    </p>
                                    <p className={styles.colBody}>{col.body}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
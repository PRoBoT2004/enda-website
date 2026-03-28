// app/enda-programs/sections/BecomeAmbassador.js
import styles from './BecomeAmbassador.module.css'

const benefits = [
    {
        id: 'gear',
        vector: '/images/enda-programs/vector-gear.svg',
        title: 'Exclusive gear',
        body: 'and early access to new product releases.',
    },
    {
        id: 'collab',
        vector: '/images/enda-programs/vector-collab.svg',
        title: 'Collaboration',
        body: "with enda's global team and community.",
    },
    {
        id: 'inspiration',
        vector: '/images/enda-programs/vector-inspiration.svg',
        title: 'Inspiration',
        body: 'to your followers through personal stories and achievements.',
    },
]

export default function BecomeAmbassador() {
    return (
        <section className={styles.section}>
            {/* Left — big heading */}
            <div className={styles.left}>
                <h2 className={styles.heading}>
                    Become an{' '}
                    <span className={styles.block}>enda Ambassador</span>
                </h2>
            </div>

            {/* Right — content */}
            <div className={styles.right}>
                <p className={styles.subheading}>Inspire, Lead, and Grow</p>
                <p className={styles.body}>
                    As an <strong>enda Ambassador</strong>, you represent our mission to inspire
                    greatness through running. You'll be part of a global movement,
                    sharing the power of Kenyan excellence while receiving exclusive gear
                    and opportunities to collaborate with the brand.
                </p>

                <p className={styles.benefitsLabel}>
                    Benefits of Becoming an Ambassador:
                </p>

                <div className={styles.benefits}>
                    {benefits.map((b) => (
                        <div key={b.id} className={styles.benefitItem}>
                            <img
                                src={b.vector}
                                alt=""
                                className={styles.vector}
                                aria-hidden="true"
                            />
                            <p className={styles.benefitTitle}>
                                {b.title}
                                <img src="/images/enda-programs/vector.svg" alt="" aria-hidden="true" className={styles.vectorArrow} />
                            </p>
                            <p className={styles.benefitBody}>{b.body}</p>
                        </div>
                    ))}
                </div>

                <a href="/ambassador" className={styles.cta}>
                    Become an enda Ambassador
                </a>
            </div>
        </section>
    )
}
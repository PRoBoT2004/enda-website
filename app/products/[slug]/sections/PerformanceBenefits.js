// app/products/[slug]/sections/PerformanceBenefits.js
import styles from './PerformanceBenefits.module.css'

export default function PerformanceBenefits({ benefits }) {
    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>Performance Benefits</h2>

            <div className={styles.right}>
                <div className={styles.specs}>
                    <p className={styles.spec}>Weight: {benefits.weight} – optimally balanced for speed and stability.</p>
                    <p className={styles.spec}>Ideal For: {benefits.idealFor}</p>
                </div>

                <div className={styles.stats}>
                    {benefits.stats.map((s) => (
                        <div key={s.label} className={styles.statItem}>
                            <img src={s.icon} alt="" className={styles.icon} aria-hidden="true" />
                            <p className={styles.statLabel}>{s.label}</p>
                            <p className={styles.statValue}>{s.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
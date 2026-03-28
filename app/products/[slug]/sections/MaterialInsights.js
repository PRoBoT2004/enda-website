// app/products/[slug]/sections/MaterialInsights.js
import styles from './MaterialInsights.module.css'

export default function MaterialInsights({ insights }) {
    return (
        <section className={styles.section}>
            <div className={styles.grid}>
                {insights.map((item) => (
                    <div key={item.title} className={styles.col}>
                        <div className={styles.imageWrap}>
                            <img
                                src={item.image}
                                alt={item.title}
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.text}>
                            <p className={styles.title}>{item.title}</p>
                            <p className={styles.body}>{item.body}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
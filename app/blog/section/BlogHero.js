// app/blog/sections/BlogHero.js
import styles from './BlogHero.module.css'

export default function BlogHero() {
    return (
        <section className={styles.section}>
            <h1 className={styles.heading}>Enda Blog</h1>
            <p className={styles.subheading}>Stories, Insights, & Inspiration</p>
            <p className={styles.body}>
                Dive into our stories of <strong>resilience, culture, and the world of running.</strong> From Kenyan
                athletics to the journey of our gear, find the latest updates and insights here.
            </p>
        </section>
    )
}
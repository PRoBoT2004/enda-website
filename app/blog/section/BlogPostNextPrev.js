// app/blog/[slug]/sections/BlogPostNextPrev.js
import styles from './BlogPostNextPrev.module.css'

export default function BlogPostNextPrev({ prevPost, nextPost }) {
    return (
        <aside className={styles.sidebar}>
            {prevPost && (
                <div className={styles.navBlock}>
                    <p className={styles.navLabel}>← Previous</p>
                    <a href={`/blog/${prevPost.slug}`} className={styles.navCard}>
                        <div className={styles.navImageWrap}>
                            <img src={prevPost.image} alt={prevPost.title} className={styles.navImage} />
                        </div>
                        <p className={styles.navTitle}>{prevPost.title}</p>
                    </a>
                </div>
            )}

            {nextPost && (
                <div className={styles.navBlock}>
                    <p className={styles.navLabel}>Next →</p>
                    <a href={`/blog/${nextPost.slug}`} className={styles.navCard}>
                        <div className={styles.navImageWrap}>
                            <img src={nextPost.image} alt={nextPost.title} className={styles.navImage} />
                        </div>
                        <p className={styles.navTitle}>{nextPost.title}</p>
                    </a>
                </div>
            )}
        </aside>
    )
}
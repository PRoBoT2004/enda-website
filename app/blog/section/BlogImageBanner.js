// app/blog/sections/BlogImageBanner.js
import styles from './BlogImageBanner.module.css'

const images = [
    '/images/blog/banner-1.png',
    '/images/blog/banner-2.png',
    '/images/blog/banner-3.png',
    '/images/blog/banner-4.png',
    '/images/blog/banner-5.png',
    '/images/blog/banner-6.png',
]

export default function BlogImageBanner() {
    return (
        <section className={styles.section}>
            <div className={styles.track}>
                <div className={styles.row}>
                    {images.map((src, i) => (
                        <div key={`a-${i}`} className={styles.imgWrap}>
                            <img src={src} alt="" aria-hidden="true" className={styles.image} />
                        </div>
                    ))}
                    {images.map((src, i) => (
                        <div key={`b-${i}`} className={styles.imgWrap}>
                            <img src={src} alt="" aria-hidden="true" className={styles.image} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
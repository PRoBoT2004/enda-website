// app/products/[slug]/sections/CustomerImages.js
import styles from './CustomerImages.module.css'

const images = [
    '/images/products/customer-1.png',
    '/images/products/customer-2.png',
    '/images/products/customer-3.png',
    '/images/products/customer-4.png',
    '/images/products/customer-5.png',
    '/images/products/customer-6.png',
    '/images/products/customer-7.png',
    '/images/products/customer-8.png',
    '/images/products/customer-9.png',
    '/images/products/customer-10.png',
]

export default function CustomerImages() {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Customer Images</h2>
            <div className={styles.track}>
                {/* Two sets for seamless infinite loop */}
                <div className={styles.row}>
                    {images.map((src, i) => (
                        <div key={`a-${i}`} className={styles.imgWrap}>
                            <img src={src} alt={`Customer photo ${i + 1}`} className={styles.image} />
                        </div>
                    ))}
                    {images.map((src, i) => (
                        <div key={`b-${i}`} className={styles.imgWrap}>
                            <img src={src} alt={`Customer photo ${i + 1}`} className={styles.image} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
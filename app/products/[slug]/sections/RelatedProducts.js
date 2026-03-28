// app/products/[slug]/sections/RelatedProducts.js
import styles from './RelatedProducts.module.css'

export default function RelatedProducts({ products }) {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.title}>You May Also Like</h2>
                <a href="/collections" className={styles.shopAll}>Shop All</a>
            </div>

            <div className={styles.grid}>
                {products.map((p) => (
                    <a key={p.slug} href={`/products/${p.slug}`} className={styles.card}>
                        <div className={styles.imageWrap}>
                            {p.badge && <span className={styles.badge}>{p.badge}</span>}
                            <img src={p.image} alt={p.name} className={styles.image} />
                        </div>
                        <div className={styles.info}>
                            <p className={styles.name}>{p.name}</p>
                            <div className={styles.priceWrap}>
                                {p.originalPrice && (
                                    <span className={styles.originalPrice}>${p.originalPrice}.00</span>
                                )}
                                <span className={styles.price}>${p.price}.00</span>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}
// app/shoe-guide/sections/ShoeGuideIten.js
import styles from './ShoeGuideIten.module.css'

const products = [
    {
        img: '/images/shoe-guide/iten-secretary-bird.png',
        name: 'Iten Men - Secretary Bird',
    },
    {
        img: '/images/shoe-guide/iten-somali-black.png',
        name: 'Iten Men - Somali (Black Sole)',
    },
    {
        img: '/images/shoe-guide/iten-samburu.png',
        name: 'Iten Men - Samburu',
    },
    {
        img: '/images/shoe-guide/iten-somali-white.png',
        name: 'Iten Men - Somali (White Sole)',
    },
]

export default function ShoeGuideIten() {
    return (
        <section className={styles.section}>

            {/* Top row — title + description */}
            <div className={styles.topRow}>
                <div className={styles.titleCol}>
                    <h2 className={styles.title}>Iten</h2>
                    <p className={styles.titleSub}>Engineered for Speed</p>
                </div>
                <div className={styles.descCol}>
                    <p className={styles.desc}>
                        Pronounced as "E-Ten." Iten is the training epicenter of many legendary Kenyan runners. It is a small town on the western edge of The Great Rift famously known as "The Home of Champions!"
                    </p>
                    <p className={styles.desc}>
                        Iten is a lightweight workout shoe ideal for the gym or HIIT exercises and great for runners during speed workouts like tempo runs, interval and fartleks.
                    </p>
                </div>
            </div>

            {/* Diagram */}
            <div className={styles.diagram}>
                <img
                    src="/images/shoe-guide/iten-diagram.svg"
                    alt="Iten shoe anatomy diagram"
                    className={styles.diagramImg}
                />
            </div>

            {/* Shop row */}
            <div className={styles.shopRow}>
                <div className={styles.labelCol}>
                    <a href="/collections/iten" className={styles.shopLink}>Shop Iten</a>
                </div>
                <div className={styles.productsRow}>
                    {products.map((p) => (
                        <div key={p.name} className={styles.product}>
                            <div className={styles.imgWrap}>
                                <img src={p.img} alt={p.name} className={styles.img} />
                            </div>
                            <p className={styles.name}>{p.name}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}
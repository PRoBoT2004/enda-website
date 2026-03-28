// app/shoe-guide/sections/ShoeGuideLapatet.js
import styles from './ShoeGuideLapatet.module.css'

const products = [
    {
        img: '/images/shoe-guide/lapatet-women-blue.png',
        name: 'New Lapatet Women Blue',
    },
    {
        img: '/images/shoe-guide/lapatet-men-white.png',
        name: 'New Lapatet Men White',
    },
    {
        img: '/images/shoe-guide/lapatet-men-white.png',
        name: 'New Lapatet Men White',
    },
    {
        img: '/images/shoe-guide/lapatet-women-blue.png',
        name: 'New Lapatet Women Blue',
    },
]

export default function ShoeGuideLapatet() {
    return (
        <section className={styles.section}>

            <div className={styles.topRow}>
                <div className={styles.titleCol}>
                    <h2 className={styles.title}>Lapatet</h2>
                    <p className={styles.titleSub}>Engineered for Everyday Running</p>
                </div>
                <div className={styles.descCol}>
                    <p className={styles.desc}>
                        Lapatet' means 'running', 'to run' or 'racing' in Kalenjin – a diverse ethnic community in Kenya that is home to many renowned Kenyan runners.
                    </p>
                    <p className={styles.desc}>
                        These lightweight daily trainers are best-in-class for everyday runs and are perfect for both long runs and easy recovery days. Lapatets are designed to last and support longer runs, with a focus on overall comfort and support. Built to withstand miles, they offer the durability and cushioning needed for your everyday running routine.
                    </p>
                </div>
            </div>

            <div className={styles.diagram}>
                <img
                    src="/images/shoe-guide/lapatet-diagram.svg"
                    alt="Lapatet shoe anatomy diagram"
                    className={styles.diagramImg}
                />
            </div>

            <div className={styles.shopRow}>
                <div className={styles.labelCol}>
                    <a href="/collections/lapatet" className={styles.shopLink}>Shop Lapatet</a>
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
// app/shoe-guide/sections/ShoeGuideTaiJogger.js
import styles from './ShoeGuideTaiJogger.module.css'

const products = [
    {
        img: '/images/shoe-guide/taijogger-men-green.png',
        name: 'Tai Jogger - Men - Green',
    },
    {
        img: '/images/shoe-guide/taijogger-men-white.png',
        name: 'Tai Jogger - Men - White',
    },
    {
        img: '/images/shoe-guide/taijogger-women-green.png',
        name: 'Tai Jogger Women Green',
    },
    {
        img: '/images/shoe-guide/taijogger-women-white.png',
        name: 'Tai Jogger Women White',
    },
]

export default function ShoeGuideTaiJogger() {
    return (
        <section className={styles.section}>

            <div className={styles.topRow}>
                <div className={styles.titleCol}>
                    <h2 className={styles.title}>Tai Jogger</h2>
                    <p className={styles.titleSub}>Sed ut perspiciatis unde</p>
                </div>
                <div className={styles.descCol}>
                    <p className={styles.desc}>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                    <p className={styles.desc}>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                </div>
            </div>

            <div className={styles.diagram}>
                <img
                    src="/images/shoe-guide/taijogger-diagram.svg"
                    alt="Tai Jogger shoe anatomy diagram"
                    className={styles.diagramImg}
                />
            </div>

            <div className={styles.shopRow}>
                <div className={styles.labelCol}>
                    <a href="/collections/tai-jogger" className={styles.shopLink}>Shop Tai Jogger</a>
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
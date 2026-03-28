// app/shoe-guide/sections/ShoeGuidekoobiFora.js
import styles from './ShoeGuideKoobiFora.module.css'

const products = [
    {
        img: '/images/shoe-guide/koobifora-women-blue.png',
        name: 'Koobi Fora - Women - Superb Starling (Blue Sole)',
    },
    {
        img: '/images/shoe-guide/koobifora-men-pink.png',
        name: 'Koobi Fora - Men - Flamingo (Pink Sole)',
    },
    {
        img: '/images/shoe-guide/koobifora-men-black.png',
        name: 'Koobi Fora - Men - Flamingo (Black Sole)',
    },
    {
        img: '/images/shoe-guide/koobifora-women-pink.png',
        name: 'Koobi Fora - Women - Flamingo (Pink Sole)',
    },
]

export default function ShoeGuideKoobiFora() {
    return (
        <section className={styles.section}>

            <div className={styles.topRow}>
                <div className={styles.titleCol}>
                    <h2 className={styles.title}>Koobi Fora</h2>
                    <p className={styles.titleSub}>Trail-Ready Performance</p>
                </div>
                <div className={styles.descCol}>
                    <p className={styles.desc}>
                        "Koo-bee For-ah" is an important archaeological site in Kenya where the first hominid footprints are found. This nimble trail shoe allows you to dance over any terrain.
                    </p>
                    <p className={styles.desc}>
                        Koobi Fora shoes have solid traction, making them perfect for door-to-trail adventures. They feature a road-friendly lug-profile, which makes them fun on tarmac while providing exceptional performance on rough trails.
                    </p>
                </div>
            </div>

            <div className={styles.diagram}>
                <img
                    src="/images/shoe-guide/koobifora-diagram.svg"
                    alt="Koobi Fora shoe anatomy diagram"
                    className={styles.diagramImg}
                />
            </div>

            <div className={styles.shopRow}>
                <div className={styles.labelCol}>
                    <a href="/collections/koobi-fora" className={styles.shopLink}>Shop Koobi Fora</a>
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
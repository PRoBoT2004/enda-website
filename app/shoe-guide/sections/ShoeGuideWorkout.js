// app/shoe-guide/sections/ShoeGuideWorkout.js
import styles from './ShoeGuideWorkout.module.css'

const cards = [
    {
        img: '/images/shoe-guide/workout-iten.png',
        title: 'Push Your Limits with the Iten',
        body: 'The Iten is designed for speed workouts like tempo runs, interval training, and fartleks. Lightweight, responsive, and built for agility, the Iten is favored by elite Kenyan runners for speed-focused sessions.',
        cta: 'Shop the Iten',
        href: '/collections/iten',
    },
    {
        img: '/images/shoe-guide/workout-easy.png',
        title: 'For Easy Runs – Iten or Lapatet',
        body: 'Iten is best for runners who prefer a minimalist, close-to-ground feel for shorter, relaxed runs.\n\nLapatet is ideal for runners needing extra cushioning and support during easy, recovery runs.',
        cta: 'Shop Now',
        href: '/collections',
    },
    {
        img: '/images/shoe-guide/workout-lapatet.png',
        title: 'Conquer Long Miles with Lapatet',
        body: "The Lapatet is designed for high-mileage training, providing extra cushioning to keep your legs fresh and reduce impact stress over long distances. Perfect for long runs that make up up to 50% of Kenyan runners' training plans.",
        cta: 'Shop the Lapatet',
        href: '/collections/lapatet',
    },
    {
        img: '/images/shoe-guide/workout-lapatet2.png',
        title: 'Conquer Long Miles with Lapatet',
        body: "The Lapatet is designed for high-mileage training, providing extra cushioning to keep your legs fresh and reduce impact stress over long distances. Perfect for long runs that make up up to 50% of Kenyan runners' training plans.",
        cta: 'Shop the Lapatet',
        href: '/collections/lapatet',
    },
]

export default function ShoeGuideWorkout() {
    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>Choose the Right Shoe for Every Workout</h2>
            <div className={styles.track}>
                {cards.map((card, i) => (
                    <div key={i} className={styles.card}>
                        <div className={styles.imgWrap}>
                            <img src={card.img} alt={card.title} className={styles.img} />
                        </div>
                        <div className={styles.cardContent}>
                            <p className={styles.cardTitle}>{card.title}</p>
                            <p className={styles.cardBody}>{card.body}</p>
                            <a href={card.href} className={styles.cardCta}>{card.cta}</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
// app/our-impact/sections/OurImpactCards.js
'use client'
import { useState } from 'react'
import styles from './OurImpactCards.module.css'

const cards = [
    {
        img: '/images/our-impact/job-creation.png',
        title: 'Job Creation',
        body: 'We provide high-skill, sustainable jobs that lead to career development and increased wages.',
    },
    {
        img: '/images/our-impact/economic-growth.png',
        title: 'Economic Growth',
        body: "By expanding the local supply chain, we contribute to Kenya's long-term economic stability.",
    },
    {
        img: '/images/our-impact/measuring-impact.png',
        title: 'Measuring Impact',
        body: 'We track the percentage of costs directed towards wages in Kenya to measure our contribution to the local economy.',
    },
]

export default function OurImpactCards() {
    const [hovered, setHovered] = useState(null)

    return (
        <section className={styles.section}>
            {cards.map((card, i) => (
                <div
                    key={card.title}
                    className={`${styles.card} ${hovered === i ? styles.cardHovered : ''} ${hovered !== null && hovered !== i ? styles.cardDimmed : ''}`}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                >
                    <img src={card.img} alt={card.title} className={styles.img} />
                    <div className={styles.cardOverlay}>
                        <p className={styles.cardTitle}>{card.title}</p>
                        <p className={styles.cardBody}>{card.body}</p>
                        <span className={styles.cardCta}>Learn More →</span>
                    </div>
                </div>
            ))}
        </section>
    )
}
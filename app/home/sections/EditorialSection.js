// app/home/sections/EditorialSection.js
'use client'
import { useEffect, useRef } from 'react'
import styles from './EditorialSection.module.css'

const cards = [
    {
        image: '/images/editorial/editorial-1.png',
        category: 'Our Story',
        title: 'Born in Kenya, Enda blends African heritage with world-class performance',
        href: '/ourstory',
    },
    {
        image: '/images/editorial/editorial-2.png',
        category: 'Our Community, Our Champions',
        title: 'Enda collaborates with world-class athletes, communities to celebrate...',
        href: '/community',
    },
    {
        image: '/images/editorial/editorial-3.png',
        category: 'Journal',
        title: "Kenya's Journey to Self-Rule: A Triumph of Freedom and National...",
        href: '/journal',
    },
]

export default function EditorialSection() {
    const cardRefs = useRef([])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visible)
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.1 }
        )
        cardRefs.current.forEach((el) => { if (el) observer.observe(el) })
        return () => observer.disconnect()
    }, [])

    return (
        <section className={styles.editorialSection}>
            <div className={styles.grid}>
                {cards.map((card, i) => (
                    <a
                        key={i}
                        href={card.href}
                        className={styles.card}
                        ref={(el) => (cardRefs.current[i] = el)}
                        style={{ transitionDelay: `${i * 0.12}s` }}
                    >
                        {/* Full-height image */}
                        <div className={styles.imageWrapper}>
                            <img
                                src={card.image}
                                alt={card.category}
                                className={styles.image}
                            />
                            {/* Bottom gradient */}
                            <div className={styles.gradient} />
                        </div>

                        {/* Text pinned to bottom */}
                        <div className={styles.textBlock}>
                            <span className={styles.category}>{card.category}</span>
                            <p className={styles.title}>{card.title}</p>
                            <span className={styles.readMore}>Read More</span>
                        </div>

                    </a>
                ))}
            </div>
        </section>
    )
}
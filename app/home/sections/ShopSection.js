'use client'
import { useEffect, useRef } from 'react'
import styles from './ShopSection.module.css'
import Image from 'next/image'

const categories = [
    {
        title: 'Shop Trainer',
        description: 'Comfort meets performance—perfect for your daily runs and training sessions.',
        image: '/images/shop/trainer.png',
        href: '/trainer',
    },
    {
        title: 'Shop Jogging',
        description: 'Comfort meets performance—perfect for your daily runs and training sessions.',
        image: '/images/shop/jogging.png',
        href: '/jogging',
    },
    {
        title: 'Shop Running',
        description: 'Comfort meets performance—perfect for your daily runs and training sessions.',
        image: '/images/shop/running.png',
        href: '/running',
    },
]

export default function ShopSection() {
    const colRefs = useRef([])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visible)
                        observer.unobserve(entry.target) // fire once only
                    }
                })
            },
            { threshold: 0.15 }
        )

        colRefs.current.forEach((el) => {
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [])

    return (
        <section className={styles.shopSection}>
            <div className={styles.grid}>
                {/* Spacer — pushes first card away from left edge on mobile */}
                <div className={styles.scrollSpacer} aria-hidden="true" />
                {categories.map((cat, i) => (
                    <div
                        key={cat.title}
                        className={styles.column}
                        ref={(el) => (colRefs.current[i] = el)}
                        style={{ transitionDelay: `${i * 0.15}s` }}
                    >
                        {/* Header */}
                        <div className={styles.columnHeader}>
                            <h2 className={styles.title}>{cat.title}</h2>
                            <a href={cat.href} className={styles.shopAllLink}>Shop All</a>
                        </div>

                        {/* Image */}
                        <div className={styles.imageWrapper}>
                            <Image
                                src={cat.image}
                                alt={cat.title}
                                fill
                                className={styles.image}
                                sizes="(max-width: 768px) 80vw, 33vw"
                            />
                        </div>

                        {/* Description */}
                        <p className={styles.description}>{cat.description}</p>
                    </div>
                ))}
                {/* Spacer — gives last card room on the right */}
                <div className={styles.scrollSpacer} aria-hidden="true" />
            </div>
        </section>
    )
}
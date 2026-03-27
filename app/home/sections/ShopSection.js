// app/home/sections/ShopSection.js
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
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.12 }
        )
        colRefs.current.forEach((el) => { if (el) observer.observe(el) })
        return () => observer.disconnect()
    }, [])

    return (
        <section className={styles.shopSection}>

            {/* Grid */}
            <div className={styles.grid}>
                <div className={styles.scrollSpacer} aria-hidden="true" />
                {categories.map((cat, i) => (
                    <a
                        key={cat.title}
                        href={cat.href}
                        className={styles.column}
                        ref={(el) => (colRefs.current[i] = el)}
                        style={{ transitionDelay: `${i * 0.15}s` }}
                    >
                        <h2 className={styles.title}>{cat.title}</h2>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={cat.image}
                                alt={cat.title}
                                fill
                                className={styles.image}
                                sizes="(max-width: 768px) 80vw, 33vw"
                            />
                        </div>
                        <p className={styles.description}>{cat.description}</p>
                    </a>
                ))}
                <div className={styles.scrollSpacer} aria-hidden="true" />
            </div>

            {/* Shop All CTA — centered, same style as hero Explore Collection */}
            <div className={styles.shopAllWrapper}>
                <a href="/collection" className={styles.shopAllBtn}>
                    <span className={styles.shopAllText}>Shop All</span>
                </a>
            </div>

        </section>
    )
}
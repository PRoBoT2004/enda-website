// app/home/sections/FeaturedSection.js
'use client'
import { useState, useEffect, useRef } from 'react'
import styles from './FeaturedSection.module.css'

const products = [
    {
        lifestyle: '/images/featured/p1i1.png',
        shoe: '/images/featured/p1.png',
        name: 'New Lapatet Women Blue',
        original: '$120.00',
        sale: '$70.00',
        description: 'Made to move with you, offering comfort and flexibility all day.',
    },
    {
        lifestyle: '/images/featured/p2i2.png',
        shoe: '/images/featured/p2.png',
        name: 'Iten Men Black',
        original: '$130.00',
        sale: '$85.00',
        description: 'Made to move with you, offering comfort and flexibility all day.',
    },
    {
        lifestyle: '/images/featured/p3i3.png',
        shoe: '/images/featured/p3.png',
        name: 'Olkaria Women Red',
        original: '$140.00',
        sale: '$90.00',
        description: 'Made to move with you, offering comfort and flexibility all day.',
    },
]

export default function FeaturedSection() {
    const [active, setActive] = useState(0)
    const sectionRef = useRef(null)
    const current = products[active]

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
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section className={styles.featuredSection} ref={sectionRef}>

            {/* LEFT — lifestyle image stack */}
            <div className={styles.left}>
                <div className={styles.editorialWrapper}>
                    {products.map((p, i) => (
                        <img
                            key={i}
                            src={p.lifestyle}
                            alt={p.name}
                            className={`${styles.editorialImg} ${i === active ? styles.imgActive : ''}`}
                        />
                    ))}
                    <div className={styles.editorialOverlay} />
                    <p className={styles.editorialText}>{current.description}</p>
                </div>
            </div>

            {/* RIGHT — shoe image + info + dots */}
            <div className={styles.right}>

                <div className={styles.productCard}>
                    {products.map((p, i) => (
                        <img
                            key={i}
                            src={p.shoe}
                            alt={p.name}
                            className={`${styles.productImg} ${i === active ? styles.imgActive : ''}`}
                        />
                    ))}
                </div>

                <div className={styles.productInfo}>
                    <span className={styles.productName}>{current.name}</span>
                    <div className={styles.priceWrapper}>
                        <span className={styles.originalPrice}>{current.original}</span>
                        <span className={styles.salePrice}>{current.sale}</span>
                    </div>
                </div>

                <div className={styles.dots}>
                    {products.map((_, i) => (
                        <button
                            key={i}
                            className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
                            onClick={() => setActive(i)}
                            aria-label={`Product ${i + 1}`}
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}
'use client'
import { useEffect, useRef } from 'react'
import styles from './FeaturedSection.module.css'
import Image from 'next/image'

export default function FeaturedSection() {
    const sectionRef = useRef(null)

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

            {/* ── LEFT: Editorial image — fixed size, not full height ── */}
            <div className={styles.left}>
                <div className={styles.editorialWrapper}>
                    <Image
                        src="/images/featured/editorial.png"
                        alt="ENDA performance footwear"
                        fill
                        className={styles.editorialImg}
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Gradient overlay */}
                    <div className={styles.editorialOverlay} />
                    {/* Text bottom left */}
                    <p className={styles.editorialText}>
                        Performance-engineered footwear
                        <br />
                        designed for speed, comfort, and endurance.
                    </p>
                </div>
            </div>

            {/* ── RIGHT: Product showcase ── */}
            <div className={styles.right}>

                {/* Product card — square, gray bg */}
                <div className={styles.productCard}>

                    {/* Sale tag INSIDE card, top-left, rotated */}
                    <div className={styles.saleTag}>Sale 60%</div>

                    {/* Shoe image */}
                    <div className={styles.productImageWrapper}>
                        <Image
                            src="/images/featured/product.png"
                            alt="New Lapatet Women Blue"
                            fill
                            className={styles.productImage}
                            sizes="(max-width: 768px) 100vw, 40vw"
                        />
                    </div>
                </div>

                {/* Product info row */}
                <div className={styles.productInfo}>
                    <span className={styles.productName}>New Lapatet women Blue</span>
                    <div className={styles.priceWrapper}>
                        <span className={styles.originalPrice}>$120.00</span>
                        <span className={styles.salePrice}>$70.00</span>
                    </div>
                </div>

                {/* Dot indicators */}
                <div className={styles.dots}>
                    <span className={`${styles.dot} ${styles.dotEmpty}`} />
                    <span className={`${styles.dot} ${styles.dotFilled}`} />
                    <span className={`${styles.dot} ${styles.dotFilled}`} />
                </div>

            </div>
        </section>
    )
}
'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from './ShowcaseSection.module.css'

export default function ShowcaseSection() {
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
        <section className={styles.showcaseSection} ref={sectionRef}>
            <div className={styles.grid}>

                {/* Top-left */}
                <div className={styles.cell}>
                    <Image
                        src="/images/showcase/x1.png"
                        alt="ENDA showcase 1"
                        fill
                        className={styles.img}
                        sizes="(max-width: 768px) 50vw, 50vw"
                    />
                </div>

                {/* Top-right */}
                <div className={styles.cell}>
                    <Image
                        src="/images/showcase/x4.png"
                        alt="ENDA showcase 4"
                        fill
                        className={styles.img}
                        sizes="(max-width: 768px) 50vw, 50vw"
                    />
                </div>

                {/* Bottom-left */}
                <div className={styles.cell}>
                    <Image
                        src="/images/showcase/x3.png"
                        alt="ENDA showcase 3"
                        fill
                        className={styles.img}
                        sizes="(max-width: 768px) 50vw, 50vw"
                    />
                </div>

                {/* Bottom-right */}
                <div className={styles.cell}>
                    <Image
                        src="/images/showcase/x2.png"
                        alt="ENDA showcase 2"
                        fill
                        className={styles.img}
                        sizes="(max-width: 768px) 50vw, 50vw"
                    />
                </div>

            </div>
        </section>
    )
}
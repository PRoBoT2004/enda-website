// app/home/sections/HeroSection.js
'use client'
import styles from './HeroSection.module.css'
import Image from 'next/image'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, ease: [0.25, 0.1, 0.25, 1], delay },
})

export default function HeroSection() {
    return (
        <>
            {/* ── DESKTOP: full viewport, text overlaid ── */}
            <section className={styles.heroDesktop}>
                <div className={styles.backgroundImage}>
                    <Image
                        src="/images/hero/hero-background.png"
                        alt="ENDA running shoes in action"
                        fill
                        className={styles.bgImg}
                        priority
                    />
                </div>
                <div className={styles.gradient} />
                <div className={styles.contentContainer}>
                    <div className={styles.textWrapper}>
                        <motion.h1 className={styles.mainHeading} {...fadeUp(0.1)}>
                            BORN IN KENYA,<br />MADE FOR THE WORLD
                        </motion.h1>
                        <motion.p className={styles.subheading} {...fadeUp(0.3)}>
                            Performance, Culture, and Community in Every Step.
                        </motion.p>
                    </div>
                    <motion.a href="/collection" className={styles.ctaLink} {...fadeUp(0.5)}>
                        <span className={styles.ctaText}>Explore Collection</span>
                    </motion.a>
                </div>
            </section>

            {/* ── MOBILE: image on top, text block below, gradient bridges the gap ── */}
            <section className={styles.heroMobile}>
                <div className={styles.mobileImageWrapper}>
                    <Image
                        src="/images/hero/hero-background.png"
                        alt="ENDA running shoes in action"
                        fill
                        className={styles.mobileImg}
                        priority
                    />
                </div>
                <div className={styles.mobileContent}>
                    <motion.h1 className={styles.mobileHeading} {...fadeUp(0.1)}>
                        BORN IN KENYA,<br />MADE FOR THE WORLD
                    </motion.h1>
                    <motion.p className={styles.mobileSubheading} {...fadeUp(0.25)}>
                        Performance, Culture, and Community in Every Step.
                    </motion.p>
                    <motion.a href="/collection" className={styles.mobileCtaLink} {...fadeUp(0.4)}>
                        <span className={styles.mobileCtaText}>Explore Collection</span>
                    </motion.a>
                </div>
            </section>
        </>
    )
}
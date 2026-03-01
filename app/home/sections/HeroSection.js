'use client'
import styles from './HeroSection.module.css'
import Image from 'next/image'

export default function HeroSection() {
    return (
        <>
            {/* ── DESKTOP HERO: full viewport, text overlaid ── */}
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
                        <h1 className={styles.mainHeading}>
                            BORN IN KENYA,
                            <br />
                            MADE FOR THE WORLD
                        </h1>
                        <p className={styles.subheading}>
                            Performance, Culture, and Community in Every Step.
                        </p>
                    </div>
                    <a href="/collection" className={styles.ctaLink}>
                        <span className={styles.ctaText}>Explore Collection</span>
                    </a>
                </div>
            </section>

            {/* ── MOBILE HERO: image on top, black text block below ── */}
            <section className={styles.heroMobile}>
                {/* Full image — contain so nothing is cropped */}
                <div className={styles.mobileImageWrapper}>
                    <Image
                        src="/images/hero/hero-background.png"
                        alt="ENDA running shoes in action"
                        fill
                        className={styles.mobileImg}
                        priority
                    />
                </div>

                {/* Black content block — blends seamlessly with image bg */}
                <div className={styles.mobileContent}>
                    <h1 className={styles.mobileHeading}>
                        BORN IN KENYA,
                        <br />
                        MADE FOR THE WORLD
                    </h1>
                    <p className={styles.mobileSubheading}>
                        Performance, Culture, and Community in Every Step.
                    </p>
                    <a href="/collection" className={styles.mobileCtaLink}>
                        <span className={styles.mobileCtaText}>Explore Collection</span>
                    </a>
                </div>
            </section>
        </>
    )
}
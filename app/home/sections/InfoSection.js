'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from './InfoSection.module.css'

export default function InfoSection() {
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add(styles.visible)
                    observer.disconnect()
                }
            },
            { threshold: 0.05 }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <section className={styles.section} ref={ref}>

            {/* ══════════════════════════════════════════════
                TOP HALF
                CSS Grid: 2 rows x 3 cols
                Row1 Col1: OUR STORY label
                Row1 Col2: story body + cta
                Row1-2 Col3: portrait (spans both rows)
                Row2 Col1: OUR COMMUNITY label
                Row2 Col2: community body + athletes + partners
            ══════════════════════════════════════════════ */}
            <div className={styles.topHalf}>

                {/* Row 1, Col 1 — OUR STORY label (desktop) */}
                <div className={styles.storyLabel}>
                    <h2 className={styles.label}>Our Story</h2>
                </div>

                {/* Row 1, Col 2 — story content */}
                <div className={styles.storyContent}>
                    {/* Mobile only label */}
                    <h2 className={styles.mobileLabel}>Our Story</h2>
                    <p className={styles.body}>
                        Born in Kenya, Enda blends African heritage with world-class performance.
                        Every step tells a story—one of culture, excellence, and the power of community.
                    </p>
                    <a href="#" className={styles.cta}>Read Our Story</a>
                </div>

                {/* Col 3 — portrait spans row 1 and 2 */}
                <div className={styles.portraitCol}>
                    <div className={styles.portraitWrap}>
                        <Image
                            src="/images/InfoSection/story-portrait.png"
                            alt="ENDA athletes"
                            fill
                            className={styles.imgCover}
                            sizes="(max-width: 768px) 55vw, 14vw"
                        />
                    </div>
                </div>

                {/* Row 2, Col 1 — OUR COMMUNITY label (desktop) */}
                <div className={styles.communityLabel}>
                    <h2 className={styles.label}>Our Community,<br />Our Champions</h2>
                </div>

                {/* Row 2, Col 2 — community content */}
                <div className={styles.communityContent}>
                    {/* Mobile only label */}
                    <h2 className={styles.mobileLabel}>Our Community,<br />Our Champions</h2>
                    <p className={styles.body}>
                        Enda collaborates with world-class athletes, communities, and organizations
                        to celebrate the spirit of running.
                    </p>

                    <div className={styles.metaBlock}>
                        <p className={styles.metaLabel}>Athletes &amp; Ambassadors</p>
                        <p className={styles.metaNames}>
                            <span>Mark Otieno</span>
                            <span className={styles.dot}>•</span>
                            <span>Catherine Nderba</span>
                            <span className={styles.dot}>•</span>
                            <span>William Nanjero</span>
                        </p>
                    </div>

                    <div className={styles.metaBlock}>
                        <p className={styles.metaLabel}>Global Partners</p>
                        <p className={styles.metaNames}>
                            <span>Kenya Runners Club</span>
                            <span className={styles.dot}>•</span>
                            <span>African Running Initiative</span>
                            <span className={styles.dot}>•</span>
                            <span>Sustainable Footwear Alliance</span>
                        </p>
                    </div>
                </div>

            </div>

            {/* DIVIDER */}
            <div className={styles.divider} />

            {/* ══════════════════════════════════════════════
                BOTTOM HALF — Journal | Find Us
            ══════════════════════════════════════════════ */}
            <div className={styles.bottomHalf}>

                {/* JOURNAL */}
                <div className={styles.journalCol}>
                    <div className={styles.colHead}>
                        <h2 className={styles.label}>Journal</h2>
                        <a href="#" className={styles.cta}>View Journal</a>
                    </div>

                    <div className={styles.journalImgs}>
                        <div className={styles.journalImg}>
                            <Image
                                src="/images/InfoSection/journal1.png"
                                alt="Journal 1"
                                fill
                                className={styles.imgCover}
                                sizes="22vw"
                            />
                        </div>
                        <div className={styles.journalImg}>
                            <Image
                                src="/images/InfoSection/journal2.png"
                                alt="Journal 2"
                                fill
                                className={styles.imgCover}
                                sizes="22vw"
                            />
                        </div>
                    </div>

                    <div className={styles.journalCaps}>
                        <div className={styles.cap}>
                            <p className={styles.capTitle}>
                                Kenya's Journey to Self-Rule:<br />
                                A Triumph of Freedom and National Identity
                            </p>
                            <a href="#" className={styles.cta}>Read more</a>
                        </div>
                        <div className={styles.cap}>
                            <p className={styles.capTitle}>
                                London Marathon, Another East African Sweep!
                            </p>
                            <p className={styles.capMeta}>Running News &nbsp; 31/03/2024 &nbsp; Harry Jones</p>
                        </div>
                    </div>
                </div>

                {/* FIND US */}
                <div className={styles.findUsCol}>
                    <div className={styles.colHead}>
                        <h2 className={styles.label}>Find Us Near You</h2>
                        <a href="#" className={styles.cta}>View Our Location</a>
                    </div>

                    <div className={styles.locationWrap}>
                        <Image
                            src="/images/InfoSection/location.png"
                            alt="New York store"
                            fill
                            className={styles.imgCover}
                            sizes="(max-width: 768px) 100vw, 47vw"
                        />
                        <div className={styles.locOverlay} />
                        <div className={styles.locText}>
                            <span className={styles.locCity}>New York, USA</span>
                            <span className={styles.locAddr}>108 Greene Street, New York, NY 10012</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
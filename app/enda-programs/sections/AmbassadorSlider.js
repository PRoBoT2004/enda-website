'use client'

// app/enda-programs/sections/AmbassadorSlider.js
import { useState } from 'react'
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import styles from './AmbassadorSlider.module.css'

const ambassadors = [
    {
        id: 1,
        name: 'Michael Smith',
        image: '/images/enda-programs/ambassador-1.png',
        tags: ['Actor', 'Influencer'],
        bio: "John helps spread awareness about the power of running in daily life and the role of Enda's performance gear in helping him achieve his goals.",
    },
    {
        id: 2,
        name: 'Sarah Johnson',
        image: '/images/enda-programs/ambassador-2.png',
        tags: ['Athlete', 'Coach'],
        bio: "Sarah brings her passion for distance running to communities across East Africa, championing Enda's vision of Kenyan excellence on the world stage.",
    },
    {
        id: 3,
        name: 'David Kimani',
        image: '/images/enda-programs/ambassador-3.png',
        tags: ['Runner', 'Influencer'],
        bio: "David uses his platform to inspire the next generation of Kenyan runners, showcasing how Enda gear helps him perform at his peak every day.",
    },
    {
        id: 4,
        name: 'Amina Wanjiru',
        image: '/images/enda-programs/ambassador-4.png',
        tags: ['Marathoner', 'Speaker'],
        bio: "Amina's story of resilience and dedication mirrors everything Enda stands for — community, performance, and the spirit of Harambee.",
    },
    {
        id: 5,
        name: 'James Oloo',
        image: '/images/enda-programs/ambassador-5.png',
        tags: ['Trainer', 'Actor'],
        bio: "James bridges fitness and culture, using Enda's gear to show that performance and style can go hand in hand on and off the track.",
    },
]

const VISIBLE = 3

export default function AmbassadorSlider() {
    const [index, setIndex] = useState(0)

    const canPrev = index > 0
    const canNext = index + VISIBLE < ambassadors.length

    const prev = () => { if (canPrev) setIndex(i => i - 1) }
    const next = () => { if (canNext) setIndex(i => i + 1) }

    const visible = ambassadors.slice(index, index + VISIBLE)

    return (
        <section className={styles.section}>
            {/* Left col — Previous/Next nav */}
            <div className={styles.left}>
                <div className={styles.nav}>
                    <button
                        className={`${styles.navBtn} ${!canPrev ? styles.navBtnDim : ''}`}
                        onClick={prev}
                        disabled={!canPrev}
                        aria-label="Previous ambassadors"
                    >
                        Previous
                    </button>
                    <div className={styles.navDot} />
                    <button
                        className={`${styles.navBtn} ${styles.navBtnActive} ${!canNext ? styles.navBtnDim : ''}`}
                        onClick={next}
                        disabled={!canNext}
                        aria-label="Next ambassadors"
                    >
                        Next
                    </button>
                </div>
            </div>

            {/* Right col — 3 cards */}
            <div className={styles.track}>
                {visible.map((a) => (
                    <div key={a.id} className={styles.card}>
                        <img src={a.image} alt={a.name} className={styles.image} />

                        {/* Default state — name + tags at bottom */}
                        <div className={styles.defaultOverlay}>
                            <p className={styles.name}>{a.name}</p>
                            <div className={styles.tags}>
                                {a.tags.map((tag) => (
                                    <span key={tag} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                        </div>

                        {/* Hover state — full overlay with bio + socials */}
                        <div className={styles.hoverOverlay}>
                            <div className={styles.hoverContent}>
                                <p className={styles.hoverName}>{a.name}</p>
                                <div className={styles.tags}>
                                    {a.tags.map((tag) => (
                                        <span key={tag} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>
                                <p className={styles.bio}>{a.bio}</p>
                            </div>
                            <div className={styles.socials}>
                                <FaFacebookF className={styles.socialIcon} />
                                <FaInstagram className={styles.socialIcon} />
                                <FaXTwitter className={styles.socialIcon} />
                                <FaTiktok className={styles.socialIcon} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
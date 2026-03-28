'use client'

// app/products/[slug]/sections/ProductReviews.js
import { useState } from 'react'
import { FiThumbsUp, FiThumbsDown, FiChevronDown, FiChevronUp, FiPlus } from 'react-icons/fi'
import { BsCheckCircle } from 'react-icons/bs'
import styles from './ProductReviews.module.css'

const attributes = [
    { label: 'Comfort', min: 'Un Comfortable', max: 'Comfortable', value: 14 },
    { label: 'Size', min: 'Too Small', mid: 'Perfect', max: 'Too Large', value: 6 },
    { label: 'Quality', min: 'Poor', max: 'Perfect', value: 78 },
    { label: 'Width', min: 'Too Narrow', mid: 'Perfect', max: 'Too Wide', value: 55 },
]

const starCounts = [5, 4, 3, 2, 1]

export default function ProductReviews({ reviews, rating, count }) {
    const [collapsed, setCollapsed] = useState(true)

    return (
        <section className={styles.section}>

            {/* ── Header ── */}
            <div className={styles.header} onClick={() => setCollapsed(!collapsed)}>
                <h2 className={styles.title}>Reviews ({count})</h2>
                <div className={styles.headerRight}>
                    <div className={styles.ratingInline}>
                        <span className={styles.ratingNum}>{rating}</span>
                        <div className={styles.stars}>
                            {Array.from({ length: 5 }).map((_, i) => (
                                <span key={i} className={i < Math.round(rating) ? styles.starFilled : styles.starEmpty}>★</span>
                            ))}
                        </div>
                    </div>
                    {collapsed ? <FiChevronDown className={styles.chevron} /> : <FiChevronUp className={styles.chevron} />}
                </div>
            </div>

            {!collapsed && (
                <>
                    <div className={styles.divider} />

                    {/* ── Summary row ── */}
                    <div className={styles.row}>
                        <div className={styles.summaryLeft}>
                            <div className={styles.bigRating}>
                                <span className={styles.bigNum}>{rating}</span>
                                <div className={styles.bigStars}>
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <span key={i} className={i < Math.round(rating) ? styles.starFilled : styles.starEmpty}>★</span>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.starBars}>
                                <p className={styles.filterLabel}>Filter by star rating</p>
                                {starCounts.map((n) => (
                                    <div key={n} className={styles.starBarRow}>
                                        <span className={styles.starBarNum}>{n}</span>
                                        <span className={styles.starIcon}>★</span>
                                        <div className={styles.barTrack}>
                                            <div className={styles.barFill} style={{ width: n === 5 ? '80%' : n === 4 ? '10%' : '5%' }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles.summaryRight}>
                            {attributes.map((a) => (
                                <div key={a.label} className={styles.attrRow}>
                                    <p className={styles.attrLabel}>{a.label}</p>
                                    <div className={styles.attrTrack}>
                                        <div className={styles.attrFill} style={{ width: `${a.value}%` }} />
                                    </div>
                                    <div className={styles.attrLabels}>
                                        <span>{a.min}</span>
                                        {a.mid && <span>{a.mid}</span>}
                                        <span>{a.max}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.divider} />

                    {/* ── Controls row ── */}
                    <div className={styles.row}>
                        <div />
                        <div className={styles.controlsRight}>
                            <button className={styles.writeBtn}>
                                Write a Review <FiPlus />
                            </button>
                            <div className={styles.sortWrap}>
                                <span className={styles.sortLabel}>Sort by</span>
                                <button className={styles.sortBtn}>
                                    Newest <FiChevronDown />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.divider} />

                    {/* ── Review cards ── */}
                    {reviews.map((r) => (
                        <div key={r.id} className={styles.reviewCard}>
                            <div className={styles.reviewLeft}>
                                <span className={styles.author}>{r.author}</span>
                                {r.verified && (
                                    <span className={styles.verified}>
                                        <BsCheckCircle className={styles.checkIcon} />
                                        Verified Purchaser
                                    </span>
                                )}
                                <div className={styles.reviewStars}>
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <span key={i} className={i < r.rating ? styles.starFilled : styles.starEmpty}>★</span>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.reviewCenter}>
                                <span className={styles.reviewTitle}>{r.title}</span>
                                <p className={styles.reviewBody}>{r.body}</p>
                                <div className={styles.reviewFooter}>
                                    <span className={styles.helpful}>Helpful?</span>
                                    <button className={styles.thumbBtn}><FiThumbsUp /> (0)</button>
                                    <button className={styles.thumbBtn}><FiThumbsDown /> (0)</button>
                                    <button className={styles.reportBtn}>Report Review</button>
                                </div>
                            </div>
                            <div className={styles.reviewRight}>
                                <span className={styles.reviewDate}>{r.date}</span>
                            </div>
                        </div>
                    ))}

                    <div className={styles.divider} />

                    {/* ── Read more row ── */}
                    <div className={styles.row}>
                        <div />
                        <div className={styles.readMoreRight}>
                            <button className={styles.readMoreBtn}>
                                Read More Reviews <FiChevronDown />
                            </button>
                        </div>
                    </div>
                </>
            )}
        </section>
    )
}
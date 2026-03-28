'use client'

// app/blog/sections/BlogPagination.js
import { useState } from 'react'
import styles from './BlogPagination.module.css'

const TOTAL_PAGES = 13

export default function BlogPagination() {
    const [current, setCurrent] = useState(1)

    const pages = [1, 2, 3, 4]

    return (
        <div className={styles.pagination}>
            {pages.map((p) => (
                <button
                    key={p}
                    className={`${styles.btn} ${current === p ? styles.active : ''}`}
                    onClick={() => setCurrent(p)}
                >
                    {p}
                </button>
            ))}
            <span className={styles.ellipsis}>...</span>
            <button
                className={`${styles.btn} ${current === TOTAL_PAGES ? styles.active : ''}`}
                onClick={() => setCurrent(TOTAL_PAGES)}
            >
                {TOTAL_PAGES}
            </button>
            <button
                className={styles.arrow}
                onClick={() => setCurrent(c => Math.min(c + 1, TOTAL_PAGES))}
                aria-label="Next page"
            >
                →
            </button>
        </div>
    )
}
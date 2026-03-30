'use client'

import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FiLink } from 'react-icons/fi'
import styles from './BlogPostShareBar.module.css'

export default function BlogPostShareBar({ post }) {
    const handleCopy = () => {
        navigator.clipboard.writeText(window.location.href)
    }

    const getURL = () =>
        typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : ''

    const shareUrl = getURL()

    return (
        <div className={styles.wrap}>
            {/* Breadcrumb + tags — mobile only */}
            <div className={styles.meta}>
                <div className={styles.breadcrumb}>
                    <a href="/blog" className={styles.breadcrumbLink}>Blog</a>
                    <span className={styles.breadcrumbSep}>/</span>
                    <span className={styles.breadcrumbCurrent}>{post?.tags?.[0]}</span>
                </div>
                <div className={styles.tags}>
                    {post?.tags?.map((tag) => (
                        <a
                            key={tag}
                            href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                            className={styles.tag}
                        >
                            {tag}
                        </a>
                    ))}
                </div>
            </div>

            {/* Share */}
            <div className={styles.bar}>
                <p className={styles.label}>Share</p>
                <div className={styles.icons}>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                        target="_blank" rel="noopener noreferrer" className={styles.btn}>
                        <FaFacebookF />
                    </a>
                    <a href={`https://twitter.com/intent/tweet?url=${shareUrl}`}
                        target="_blank" rel="noopener noreferrer" className={styles.btn}>
                        <FaXTwitter />
                    </a>
                    <a href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.btn}>
                        <FaInstagram />
                    </a>
                    <button className={styles.btn} onClick={handleCopy} aria-label="Copy link">
                        <FiLink />
                    </button>
                </div>
            </div>
        </div>
    )
}
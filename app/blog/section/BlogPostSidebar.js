'use client'

// app/blog/[slug]/sections/BlogPostSidebar.js
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FiLink } from 'react-icons/fi'
import styles from './BlogPostSidebar.module.css'

export default function BlogPostSidebar({ post }) {
    const handleCopy = () => {
        navigator.clipboard.writeText(window.location.href)
    }

    return (
        <aside className={styles.sidebar}>
            {/* Breadcrumb */}
            <div className={styles.breadcrumb}>
                <a href="/blog" className={styles.breadcrumbLink}>Blog</a>
                <span className={styles.breadcrumbSep}>/</span>
                <span className={styles.breadcrumbCurrent}>{post.tags[0]}</span>
            </div>

            {/* Tags */}
            <div className={styles.tags}>
                {post.tags.map((tag) => (
                    <a key={tag} href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`} className={styles.tag}>
                        {tag}
                    </a>
                ))}
            </div>

            {/* Share — at bottom */}
            <div className={styles.share}>
                <p className={styles.shareLabel}>Share</p>
                <div className={styles.shareIcons}>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} target="_blank" rel="noopener noreferrer" className={styles.shareBtn}>
                        <FaFacebookF />
                    </a>
                    <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} target="_blank" rel="noopener noreferrer" className={styles.shareBtn}>
                        <FaXTwitter />
                    </a>
                    <a href={`https://www.instagram.com/`} target="_blank" rel="noopener noreferrer" className={styles.shareBtn}>
                        <FaInstagram />
                    </a>
                    <button className={styles.shareBtn} onClick={handleCopy} aria-label="Copy link">
                        <FiLink />
                    </button>
                </div>
            </div>
        </aside>
    )
}
// app/blog/[slug]/sections/BlogPostContent.js
import styles from './BlogPostContent.module.css'

export default function BlogPostContent({ post }) {
    return (
        <article className={styles.article}>
            {/* Title block */}
            <div className={styles.titleBlock}>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.subtitle}>{post.subtitle}</p>
            </div>

            {/* Hero image */}
            <div className={styles.heroWrap}>
                <img src={post.heroImage} alt={post.title} className={styles.heroImage} />
            </div>

            {/* Body content */}
            <div className={styles.body}>
                {post.content.map((block, i) => {
                    if (block.type === 'paragraph') {
                        return <p key={i} className={styles.paragraph}>{block.text}</p>
                    }
                    if (block.type === 'heading') {
                        return <h2 key={i} className={styles.heading}>{block.text}</h2>
                    }
                    if (block.type === 'subheading') {
                        return <h3 key={i} className={styles.subheading}>{block.text}</h3>
                    }
                    if (block.type === 'image') {
                        return (
                            <div key={i} className={styles.inlineImageWrap}>
                                <img src={block.src} alt={block.alt} className={styles.inlineImage} />
                            </div>
                        )
                    }
                    return null
                })}
            </div>

            {/* Date + tags footer */}
            <div className={styles.footer}>
                <span className={styles.date}>{post.date}</span>
                {post.tags.map((tag) => (
                    <a key={tag} href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`} className={styles.tag}>
                        {tag}
                    </a>
                ))}
            </div>
        </article>
    )
}
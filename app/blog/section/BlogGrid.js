// app/blog/sections/BlogGrid.js
import styles from './BlogGrid.module.css'
import BlogPagination from './BlogPagination'

const posts = [
    {
        slug: 'from-the-rift-valley-to-the-world-1',
        image: '/images/blog/post-1.png',
        title: 'From the Rift Valley to the World: How enda Runs with Kenyan Culture',
        date: '31/03/2024',
        tags: ['Kenyan Culture', 'enda Stories', 'Athlete Stories'],
    },
    {
        slug: 'from-the-rift-valley-to-the-world-2',
        image: '/images/blog/post-2.png',
        title: 'From the Rift Valley to the World: How enda Runs with Kenyan Culture',
        date: '31/03/2024',
        tags: ['Kenyan Culture', 'enda Stories', 'Athlete Stories'],
    },
    {
        slug: 'from-the-rift-valley-to-the-world-3',
        image: '/images/blog/post-3.png',
        title: 'From the Rift Valley to the World: How enda Runs with Kenyan Culture',
        date: '31/03/2024',
        tags: ['Kenyan Culture', 'enda Stories', 'Athlete Stories'],
    },
    {
        slug: 'from-the-rift-valley-to-the-world-4',
        image: '/images/blog/post-3.png',
        title: 'From the Rift Valley to the World: How enda Runs with Kenyan Culture',
        date: '31/03/2024',
        tags: ['Kenyan Culture', 'enda Stories', 'Athlete Stories'],
    },
    {
        slug: 'from-the-rift-valley-to-the-world-5',
        image: '/images/blog/post-2.png',
        title: 'From the Rift Valley to the World: How enda Runs with Kenyan Culture',
        date: '31/03/2024',
        tags: ['Kenyan Culture', 'enda Stories', 'Athlete Stories'],
    },
    {
        slug: 'from-the-rift-valley-to-the-world-6',
        image: '/images/blog/post-1.png',
        title: 'From the Rift Valley to the World: How enda Runs with Kenyan Culture',
        date: '31/03/2024',
        tags: ['Kenyan Culture', 'enda Stories', 'Athlete Stories'],
    },
    {
        slug: 'from-the-rift-valley-to-the-world-7',
        image: '/images/blog/post-1.png',
        title: 'From the Rift Valley to the World: How enda Runs with Kenyan Culture',
        date: '31/03/2024',
        tags: ['Kenyan Culture', 'enda Stories', 'Athlete Stories'],
    },
    {
        slug: 'from-the-rift-valley-to-the-world-8',
        image: '/images/blog/post-3.png',
        title: 'From the Rift Valley to the World: How enda Runs with Kenyan Culture',
        date: '31/03/2024',
        tags: ['Kenyan Culture', 'enda Stories', 'Athlete Stories'],
    },
    {
        slug: 'from-the-rift-valley-to-the-world-9',
        image: '/images/blog/post-2.png',
        title: 'From the Rift Valley to the World: How enda Runs with Kenyan Culture',
        date: '31/03/2024',
        tags: ['Kenyan Culture', 'enda Stories', 'Athlete Stories'],
    },
]

export default function BlogGrid() {
    return (
        <section className={styles.section}>
            <div className={styles.grid}>
                {posts.map((post) => (
                    <a key={post.slug} href={`/blog/${post.slug}`} className={styles.card}>
                        <div className={styles.imageWrap}>
                            <img src={post.image} alt={post.title} className={styles.image} />
                        </div>
                        <div className={styles.info}>
                            <h2 className={styles.title}>{post.title}</h2>
                            <div className={styles.meta}>
                                <span className={styles.date}>{post.date}</span>
                                {post.tags.map((tag) => (
                                    <a key={tag} href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`} className={styles.tag}>
                                        {tag}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
            <BlogPagination />
        </section>
    )
}
import { getBlogPostBySlug, blogPosts } from '@/data/blogPosts'
import { notFound } from 'next/navigation'
import styles from './page.module.css'
import TopBar from '@/app/home/sections/TopBar'
import Navigation from '@/app/home/sections/Navigation'
import WeEndaTogether from '@/app/home/sections/WeEndaTogether'
import Footer from '@/app/home/sections/Footer'
import BlogPostSidebar from '../section/BlogPostSidebar'
import BlogPostContent from '../section/BlogPostContent'
import BlogPostNextPrev from '../section/BlogPostNextPrev'
import BlogPostShareBar from '../section/BlogPostShareBar'   // ← new

export async function generateStaticParams() {
    return blogPosts.map((p) => ({ slug: p.slug }))
}

export default async function BlogPostPage({ params }) {
    const { slug } = await params
    const post = getBlogPostBySlug(slug)
    if (!post) notFound()

    return (
        <main className={styles.page}>
            <TopBar />
            <Navigation />
            <div className={styles.layout}>
                <BlogPostSidebar post={post} />
                <div className={styles.contentCol}>
                    <BlogPostContent post={post} />
                    <BlogPostShareBar post={post} />  {/* mobile share bar */}
                </div>
                <BlogPostNextPrev prevPost={post.prevPost} nextPost={post.nextPost} />
            </div>
            <WeEndaTogether />
            <Footer />
        </main>
    )
}
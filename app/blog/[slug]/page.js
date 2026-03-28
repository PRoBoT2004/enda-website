// app/blog/[slug]/page.js
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
                {/* Left sidebar */}
                <BlogPostSidebar post={post} />

                {/* Center — main content */}
                <BlogPostContent post={post} />

                {/* Right sidebar — prev/next */}
                <BlogPostNextPrev prevPost={post.prevPost} nextPost={post.nextPost} />
            </div>
            <WeEndaTogether />
            <Footer />
        </main>
    )
}
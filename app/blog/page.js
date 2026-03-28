import TopBar from '../home/sections/TopBar'
import Navigation from '../home/sections/Navigation'
import Footer from '../home/sections/Footer'
import BlogHero from './section/BlogHero'
import BlogImageBanner from './section/BlogImageBanner'
import BlogGrid from './section/BlogGrid'
import WeEndaTogether from '../home/sections/WeEndaTogether'


export const metadata = {
    title: 'Blog - ENDA',
    description: "Stories, Insights, & Inspiration from ENDA.",
}

export default function BlogPage() {
    return (
        <main className="blog-page">
            <TopBar />
            <Navigation />
            <BlogHero />
            <BlogImageBanner />
            <BlogGrid />
            <WeEndaTogether />
            <Footer />
        </main>
    )
}
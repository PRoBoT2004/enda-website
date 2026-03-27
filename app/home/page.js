import TopBar from './sections/TopBar'
import Navigation from './sections/Navigation'
import HeroSection from './sections/HeroSection'
import ShopSection from './sections/ShopSection'
import FeaturedSection from './sections/FeaturedSection'
import EditorialSection from './sections/EditorialSection'
// import ShowcaseSection from './sections/ShowcaseSection'
import WeEndaTogether from './sections/WeEndaTogether'
// import StoryBanner from './sections/StoryBanner'
// import InfoSection from './sections/InfoSection'
import Footer from './sections/Footer'

export const metadata = {
    title: 'ENDA - Born in Kenya, Made for the World',
    description: 'Performance-engineered footwear designed for speed, comfort, and endurance.',
}

export default function HomePage() {
    return (
        <main className="home-page">
            <TopBar />
            <Navigation />
            <HeroSection />
            <ShopSection />
            <FeaturedSection />
            <EditorialSection />
            <WeEndaTogether />
            {/* <ShowcaseSection />   4-image grid, normal flow */}
            {/* <StoryBanner />
            <InfoSection /> */}
            <Footer />
            {/* Next sections will go here */}
        </main>
    )
}
import TopBar from '../home/sections/TopBar'
import Navigation from '../home/sections/Navigation'
import Footer from '../home/sections/Footer'
import OurStoryHero from './OurStoryHero'
import OurStoryIntro from './OurStoryIntro'
import OurStoryWeMove from './OurStoryWeMove'
import OurStoryVision from './OurStoryVision'
import OurStoryGallery from './OurStoryGallery'
import OurStoryLegacy from './OurStoryLegacy'
import OurStoryName from './OurStoryName'
import OurStorySymbol from './OurStorySymbol'

export const metadata = {
    title: 'Our Story - ENDA',
    description: "Africa's First Performance Sportswear Brand – Built for the World.",
}

export default function OurStoryPage() {
    return (
        <main className="ourstory-page">
            <TopBar />
            <Navigation />
            <OurStoryHero />
            <OurStoryIntro />
            <OurStoryWeMove />
            <OurStoryVision />
            <OurStoryGallery />
            <OurStoryLegacy />
            <OurStoryName />
            <OurStorySymbol />
            <Footer />
        </main>
    )
}

import TopBar from '../home/sections/TopBar'
import Navigation from '../home/sections/Navigation'
import Footer from '../home/sections/Footer'
import ShoeGuideHero from './sections/ShoeGuideHero'
import ShoeGuideIten from './sections/ShoeGuideIten'
import ShoeGuideLapatet from './sections/ShoeGuideLapatet'
import ShoeGuideKoobiFora from './sections/ShoeGuideKoobiFora'
import ShoeGuideTaiJogger from './sections/ShoeGuideTaiJogger'
import ShoeGuideWorkout from './sections/ShoeGuideWorkout'
import ShoeGuideCommunity from './sections/ShoeGuideCommunity'
import WeEndaTogether from '../home/sections/WeEndaTogether'

export const metadata = {
    title: 'Shoe Guide - ENDA',
    description: "Find your perfect training shoe with ENDA.",
}

export default function ShoeGuidePage() {
    return (
        <main className="shoe-guide-page">
            <TopBar />
            <Navigation />
            <ShoeGuideHero />
            <ShoeGuideIten />
            <ShoeGuideLapatet />
            <ShoeGuideKoobiFora />
            <ShoeGuideTaiJogger />
            <ShoeGuideWorkout />
            <ShoeGuideCommunity />
            <WeEndaTogether />
            <Footer />
        </main>
    )
}
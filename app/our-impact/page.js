import TopBar from '../home/sections/TopBar'
import Navigation from '../home/sections/Navigation'
import Footer from '../home/sections/Footer'
import OurImpactHero from './sections/OurImpactHero'
import OurImpactIntro from './sections/OurImpactIntro'
import OurImpactCards from './sections/OurImpactCards'
import OurImpactCraftsmanship from './sections/OurImpactCraftsmanship'
import OurImpactCommunity from './sections/OurImpactCommunity'
import OurImpactHarambee from './sections/OurImpactHarambee'
import WeEndaTogether from '../home/sections/WeEndaTogether'

export const metadata = {
    title: 'Our Impact - ENDA',
    description: "Discover our impact in Kenya and beyond.",
}

export default function OurImpactPage() {
    return (
        <main className="ourimpact-page">
            <TopBar />
            <Navigation />
            <OurImpactHero />
            <OurImpactIntro />
            <OurImpactCards />
            <OurImpactCraftsmanship />
            <OurImpactCommunity />
            <OurImpactHarambee />
            <WeEndaTogether />
            <Footer />
        </main>
    )
}

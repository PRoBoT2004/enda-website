import EndaProgramsHero from "./sections/EndaProgramsHero";
import TopBar from '../home/sections/TopBar'
import Navigation from '../home/sections/Navigation'
import Footer from '../home/sections/Footer'
import WeEndaTogether from "../home/sections/WeEndaTogether";
import TrainingSecrets from "./sections/TrainingSecrets";
import BecomeAmbassador from "./sections/BecomeAmbassador";
import KeyLessons from "./sections/KeyLessons";
import AmbassadorSlider from "./sections/AmbassadorSlider";
import EndaRunningClub from "./sections/EndaRunningClub";
import ThreeImageBanner from "./sections/ThreeImageBanner";

export default function Page() {
    return (
        <main>
            <TopBar />
            <Navigation />
            <EndaProgramsHero />
            <TrainingSecrets />
            <KeyLessons />
            <BecomeAmbassador />
            <AmbassadorSlider />
            <EndaRunningClub />
            <ThreeImageBanner />
            <WeEndaTogether />
            <Footer />
        </main>
    );
}
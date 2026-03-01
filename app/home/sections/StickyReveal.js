import Image from 'next/image'
import styles from './StickyReveal.module.css'
import ShowcaseSection from './ShowcaseSection'

export default function StickyReveal() {
    return (
        <div className={styles.revealWrapper}>

            {/* Sticky image — sits behind, revealed as grid scrolls away */}
            <div className={styles.stickyBg}>
                <Image
                    src="/images/story-bg.png"
                    alt="ENDA story background"
                    fill
                    className={styles.bgImg}
                    sizes="100vw"
                    priority
                />
            </div>

            {/* Showcase grid — sits on top, scrolls away naturally */}
            <div className={styles.showcaseLayer}>
                <ShowcaseSection />
            </div>

        </div>
    )
}
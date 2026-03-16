import Image from 'next/image'
import styles from './OurStoryHero.module.css'

export default function OurStoryHero() {
    return (
        <section className={styles.hero}>
            <Image
                src="/images/ourstory/hero-bg.png"
                alt="ENDA Our Story"
                fill
                className={`${styles.img} ${styles.desktopImg}`}
                sizes="100vw"
                priority
            />
            <Image
                src="/images/ourstory/hero-bg-mobile-new.png"
                alt="ENDA Our Story (Mobile)"
                fill
                className={`${styles.img} ${styles.mobileImg}`}
                sizes="100vw"
                priority
            />
            <div className={styles.content}>
                <h1 className={styles.heading}>
                    Africa's First Performance Sportswear Brand – Built for the World.
                </h1>
                <p className={styles.sub}>A Movement Beyond Footwear</p>
            </div>
        </section>
    )
}
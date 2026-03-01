import Image from 'next/image'
import styles from './StickyHero.module.css'

export default function StickyHero() {
    return (
        <div className={styles.stickyWrapper}>
            <div className={styles.stickyHero}>
                <Image
                    src="/images/story-bg.png"
                    alt="ENDA story"
                    fill
                    className={styles.img}
                    sizes="100vw"
                    priority
                />
            </div>
        </div>
    )
}
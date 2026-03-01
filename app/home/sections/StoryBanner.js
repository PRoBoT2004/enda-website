import Image from 'next/image'
import styles from './StoryBanner.module.css'

export default function StoryBanner() {
    return (
        <div className={styles.storyBanner}>
            <Image
                src="/images/story-bg.png"
                alt="ENDA story"
                fill
                className={styles.img}
                sizes="100vw"
                priority
            />
        </div>
    )
}
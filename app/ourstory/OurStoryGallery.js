// OurStoryGallery.js
import Image from 'next/image'
import styles from './OurStoryGallery.module.css'

export default function OurStoryGallery() {
    return (
        <section className={styles.section}>
            <div className={styles.gallery}>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/images/ourstory/gallery-1.png"
                        alt="Enda Day 1"
                        fill
                        className={styles.img}
                        sizes="(max-width: 768px) 50vw, 25vw"
                    />
                </div>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/images/ourstory/gallery-2.png"
                        alt="Enda Day 2"
                        fill
                        className={styles.img}
                        sizes="(max-width: 768px) 50vw, 25vw"
                    />
                </div>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/images/ourstory/gallery-3.png"
                        alt="Enda Harlem 1"
                        fill
                        className={styles.img}
                        sizes="(max-width: 768px) 50vw, 25vw"
                    />
                </div>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/images/ourstory/gallery-4.png"
                        alt="Enda Harlem 2"
                        fill
                        className={styles.img}
                        sizes="(max-width: 768px) 50vw, 25vw"
                    />
                </div>
            </div>
        </section>
    )
}
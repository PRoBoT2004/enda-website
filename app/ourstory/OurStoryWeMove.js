// OurStoryWeMove.js
import Image from 'next/image'
import styles from './OurStoryWeMove.module.css'

export default function OurStoryWeMove() {
    return (
        <section className={styles.section}>
            <div className={styles.imageWrapper}>
                <Image
                    src="/images/ourstory/we-move.png"
                    alt="We Move"
                    fill
                    className={styles.img}
                    sizes="100vw"
                />
            </div>
        </section>
    )
}
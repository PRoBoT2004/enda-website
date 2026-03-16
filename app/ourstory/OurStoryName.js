// OurStoryName.js
import Image from 'next/image'
import styles from './OurStoryName.module.css'

export default function OurStoryName() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.topRow}>
                    <div className={styles.titleColumn}>
                        <h2 className={styles.title}>
                            WHAT'S IN A NAME?
                        </h2>
                    </div>
                    <div className={styles.imageColumn}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/images/ourstory/enda-runner.png"
                                alt="Enda means Go in Kiswahili"
                                fill
                                className={styles.img}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.bottomRow}>
                    <div className={styles.spacer}></div>
                    <div className={styles.contentColumn}>

                        <div className={styles.textContent}>
                            <p className={styles.paragraph}>
                                A language spoken widely across Eastern and Central Africa. It's a call to action, a command, an energy-filled moment in sports when fans cheer their athlete across the finish line, into the goal, or onto the podium.
                            </p>
                            <p className={styles.paragraph}>
                                It's the embodiment of motion, progress, and purpose, values that define everything we create at Enda.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
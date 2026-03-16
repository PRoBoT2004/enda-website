// OurStorySymbol.js
import Image from 'next/image'
import styles from './OurStorySymbol.module.css'

export default function OurStorySymbol() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.titleColumn}>
                    <h2 className={styles.title}>
                        THE STORY BEHIND<br />
                        THE SYMBOL
                    </h2>
                </div>
                <div className={styles.contentColumn}>
                    {/* Top: Headline + Spear Image */}
                    <div className={styles.topArea}>
                        {/* <h3 className={styles.headline}>
                            <span className={styles.light}>The </span>
                            <span className={styles.boldItalic}>tip of a spear</span>
                        </h3> */}
                        <div className={styles.spearWrapper}>
                            <Image
                                src="/images/ourstory/spear.svg"
                                alt="Spear Logo"
                                fill
                                className={styles.spearImg}
                            />
                        </div>
                    </div>

                    {/* Intro Text */}
                    <p className={styles.introText}>
                        Our logo, shaped like the tip of a spear, represents
                    </p>

                    {/* Three Columns */}
                    <div className={styles.threeColumns}>
                        <div className={styles.column}>
                            <div className={styles.columnHeader}>
                                <h4 className={styles.columnTitle}>
                                    Progress &<br />Determination
                                </h4>
                                <Image
                                    src="/images/ourstory/arrow.svg"
                                    alt=""
                                    width={32}
                                    height={16}
                                    className={styles.arrow}
                                />
                            </div>
                            <p className={styles.columnText}>
                                The constant pursuit of better performance.
                            </p>
                        </div>
                        <div className={styles.column}>
                            <div className={styles.columnHeader}>
                                <h4 className={styles.columnTitle}>
                                    Cultural<br />Identity
                                </h4>
                                <Image
                                    src="/images/ourstory/arrow.svg"
                                    alt=""
                                    width={32}
                                    height={16}
                                    className={styles.arrow}
                                />
                            </div>
                            <p className={styles.columnText}>
                                Honoring Kenya's sporting legacy while looking toward the future.
                            </p>
                        </div>
                        <div className={styles.column}>
                            <div className={styles.columnHeader}>
                                <h4 className={styles.columnTitle}>
                                    Fluid<br />Motion
                                </h4>
                                <Image
                                    src="/images/ourstory/arrow.svg"
                                    alt=""
                                    width={32}
                                    height={16}
                                    className={styles.arrow}
                                />
                            </div>
                            <p className={styles.columnText}>
                                Designed to move with you, seamlessly and powerfully.
                            </p>
                        </div>
                    </div>

                    {/* Bottom Text */}
                    <p className={styles.bottomText}>
                        Every detail reflects our commitment to being more than just another sportswear brand—we are a symbol of ambition, excellence, and forward motion.
                    </p>
                </div>
            </div>
        </section>
    )
}
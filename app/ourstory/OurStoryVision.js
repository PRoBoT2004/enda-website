// OurStoryVision.js
import styles from './OurStoryVision.module.css'

export default function OurStoryVision() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.titleColumn}>
                    <h2 className={styles.title}>
                        THE VISION<br />
                        THAT STARTED IT ALL
                    </h2>
                </div>
                <div className={styles.contentColumn}>
                    <p className={styles.paragraph}>
                        <span className={styles.regular}>In 2015, Navalayo 'Nava' Osembo and Weldon Kennedy met with a shared dream: to elevate Kenya's influence in the global running industry beyond talent—to product innovation and ownership. They saw an opportunity to bring </span>
                        <span className={styles.bold}>Kenyan-designed running shoes</span>
                        <span className={styles.regular}> to the world while ensuring </span>
                        <span className={styles.bold}>Kenya benefits economically from its running heritage</span>
                        <span className={styles.regular}>.</span>
                    </p>
                    <p className={styles.paragraph}>
                        <span className={styles.regular}>With </span>
                        <span className={styles.bold}>over 1,000 backers worldwide</span>
                        <span className={styles.regular}>, Enda's 2016 crowdfunding campaign was a success, marking the launch of </span>
                        <span className={styles.bold}>Kenya's first-ever performance running shoe: the Iten</span>
                        <span className={styles.regular}>. The goal was simple—blend world-class performance with ethical production, all inspired by Kenya's running excellence."</span>
                    </p>
                </div>
            </div>
        </section>
    )
}
// app/shoe-guide/sections/ShoeGuideCommunity.js
import styles from './ShoeGuideCommunity.module.css'

export default function ShoeGuideCommunity() {
    return (
        <section className={styles.section}>
            <img
                src="/images/shoe-guide/community.png"
                alt="Join the Enda Community"
                className={styles.image}
            />
            <div className={styles.overlay}>
                <h2 className={styles.heading}>Join the Enda Community!</h2>
                <p className={styles.body}>
                    Sign up for our newsletter and be the first to know about new product releases, exclusive offers, and the latest updates from Enda. Whether you're a seasoned runner or just starting out, we've got the tips and gear to help you reach your goals.
                </p>
                <a href="/newsletter" className={styles.cta}>Subscribe Now</a>
            </div>
        </section>
    )
}
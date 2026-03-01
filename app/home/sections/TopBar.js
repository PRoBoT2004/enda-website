'use client'
import styles from './TopBar.module.css'
import Image from 'next/image'

export default function TopBar() {
    return (
        <div className={styles.background}>
            {/* Left: Sign up text with arrow */}
            <div className={styles.leftContent}>
                <span className={styles.signUpText}>SIGN UP & GET 10% OFF</span>
                <img
                    className={styles.arrowIcon}
                    src="/images/topbar/group-2.svg"
                    alt=""
                />
            </div>

            {/* Center: Promo text */}
            <div className={styles.centerContent}>
                <span className={styles.promoText}>
                    Buy 2, Save an extra 20%! Exclusive Offer on Curated Picks this March!
                </span>
            </div>

            {/* Right: Links + Flag */}
            <div className={styles.rightContent}>
                <span className={styles.navLink}>Help</span>
                <span className={styles.navLink}>Order Tracking</span>
                <span className={styles.navLink}>Join The Club</span>

                <div className={styles.flagWrapper}>
                    <Image
                        src="/images/topbar/flag.svg"
                        alt="Kenya"
                        width={24}
                        height={24}
                        className={styles.flagIcon}
                    />
                </div>
            </div>
        </div>
    )
}
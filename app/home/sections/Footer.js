import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>

            {/* ══════════════════════════════════════════
                MAIN FOOTER CONTENT
            ══════════════════════════════════════════ */}
            <div className={styles.main}>

                {/* ── Col 1: Brand ── */}
                <div className={styles.brand}>
                    <div className={styles.logoWrap}>
                        <Image
                            src="/images/footer/logo.png"
                            alt="ENDA"
                            fill
                            className={styles.logoImg}
                            sizes="12vw"
                        />
                    </div>
                    <p className={styles.tagline}>
                        From the heart of Kenya to runners worldwide, Enda is more than a
                        shoe—it's a movement. Step into performance, culture, and community.
                    </p>
                    <div className={styles.bcorp}>
                        <Image
                            src="/images/footer/bcorp.png"
                            alt="B Corp Certified"
                            fill
                            className={styles.bcorpImg}
                            sizes="10vw"
                        />
                    </div>
                </div>

                {/* ── Col 2: Shop ── */}
                <div className={styles.linkCol}>
                    <h3 className={styles.colHead}>Shop</h3>
                    <a href="#" className={styles.link}>Casual</a>
                    <a href="#" className={styles.link}>Elegance</a>
                    <a href="#" className={styles.link}>Collections</a>
                    <a href="#" className={styles.link}>Lookbook</a>
                </div>

                {/* ── Col 3: Company ── */}
                <div className={styles.linkCol}>
                    <h3 className={styles.colHead}>Company</h3>
                    <a href="/ourstory" className={styles.link}>Our Story</a>
                    <a href="#" className={styles.link}>Journal</a>
                    <a href="#" className={styles.link}>Customer Care</a>
                    <a href="#" className={styles.link}>Stores</a>
                </div>

                {/* ── Col 4: Services ── */}
                <div className={styles.linkCol}>
                    <h3 className={styles.colHead}>Services</h3>
                    <a href="#" className={styles.link}>Packaging</a>
                    <a href="#" className={styles.link}>Personalization</a>
                    <a href="#" className={styles.link}>Gifts</a>
                </div>

                {/* ── Col 5: Legal ── */}
                <div className={styles.linkCol}>
                    <h3 className={styles.colHead}>Legal</h3>
                    <a href="#" className={styles.link}>Privacy policy</a>
                    <a href="#" className={styles.link}>Refund policy</a>
                    <a href="#" className={styles.link}>Terms of service</a>
                </div>

                {/* ── Col 6: Newsletter + Social ── */}
                <div className={styles.newsletter}>
                    <h3 className={styles.colHead}>Subscribe to our Newsletter</h3>

                    <div className={styles.inputRow}>
                        <input
                            type="email"
                            placeholder="Your E-mail"
                            className={styles.emailInput}
                        />
                        <button className={styles.subscribeBtn}>Subscribe</button>
                    </div>

                    {/* Social icons */}
                    <div className={styles.social}>
                        <a href="#" className={styles.socialLink} aria-label="Facebook">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="#4d4d4d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </a>
                        <a href="#" className={styles.socialLink} aria-label="Instagram">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="#4d4d4d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="#4d4d4d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="#4d4d4d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </a>
                        <a href="#" className={styles.socialLink} aria-label="YouTube">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" stroke="#4d4d4d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" stroke="#4d4d4d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </a>
                        <a href="#" className={styles.socialLink} aria-label="X / Twitter">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4l16 16M20 4L4 20" stroke="#4d4d4d" strokeWidth="1.5" strokeLinecap="round" /></svg>
                        </a>
                        <a href="#" className={styles.socialLink} aria-label="Strava">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 20l4-8 4 8M13 14h2" stroke="#4d4d4d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </a>
                    </div>
                </div>

            </div>

            {/* ══════════════════════════════════════════
                BOTTOM BAR
            ══════════════════════════════════════════ */}
            <div className={styles.bottom}>
                <div className={styles.bottomLeft}>
                    <span className={styles.bottomText}>United States Dollar (USD $)</span>
                    <span className={styles.separator}>•</span>
                    <span className={styles.bottomText}>English</span>
                    <span className={styles.separator}>•</span>
                    <span className={styles.bottomText}>© 2025 ENDA</span>
                </div>
                <div className={styles.payments}>
                    {/* Payment icons — inline SVG placeholders matching Visa, MC, Amex, PayPal, Diners, Discover */}
                    <span className={styles.payIcon}>VISA</span>
                    <span className={styles.payIcon}>MC</span>
                    <span className={styles.payIcon}>AMEX</span>
                    <span className={styles.payIcon}>PP</span>
                    <span className={styles.payIcon}>DC</span>
                    <span className={styles.payIcon}>DISC</span>
                </div>
            </div>

        </footer>
    )
}
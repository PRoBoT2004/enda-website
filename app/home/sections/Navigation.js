// app/components/Navigation/Navigation.js
'use client'
import { useState, useEffect } from 'react'
import styles from './Navigation.module.css'
import Image from 'next/image'
import Link from 'next/link'

const menuItems = [
    { name: 'Men', href: '/mens' },
    { name: 'Women', href: '/womens' },
    { name: 'Enda Programs', href: '/enda-programs' },
    { name: 'Our Impact', href: '/our-impact' },
    { name: 'Our Story', href: '/ourstory' },
    { name: 'Shoe Guide', href: '/shoe-guide' },
    { name: 'Sale', href: '/sale' },
    { name: 'News', href: '/news' },
]

export default function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    // Subtle bg tint on scroll so links stay readable
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

    return (
        <>
            <nav className={`${styles.navigation} ${scrolled ? styles.scrolled : ''}`}>

                {/* Logo */}
                <Link href="/" className={styles.logoWrapper}>
                    <Image
                        src="/images/navigation/logo.png"
                        alt="ENDA"
                        width={131}
                        height={69}
                        className={styles.logo}
                        priority
                    />
                </Link>

                {/* Desktop menu */}
                <ul className={styles.menuList}>
                    {menuItems.map((item) => (
                        <li key={item.name} className={styles.menuItem}>
                            <Link href={item.href} className={styles.menuLink}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Icons */}
                <div className={styles.iconsWrapper}>
                    <button className={styles.iconButton} aria-label="Search">
                        <Image src="/images/navigation/search-icon.svg" alt="" width={27} height={29} />
                    </button>

                    <button className={`${styles.iconButton} ${styles.desktopOnly}`} aria-label="Account">
                        <Image src="/images/navigation/user-icon.svg" alt="" width={29} height={29} />
                    </button>

                    <button className={styles.iconButton} aria-label="Cart">
                        <Image src="/images/navigation/cart-icon.svg" alt="" width={26} height={29} />
                    </button>

                    {/* Hamburger — mobile only */}
                    <button
                        className={`${styles.iconButton} ${styles.hamburger}`}
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? (
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                            </svg>
                        ) : (
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                <path d="M3 6H21M3 12H21M3 18H21" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile fullscreen menu */}
            <div
                className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
                aria-hidden={!menuOpen}
            >
                <ul className={styles.mobileMenuList}>
                    {menuItems.map((item, i) => (
                        <li
                            key={item.name}
                            className={styles.mobileMenuItem}
                            style={{ '--i': i }}
                        >
                            <Link
                                href={item.href}
                                className={styles.mobileMenuLink}
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Backdrop */}
            {menuOpen && (
                <div
                    className={styles.backdrop}
                    onClick={() => setMenuOpen(false)}
                />
            )}
        </>
    )
}
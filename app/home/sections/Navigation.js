'use client'
import { useState } from 'react'
import styles from './Navigation.module.css'
import Image from 'next/image'

export default function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false)

    const menuItems = [
        { name: 'New Arrivals', href: '/new-arrivals' },
        { name: "Men's Collection", href: '/mens' },
        { name: "Women's Collection", href: '/womens' },
        { name: 'Running Shoes', href: '/running' },
        { name: 'Our Story', href: '/story' },
        { name: 'Journal', href: '/journal' },
        { name: 'Locate a Store', href: '/stores' },
    ]

    return (
        <>
            <nav className={styles.navigation}>

                {/* Logo */}
                <div className={styles.logoWrapper}>
                    <Image
                        src="/images/navigation/logo.png"
                        alt="ENDA"
                        width={131}
                        height={69}
                        className={styles.logo}
                        priority
                    />
                </div>

                {/* Desktop menu */}
                <ul className={styles.menuList}>
                    {menuItems.map((item) => (
                        <li key={item.name} className={styles.menuItem}>
                            <a href={item.href} className={styles.menuLink}>
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Icons */}
                <div className={styles.iconsWrapper}>

                    <button className={styles.iconButton} aria-label="Search">
                        <Image src="/images/navigation/search-icon.svg" alt="Search" width={27} height={29} />
                    </button>

                    {/* User icon: desktop only */}
                    <button className={`${styles.iconButton} ${styles.desktopOnly}`} aria-label="Account">
                        <Image src="/images/navigation/user-icon.svg" alt="Account" width={29} height={29} />
                    </button>

                    <button className={styles.iconButton} aria-label="Cart">
                        <Image src="/images/navigation/cart-icon.svg" alt="Cart" width={26} height={29} />
                    </button>

                    {/* Hamburger: mobile only */}
                    <button
                        className={`${styles.iconButton} ${styles.hamburger}`}
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                            </svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M3 6H21M3 12H21M3 18H21" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile dropdown */}
            <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
                <ul className={styles.mobileMenuList}>
                    {menuItems.map((item) => (
                        <li key={item.name} className={styles.mobileMenuItem}>
                            <a
                                href={item.href}
                                className={styles.mobileMenuLink}
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
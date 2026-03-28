'use client'

// app/products/[slug]/sections/StickyAddToCart.js
import { useState, useEffect, useRef } from 'react'
import { IoChevronUp } from 'react-icons/io5'
import styles from './StickyAddToCart.module.css'

export default function StickyAddToCart({ product }) {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 600)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className={`${styles.bar} ${visible ? styles.barVisible : ''}`}>
            {/* Left — thumbnail + name + price */}
            <div className={styles.left}>
                <img
                    src={product.images[0]}
                    alt={product.name}
                    className={styles.thumb}
                />
                <div className={styles.info}>
                    <p className={styles.name}>{product.name} - {product.subtitle}</p>
                    <p className={styles.price}>${product.price}.00</p>
                </div>
            </div>

            {/* Right — color selector + add to cart */}
            <div className={styles.right}>
                <button className={styles.colorBtn}>
                    <span className={styles.colorLabel}>
                        {product.name} color: {product.colors[0].name}
                    </span>
                    <IoChevronUp className={styles.chevron} />
                </button>
                <button className={styles.addToCart}>Add to Cart</button>
            </div>
        </div>
    )
}
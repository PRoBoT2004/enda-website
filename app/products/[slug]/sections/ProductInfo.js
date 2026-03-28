'use client'

// app/products/[slug]/sections/ProductInfo.js
import { useState } from 'react'
import { FiEye } from 'react-icons/fi'
import { PiTruck, PiArrowCounterClockwise } from 'react-icons/pi'
import SizeGuideModal from './SizeGuideModal'
import styles from './ProductInfo.module.css'

export default function ProductInfo({ product }) {
    const [selectedSize, setSelectedSize] = useState(null)
    const [selectedColor, setSelectedColor] = useState(product.colors[0].name)
    const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false)

    return (
        <>
            <div className={styles.sticky}>
                <div className={styles.inner}>

                    {/* Rating */}
                    <div className={styles.ratingRow}>
                        {Array.from({ length: 5 }).map((_, i) => (
                            <span key={i} className={i < Math.round(product.rating) ? styles.starFilled : styles.starEmpty}>★</span>
                        ))}
                        <span className={styles.reviewCount}>({product.reviewCount})</span>
                    </div>

                    {/* Name + price */}
                    <div className={styles.namePrice}>
                        <h1 className={styles.name}>{product.name} - {product.subtitle}</h1>
                        <p className={styles.price}>${product.price}.00</p>
                    </div>

                    {/* Stock */}
                    <p className={styles.stock}>{product.stock} in Stock, Ready to Ship</p>

                    {/* Color swatches */}
                    <div className={styles.colorSwatches}>
                        {product.colors.map((c) => (
                            <button
                                key={c.name}
                                className={`${styles.swatch} ${selectedColor === c.name ? styles.swatchActive : ''}`}
                                onClick={() => setSelectedColor(c.name)}
                                aria-label={c.name}
                            >
                                <img src={c.swatch} alt={c.name} className={styles.swatchImage} />
                            </button>
                        ))}
                    </div>

                    {/* Size grid */}
                    <div className={styles.sizeGrid}>
                        {product.sizes.map((size) => (
                            <button
                                key={size}
                                className={`${styles.sizeBtn} ${selectedSize === size ? styles.sizeBtnActive : ''}`}
                                onClick={() => setSelectedSize(size)}
                            >
                                {size}
                            </button>
                        ))}
                    </div>

                    {/* Size guide */}
                    <button 
                        onClick={(e) => {
                            e.preventDefault();
                            setIsSizeGuideOpen(true);
                        }} 
                        className={styles.sizeGuide}
                    >
                        Size Guide
                    </button>

                    {/* Watching */}
                    <p className={styles.watching}>
                        <FiEye className={styles.watchIcon} />
                        {product.watchingNow} People Watching Now!
                    </p>

                    {/* CTAs */}
                    <div className={styles.ctas}>
                        <button className={styles.addToCart}>Add to Cart</button>
                        <button className={styles.buyNow}>Buy Now</button>
                    </div>

                    {/* Shipping */}
                    <div className={styles.shippingInfo}>
                        <p className={styles.shippingItem}>
                            <PiTruck className={styles.shippingIcon} />
                            Free shipping on orders above $50
                        </p>
                        <p className={styles.shippingItem}>
                            <PiArrowCounterClockwise className={styles.shippingIcon} />
                            Easy 30-day returns
                        </p>
                    </div>

                </div>
            </div>
            <SizeGuideModal 
                isOpen={isSizeGuideOpen} 
                onClose={() => setIsSizeGuideOpen(false)} 
            />
        </>
    )
}
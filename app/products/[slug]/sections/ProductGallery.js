// app/products/[slug]/sections/ProductGallery.js
import styles from './ProductGallery.module.css'

export default function ProductGallery({ images, name }) {
    return (
        <div className={styles.gallery}>
            {/* Row 1 — two equal images */}
            <div className={styles.row1}>
                <div className={styles.imgWrap}>
                    <img src={images[0]} alt={name} className={styles.image} />
                </div>
                <div className={styles.imgWrap}>
                    <img src={images[1]} alt={`${name} view 2`} className={styles.image} />
                </div>
            </div>

            {/* Row 2 — small left + wide right */}
            <div className={styles.row2}>
                <div className={styles.imgWrapSmall}>
                    <img src={images[2]} alt={`${name} view 3`} className={styles.image} />
                </div>
                <div className={styles.imgWrapWide}>
                    <img src={images[3]} alt={`${name} view 4`} className={styles.image} />
                </div>
            </div>

            {/* Row 3 — full width tall */}
            <div className={styles.row3}>
                <div className={styles.imgWrapFull}>
                    <img src={images[4]} alt={`${name} view 5`} className={styles.image} />
                </div>
            </div>
        </div>
    )
}
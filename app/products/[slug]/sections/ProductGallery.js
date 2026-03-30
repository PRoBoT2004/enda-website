// app/products/[slug]/sections/ProductGallery.js
import styles from './ProductGallery.module.css'

export default function ProductGallery({ images, name }) {
    if (!images || images.length === 0) return null;

    return (
        <div className={styles.gallery}>
            {/* Row 1 — two equal images, or one full-width if alone */}
            <div 
                className={styles.row1}
                style={images.length === 1 ? { gridTemplateColumns: '1fr' } : {}}
            >
                {images[0] && (
                    <div className={images.length === 1 ? styles.imgWrapFull : styles.imgWrap}>
                        <img src={images[0]} alt={name} className={styles.image} />
                    </div>
                )}
                {images[1] && (
                    <div className={styles.imgWrap}>
                        <img src={images[1]} alt={`${name} view 2`} className={styles.image} />
                    </div>
                )}
            </div>

            {/* Row 2 — small left + wide right */}
            {(images[2] || images[3]) && (
                <div 
                    className={styles.row2}
                    style={(!images[2] || !images[3]) ? { gridTemplateColumns: '1fr', gridTemplateRows: 'auto' } : {}}
                >
                    {images[2] && (
                        <div className={!images[3] ? styles.imgWrapFull : styles.imgWrapSmall}>
                            <img src={images[2]} alt={`${name} view 3`} className={styles.image} />
                        </div>
                    )}
                    {images[3] && (
                        <div className={!images[2] ? styles.imgWrapFull : styles.imgWrapWide}>
                            <img src={images[3]} alt={`${name} view 4`} className={styles.image} />
                        </div>
                    )}
                </div>
            )}

            {/* Row 3 — full width tall */}
            {images[4] && (
                <div className={styles.row3}>
                    <div className={styles.imgWrapFull}>
                        <img src={images[4]} alt={`${name} view 5`} className={styles.image} />
                    </div>
                </div>
            )}
        </div>
    )
}
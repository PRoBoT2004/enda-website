'use client'

// app/products/[slug]/sections/SizeGuideModal.js
import { useEffect } from 'react'
import { IoClose } from 'react-icons/io5'
import { useState } from 'react'
import styles from './SizeGuideModal.module.css'

const sizeData = [
    { enda: '36.5', us: '4', uk: '3.5', eu: '36' },
    { enda: '37', us: '4.5', uk: '4', eu: '36 2/3' },
    { enda: '37.5', us: '5', uk: '4.5', eu: '37 1/3' },
    { enda: '38', us: '5.5', uk: '5', eu: '38' },
    { enda: '38.5', us: '6', uk: '5.5', eu: '38 2/3' },
    { enda: '39', us: '6.5', uk: '6', eu: '39 1/3' },
    { enda: '39.5', us: '7', uk: '6.5', eu: '40' },
    { enda: '40', us: '7.5', uk: '7', eu: '40 2/3' },
    { enda: '40.5', us: '8', uk: '7.5', eu: '41 1/3' },
    { enda: '41', us: '8.5', uk: '8', eu: '42' },
    { enda: '41.5', us: '9', uk: '8.5', eu: '42 2/3' },
    { enda: '42', us: '9.5', uk: '9', eu: '43 1/3' },
]

export default function SizeGuideModal({ isOpen, onClose }) {
    const [unit, setUnit] = useState('inches')

    // Lock body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => { document.body.style.overflow = '' }
    }, [isOpen])

    // Close on Escape
    useEffect(() => {
        const handler = (e) => { if (e.key === 'Escape') onClose() }
        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)
    }, [onClose])

    return (
        <>
            {/* Backdrop */}
            <div
                className={`${styles.backdrop} ${isOpen ? styles.backdropVisible : ''}`}
                onClick={onClose}
            />

            {/* Panel */}
            <div className={`${styles.panel} ${isOpen ? styles.panelOpen : ''}`} role="dialog" aria-modal="true" aria-label="Size Guide">

                {/* Close button */}
                <button className={styles.closeBtn} onClick={onClose} aria-label="Close size guide">
                    <IoClose className={styles.closeIcon} />
                </button>

                <div className={styles.content}>
                    <h2 className={styles.title}>Footware sizing</h2>

                    {/* Unit toggle */}
                    <div className={styles.toggle}>
                        <button
                            className={`${styles.toggleBtn} ${unit === 'inches' ? styles.toggleActive : ''}`}
                            onClick={() => setUnit('inches')}
                        >
                            Inches
                        </button>
                        <button
                            className={`${styles.toggleBtn} ${unit === 'cm' ? styles.toggleActive : ''}`}
                            onClick={() => setUnit('cm')}
                        >
                            CM
                        </button>
                    </div>

                    {/* Size table */}
                    <div className={styles.tableWrap}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th className={styles.th}>Enda</th>
                                    <th className={styles.th}>US</th>
                                    <th className={styles.th}>UK</th>
                                    <th className={styles.th}>EU</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sizeData.map((row, i) => (
                                    <tr key={row.enda} className={i % 2 === 0 ? styles.rowDark : styles.rowLight}>
                                        <td className={`${styles.td} ${styles.tdBold}`}>{row.enda}</td>
                                        <td className={styles.td}>{row.us}</td>
                                        <td className={styles.td}>{row.uk}</td>
                                        <td className={styles.td}>{row.eu}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Fit Guide */}
                    <div className={styles.fitGuide}>
                        <h3 className={styles.fitTitle}>Fit Guide</h3>
                        <p className={styles.fitText}>For a snug fit: Choose your regular size</p>
                        <p className={styles.fitText}>For extra space: Go half a size up</p>
                    </div>
                </div>
            </div>
        </>
    )
}
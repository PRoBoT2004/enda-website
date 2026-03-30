import TopBar from '@/app/home/sections/TopBar'
import Navigation from '@/app/home/sections/Navigation'
import Footer from '@/app/home/sections/Footer'
import Link from 'next/link'
import { products } from '../../data/products'
import styles from './page.module.css'

export default function WomensPage() {
    // Filter by gender field
    const womensProducts = products.filter(p => p.gender === 'women')
    
    return (
        <main className={styles.main}>
            <TopBar />
            <Navigation />
            
            <section className={styles.section}>
                <h1 className={styles.heading}>Women's Collection</h1>
                
                <div className={styles.grid}>
                    {womensProducts.length > 0 ? (
                        womensProducts.map(product => (
                            <Link key={product.slug} href={`/products/${product.slug}`} className={styles.card}>
                                <div className={styles.imageWrap}>
                                    <img src={product.images?.[0] || product.image} alt={product.name} className={styles.image} />
                                </div>
                                <div className={styles.info}>
                                    <h2 className={styles.name}>{product.name} {product.subtitle ? `- ${product.subtitle}` : ''}</h2>
                                    <p className={styles.price}>${product.price}.00</p>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <p style={{ color: '#fff', gridColumn: '1 / -1', textAlign: 'center', opacity: 0.7 }}>
                            More women's products coming soon!
                        </p>
                    )}
                </div>
            </section>
            
            <Footer />
        </main>
    )
}

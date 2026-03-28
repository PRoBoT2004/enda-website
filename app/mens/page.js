import TopBar from '@/app/home/sections/TopBar'
import Navigation from '@/app/home/sections/Navigation'
import Footer from '@/app/home/sections/Footer'
import Link from 'next/link'
import { products } from '../../data/products'
import styles from './page.module.css'

export default function MensPage() {
    // Assuming the first product in our data is a men's product
    const mensProducts = products.filter(p => p.slug.includes('-men-'))
    
    return (
        <main className={styles.main}>
            <TopBar />
            <Navigation />
            
            <section className={styles.section}>
                <h1 className={styles.heading}>Men's Collection</h1>
                
                <div className={styles.grid}>
                    {mensProducts.map(product => (
                        <Link key={product.slug} href={`/products/${product.slug}`} className={styles.card}>
                            <div className={styles.imageWrap}>
                                <img src={product.images[0]} alt={product.name} className={styles.image} />
                            </div>
                            <div className={styles.info}>
                                <h2 className={styles.name}>{product.name} - {product.subtitle}</h2>
                                <p className={styles.price}>${product.price}.00</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
            
            <Footer />
        </main>
    )
}

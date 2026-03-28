import { getProductBySlug, products } from '../../../data/products'
import { notFound } from 'next/navigation'
import ProductGallery from './sections/ProductGallery'
import ProductInfo from './sections/ProductInfo'
import MaterialInsights from './sections/MaterialInsights'
import PerformanceBenefits from './sections/PerformanceBenefits'
import ProductReviews from './sections/ProductReviews'
import RelatedProducts from './sections/RelatedProducts'
import CustomerImages from './sections/CustomerImages'
import StickyAddToCart from './sections/StickyAddToCart'
import styles from './page.module.css'
import TopBar from '@/app/home/sections/TopBar'
import Navigation from '@/app/home/sections/Navigation'
import WeEndaTogether from './sections/WeEndaTogether'
import Footer from '@/app/home/sections/Footer'



export async function generateStaticParams() {
    return products.map((p) => ({ slug: p.slug }))
}

export default async function ProductPage({ params }) {
    const { slug } = await params
    const product = getProductBySlug(slug)
    if (!product) notFound()

    return (
        <main className={styles.page}>
            {/* Sticky gallery + info */}
            <TopBar />
            <Navigation />
            <div className={styles.pdpGrid}>
                <ProductGallery images={product.images} name={product.name} />
                <ProductInfo product={product} />
            </div>

            {/* Below the fold — full width, scrolls normally */}
            <MaterialInsights insights={product.materialInsights} />
            <PerformanceBenefits benefits={product.performanceBenefits} />
            <ProductReviews reviews={product.reviews} rating={product.rating} count={product.reviewCount} />
            <RelatedProducts products={product.relatedProducts} />
            <CustomerImages />
            <WeEndaTogether />
            <Footer />
            <StickyAddToCart product={product} />
        </main>
    )
}
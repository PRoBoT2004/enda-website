// data/products.js

export const products = [
    {
        slug: 'lapatet-men-rainbow-runner',
        name: 'Lapatet',
        subtitle: 'Men - Rainbow Runner',
        price: 130,
        currency: 'USD',
        rating: 4.5,
        reviewCount: 6,
        stock: 5,
        watchingNow: 24,
        colors: [
            { name: 'Rainbow', value: 'rainbow', swatch: '/images/products/lapatet-rainbow-swatch.png' },
        ],
        sizes: [
            '36.5', '37', '37.5', '38', '38.5', '39',
            '39.5', '40', '40.5', '41', '41.5', '42',
        ],
        images: [
            '/images/products/lapatet-rainbow-1.png',
            '/images/products/lapatet-rainbow-2.png',
            '/images/products/lapatet-rainbow-3.png',
            '/images/products/lapatet-rainbow-4.png',
            '/images/products/lapatet-rainbow-5.png',
        ],
        materialInsights: [
            {
                title: 'EVA Composition',
                body: 'Engineered to provide superior cushioning and energy return. Each step absorbs impact, ensuring a smooth and comfortable ride.',
                image: '/images/products/material-eva.png',
            },
            {
                title: 'Breathability',
                body: 'Featuring a lightweight mesh upper that promotes airflow, keeping your feet cool and dry, even during intense runs.',
                image: '/images/products/material-breathability.png',
            },
            {
                title: 'Durability',
                body: 'Reinforced outsole designed to handle high mileage with ease.',
                image: '/images/products/material-durability.png',
            },
        ],
        performanceBenefits: {
            weight: '2000 gm',
            idealFor: 'Daily training, long-distance runs, and speed work.',
            stats: [
                { icon: '/images/products/icon-energy.svg', label: 'Energy Return', value: '+20%' },
                { icon: '/images/products/icon-breathability.svg', label: 'Breathability', value: 'High Airflow Mesh' },
                { icon: '/images/products/icon-durability.svg', label: 'Durability', value: 'Tested for 500+ miles' },
            ],
        },
        reviews: [
            {
                id: 1,
                author: 'Emily R',
                title: 'Another great pair',
                date: '11 March 2025',
                rating: 5,
                verified: true,
                body: "This is my first pair of the redesigned Lapatet and I'm a big fan. Tongueless and a snug fit, I've already put some good miles on them in the first week since they arrived and they look FANTASTIC. thanks for another great pair!",
            },
        ],
        relatedProducts: [
            {
                slug: 'lapatet-women-blue',
                name: 'New Lapatet women Blue',
                price: 145,
                badge: 'New',
                image: '/images/products/lapatet-women-blue.png',
            },
            {
                slug: 'lapatet-men-rainbow-runner',
                name: 'Lapatet - Men - Rainbow Runner',
                price: 130,
                image: '/images/products/lapatet-rainbow-thumb.png',
            },
            {
                slug: 'lapatet-men-kambu',
                name: 'Lapatet - Men - Kambu (White & Red Sole)',
                price: 70,
                originalPrice: 120,
                badge: 'Sale 60%',
                image: '/images/products/lapatet-kambu.png',
            },
            {
                slug: 'iten-men-samburu',
                name: 'Iten - Men - Samburu',
                price: 125,
                image: '/images/products/iten-samburu.png',
            },
        ],
    },
    {
        slug: 'lapatet-women-blue',
        name: 'Lapatet',
        subtitle: 'Women - Blue',
        price: 145,
        currency: 'USD',
        rating: 4.8,
        reviewCount: 4,
        stock: 3,
        watchingNow: 15,
        colors: [
            { name: 'Blue', value: 'blue', swatch: '/images/products/lapatet-women-blue.png' },
        ],
        sizes: [
            '36', '36.5', '37', '37.5', '38', '38.5', '39', '39.5'
        ],
        images: [
            '/images/products/lapatet-women-blue.png',
        ],
        materialInsights: [
            {
                title: 'EVA Composition',
                body: 'Engineered to provide superior cushioning and energy return. Each step absorbs impact, ensuring a smooth and comfortable ride.',
                image: '/images/products/material-eva.png',
            },
            {
                title: 'Breathability',
                body: 'Featuring a lightweight mesh upper that promotes airflow, keeping your feet cool and dry, even during intense runs.',
                image: '/images/products/material-breathability.png',
            },
            {
                title: 'Durability',
                body: 'Reinforced outsole designed to handle high mileage with ease.',
                image: '/images/products/material-durability.png',
            },
        ],
        performanceBenefits: {
            weight: '1800 gm',
            idealFor: 'Daily training, long-distance runs, and speed work.',
            stats: [
                { icon: '/images/products/icon-energy.svg', label: 'Energy Return', value: '+20%' },
                { icon: '/images/products/icon-breathability.svg', label: 'Breathability', value: 'High Airflow Mesh' },
                { icon: '/images/products/icon-durability.svg', label: 'Durability', value: 'Tested for 500+ miles' },
            ],
        },
        reviews: [],
        relatedProducts: [],
    },
]

export function getProductBySlug(slug) {
    return products.find((p) => p.slug === slug) ?? null
}
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const Home = () => {
    const featuredSarees = [
        {
            id: 1,
            name: 'Banarasi Silk Saree',
            price: 299.99,
            image: '/images/banarasi.jpg',
            description: 'Handwoven pure silk saree with intricate zari work',
        },
        {
            id: 2,
            name: 'Kanjivaram Saree',
            price: 399.99,
            image: '/images/kanjivaram.jpg',
            description: 'Traditional South Indian silk saree with temple border',
        },
        {
            id: 3,
            name: 'Chanderi Saree',
            price: 199.99,
            image: '/images/chanderi.jpg',
            description: 'Lightweight and elegant with subtle gold work',
        },
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center">
                <div className="absolute inset-0 bg-gradient-to-r from-dark/80 to-dark/40 z-10" />
                <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center" />
                <div className="container mx-auto px-4 relative z-20">
                    <div className="max-w-2xl">
                        <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
                            Discover the Elegance of Indian Sarees
                        </h1>
                        <p className="text-xl text-white/90 mb-8">
                            Explore our exclusive collection of handcrafted sarees from across India.
                            Each piece tells a story of tradition and craftsmanship.
                        </p>
                        <Link
                            to="/products"
                            className="btn btn-primary inline-flex items-center"
                        >
                            Shop Now
                            <FiArrowRight className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-16 bg-light">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold text-center mb-12">
                        Featured Sarees
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {featuredSarees.map((saree) => (
                            <div
                                key={saree.id}
                                className="bg-white rounded-lg shadow-md overflow-hidden"
                            >
                                <div className="h-64 bg-gray-200">
                                    <img
                                        src={saree.image}
                                        alt={saree.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-serif font-bold mb-2">
                                        {saree.name}
                                    </h3>
                                    <p className="text-gray-600 mb-4">{saree.description}</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-xl font-bold text-primary">
                                            ${saree.price}
                                        </span>
                                        <Link
                                            to={`/products/${saree.id}`}
                                            className="btn btn-secondary"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-serif font-bold mb-6">
                                Our Story
                            </h2>
                            <p className="text-gray-600 mb-4">
                                11Sari was born from a passion for preserving and promoting the
                                rich heritage of Indian sarees. We work directly with skilled
                                artisans across India to bring you authentic, handcrafted sarees
                                that celebrate centuries-old traditions.
                            </p>
                            <p className="text-gray-600">
                                Each saree in our collection is carefully selected for its quality,
                                craftsmanship, and unique story. We believe in sustainable fashion
                                and fair trade practices that support local communities.
                            </p>
                        </div>
                        <div className="h-96 bg-gray-200 rounded-lg">
                            <img
                                src="/images/about.jpg"
                                alt="Artisan at work"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home; 
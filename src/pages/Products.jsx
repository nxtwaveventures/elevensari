import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiFilter, FiSearch } from 'react-icons/fi';

const Products = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortBy, setSortBy] = useState('featured');

    // Sample saree data - in a real app, this would come from an API
    const sarees = [
        {
            id: 1,
            name: 'Banarasi Silk Saree',
            price: 299.99,
            image: '/images/banarasi.jpg',
            category: 'silk',
            description: 'Handwoven pure silk saree with intricate zari work',
        },
        {
            id: 2,
            name: 'Kanjivaram Saree',
            price: 399.99,
            image: '/images/kanjivaram.jpg',
            category: 'silk',
            description: 'Traditional South Indian silk saree with temple border',
        },
        {
            id: 3,
            name: 'Chanderi Saree',
            price: 199.99,
            image: '/images/chanderi.jpg',
            category: 'cotton',
            description: 'Lightweight and elegant with subtle gold work',
        },
        {
            id: 4,
            name: 'Bandhani Saree',
            price: 249.99,
            image: '/images/bandhani.jpg',
            category: 'cotton',
            description: 'Traditional tie-dye saree from Gujarat',
        },
        {
            id: 5,
            name: 'Paithani Saree',
            price: 349.99,
            image: '/images/paithani.jpg',
            category: 'silk',
            description: 'Maharashtrian silk saree with peacock design',
        },
        {
            id: 6,
            name: 'Kalamkari Saree',
            price: 179.99,
            image: '/images/kalamkari.jpg',
            category: 'cotton',
            description: 'Hand-painted cotton saree with mythological motifs',
        },
    ];

    // Filter and sort sarees
    const filteredSarees = sarees
        .filter((saree) => {
            const matchesSearch = saree.name
                .toLowerCase()
                .includes(searchQuery.toLowerCase());
            const matchesCategory =
                selectedCategory === 'all' || saree.category === selectedCategory;
            return matchesSearch && matchesCategory;
        })
        .sort((a, b) => {
            switch (sortBy) {
                case 'price-low':
                    return a.price - b.price;
                case 'price-high':
                    return b.price - a.price;
                case 'name':
                    return a.name.localeCompare(b.name);
                default:
                    return 0;
            }
        });

    return (
        <div className="py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-serif font-bold text-center mb-12">
                    Our Saree Collection
                </h1>

                {/* Search and Filter Section */}
                <div className="mb-8">
                    <div className="flex flex-col md:flex-row gap-4 mb-6">
                        <div className="relative flex-grow">
                            <input
                                type="text"
                                placeholder="Search sarees..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <FiSearch className="absolute right-3 top-3 text-gray-400" />
                        </div>
                        <div className="flex gap-4">
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                                <option value="all">All Categories</option>
                                <option value="silk">Silk</option>
                                <option value="cotton">Cotton</option>
                            </select>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                                <option value="featured">Featured</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="name">Name: A to Z</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredSarees.map((saree) => (
                        <div
                            key={saree.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
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

                {/* No Results Message */}
                {filteredSarees.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-xl text-gray-600">
                            No sarees found matching your criteria.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Products; 
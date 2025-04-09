import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FiShoppingCart, FiHeart, FiShare2 } from 'react-icons/fi';

const ProductDetail = () => {
    const { id } = useParams();
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);

    // Sample saree data - in a real app, this would come from an API
    const saree = {
        id: 1,
        name: 'Banarasi Silk Saree',
        price: 299.99,
        images: [
            '/images/banarasi-1.jpg',
            '/images/banarasi-2.jpg',
            '/images/banarasi-3.jpg',
        ],
        category: 'silk',
        description:
            'This exquisite Banarasi silk saree is handwoven by skilled artisans in Varanasi. The intricate zari work and traditional motifs make it a perfect choice for weddings and special occasions.',
        details: [
            'Pure silk fabric',
            'Handwoven with real zari',
            'Traditional Banarasi motifs',
            'Comes with matching blouse piece',
            'Length: 5.5 meters',
            'Width: 1.1 meters',
        ],
        careInstructions: [
            'Dry clean only',
            'Store in a cool, dry place',
            'Avoid direct sunlight',
            'Use a padded hanger for storage',
        ],
    };

    const handleAddToCart = () => {
        // In a real app, this would add the item to the cart
        console.log('Added to cart:', { saree, quantity });
    };

    return (
        <div className="py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Image Gallery */}
                    <div>
                        <div className="h-96 bg-gray-200 rounded-lg mb-4">
                            <img
                                src={saree.images[selectedImage]}
                                alt={saree.name}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            {saree.images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`h-24 bg-gray-200 rounded-lg overflow-hidden ${selectedImage === index ? 'ring-2 ring-primary' : ''
                                        }`}
                                >
                                    <img
                                        src={image}
                                        alt={`${saree.name} - View ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Details */}
                    <div>
                        <h1 className="text-3xl font-serif font-bold mb-4">{saree.name}</h1>
                        <p className="text-2xl font-bold text-primary mb-6">
                            ${saree.price}
                        </p>
                        <p className="text-gray-600 mb-8">{saree.description}</p>

                        {/* Quantity Selector */}
                        <div className="flex items-center mb-8">
                            <label className="mr-4">Quantity:</label>
                            <div className="flex items-center border rounded-lg">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="px-4 py-2 text-xl"
                                >
                                    -
                                </button>
                                <span className="px-4 py-2 border-x">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="px-4 py-2 text-xl"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 mb-8">
                            <button
                                onClick={handleAddToCart}
                                className="btn btn-primary flex-1 flex items-center justify-center"
                            >
                                <FiShoppingCart className="mr-2" />
                                Add to Cart
                            </button>
                            <button className="btn btn-secondary">
                                <FiHeart />
                            </button>
                            <button className="btn btn-secondary">
                                <FiShare2 />
                            </button>
                        </div>

                        {/* Product Details */}
                        <div className="mb-8">
                            <h2 className="text-xl font-serif font-bold mb-4">
                                Product Details
                            </h2>
                            <ul className="list-disc list-inside text-gray-600">
                                {saree.details.map((detail, index) => (
                                    <li key={index}>{detail}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Care Instructions */}
                        <div>
                            <h2 className="text-xl font-serif font-bold mb-4">
                                Care Instructions
                            </h2>
                            <ul className="list-disc list-inside text-gray-600">
                                {saree.careInstructions.map((instruction, index) => (
                                    <li key={index}>{instruction}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail; 
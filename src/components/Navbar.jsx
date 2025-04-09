import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiShoppingCart, FiUser } from 'react-icons/fi';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="text-3xl font-serif font-bold text-white">
                        11Sari
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-white hover:text-yellow-300 transition-colors duration-300"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Search Bar */}
                    <div className="hidden md:flex items-center space-x-4">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
                        />
                        <Link to="/cart" className="text-white hover:text-yellow-300">
                            <FiShoppingCart className="w-6 h-6" />
                        </Link>
                        <Link to="/account" className="text-white hover:text-yellow-300">
                            <FiUser className="w-6 h-6" />
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <FiX className="w-6 h-6" />
                        ) : (
                            <FiMenu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 bg-blue-500">
                        <div className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="text-white hover:text-yellow-300 transition-colors duration-300"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex space-x-4 pt-4">
                                <Link to="/cart" className="text-white hover:text-yellow-300">
                                    <FiShoppingCart className="w-6 h-6" />
                                </Link>
                                <Link to="/account" className="text-white hover:text-yellow-300">
                                    <FiUser className="w-6 h-6" />
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar; 
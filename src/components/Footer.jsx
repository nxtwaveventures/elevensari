import { Link } from 'react-router-dom';
import { FiInstagram, FiFacebook, FiTwitter, FiMail } from 'react-icons/fi';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-r from-gray-800 to-black text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-2xl font-serif font-bold mb-4">11Sari</h3>
                        <p className="text-gray-400">
                            Your destination for authentic Indian sarees. We bring you the finest
                            collection of handcrafted sarees from across India.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-2xl font-serif font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-yellow-300 transition-colors duration-300">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/products" className="text-gray-400 hover:text-yellow-300 transition-colors duration-300">
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-400 hover:text-yellow-300 transition-colors duration-300">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-400 hover:text-yellow-300 transition-colors duration-300">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-2xl font-serif font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center space-x-2">
                                <FiMail className="text-yellow-300" />
                                <span className="text-gray-400">info@11sari.com</span>
                            </li>
                            <li className="text-gray-400">
                                Phone: +1 (123) 456-7890
                            </li>
                            <li className="text-gray-400">
                                Address: 123 Sari Street, New York, NY 10001
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-2xl font-serif font-bold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-yellow-300 transition-colors duration-300"
                            >
                                <FiInstagram className="w-6 h-6" />
                            </a>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-yellow-300 transition-colors duration-300"
                            >
                                <FiFacebook className="w-6 h-6" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-yellow-300 transition-colors duration-300"
                            >
                                <FiTwitter className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Newsletter Subscription */}
                <div className="mt-8 text-center">
                    <h3 className="text-xl font-serif font-bold mb-4">Subscribe to our Newsletter</h3>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    />
                    <button className="ml-2 px-4 py-2 bg-yellow-300 text-black rounded-md hover:bg-yellow-400 transition-colors duration-300">
                        Subscribe
                    </button>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {currentYear} 11Sari. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 
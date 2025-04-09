import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2, FiArrowLeft } from 'react-icons/fi';

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Banarasi Silk Saree',
            price: 299.99,
            image: '/images/banarasi.jpg',
            quantity: 1,
        },
        {
            id: 2,
            name: 'Kanjivaram Saree',
            price: 399.99,
            image: '/images/kanjivaram.jpg',
            quantity: 1,
        },
    ]);

    const handleQuantityChange = (id, newQuantity) => {
        setCartItems(
            cartItems.map((item) =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const handleRemoveItem = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };

    const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
    const shipping = 15.99;
    const tax = subtotal * 0.1; // 10% tax
    const total = subtotal + shipping + tax;

    return (
        <div className="py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-serif font-bold mb-8">Shopping Cart</h1>

                {cartItems.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-xl text-gray-600 mb-4">Your cart is empty</p>
                        <Link
                            to="/products"
                            className="btn btn-primary inline-flex items-center"
                        >
                            <FiArrowLeft className="mr-2" />
                            Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Cart Items */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                {cartItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex flex-col md:flex-row p-6 border-b last:border-b-0"
                                    >
                                        <div className="w-full md:w-32 h-32 bg-gray-200 rounded-lg mb-4 md:mb-0">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-cover rounded-lg"
                                            />
                                        </div>
                                        <div className="flex-grow md:ml-6">
                                            <h3 className="text-xl font-serif font-bold mb-2">
                                                {item.name}
                                            </h3>
                                            <p className="text-primary font-bold mb-4">
                                                ${item.price}
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center border rounded-lg">
                                                    <button
                                                        onClick={() =>
                                                            handleQuantityChange(
                                                                item.id,
                                                                Math.max(1, item.quantity - 1)
                                                            )
                                                        }
                                                        className="px-4 py-2"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="px-4 py-2 border-x">
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        onClick={() =>
                                                            handleQuantityChange(item.id, item.quantity + 1)
                                                        }
                                                        className="px-4 py-2"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                                <button
                                                    onClick={() => handleRemoveItem(item.id)}
                                                    className="text-red-500 hover:text-red-700"
                                                >
                                                    <FiTrash2 className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h2 className="text-xl font-serif font-bold mb-6">
                                    Order Summary
                                </h2>
                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between">
                                        <span>Subtotal</span>
                                        <span>${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Shipping</span>
                                        <span>${shipping.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Tax</span>
                                        <span>${tax.toFixed(2)}</span>
                                    </div>
                                    <div className="border-t pt-4 flex justify-between font-bold">
                                        <span>Total</span>
                                        <span>${total.toFixed(2)}</span>
                                    </div>
                                </div>
                                <Link
                                    to="/checkout"
                                    className="btn btn-primary w-full text-center"
                                >
                                    Proceed to Checkout
                                </Link>
                                <Link
                                    to="/products"
                                    className="btn btn-secondary w-full text-center mt-4"
                                >
                                    Continue Shopping
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart; 
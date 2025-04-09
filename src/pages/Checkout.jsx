import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiArrowLeft } from 'react-icons/fi';

const Checkout = () => {
    const [activeStep, setActiveStep] = useState(1);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // In a real app, this would process the order
    };

    const steps = [
        { id: 1, name: 'Shipping Information' },
        { id: 2, name: 'Payment Method' },
        { id: 3, name: 'Review Order' },
    ];

    return (
        <div className="py-12">
            <div className="container mx-auto px-4">
                {/* Progress Steps */}
                <div className="mb-12">
                    <div className="flex justify-between">
                        {steps.map((step) => (
                            <div
                                key={step.id}
                                className={`flex items-center ${step.id === activeStep ? 'text-primary' : 'text-gray-400'
                                    }`}
                            >
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center ${step.id === activeStep
                                        ? 'bg-primary text-white'
                                        : 'bg-gray-200'
                                        }`}
                                >
                                    {step.id}
                                </div>
                                <span className="ml-4 hidden md:inline">{step.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="max-w-3xl mx-auto">
                    {activeStep === 1 && (
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-2xl font-serif font-bold mb-6">
                                Shipping Information
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block mb-2">First Name</label>
                                    <input
                                        {...register('firstName', { required: true })}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                    {errors.firstName && (
                                        <p className="text-red-500 mt-1">First name is required</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block mb-2">Last Name</label>
                                    <input
                                        {...register('lastName', { required: true })}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                    {errors.lastName && (
                                        <p className="text-red-500 mt-1">Last name is required</p>
                                    )}
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block mb-2">Email</label>
                                    <input
                                        type="email"
                                        {...register('email', { required: true })}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 mt-1">Email is required</p>
                                    )}
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block mb-2">Address</label>
                                    <input
                                        {...register('address', { required: true })}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                    {errors.address && (
                                        <p className="text-red-500 mt-1">Address is required</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block mb-2">City</label>
                                    <input
                                        {...register('city', { required: true })}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                    {errors.city && (
                                        <p className="text-red-500 mt-1">City is required</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block mb-2">Postal Code</label>
                                    <input
                                        {...register('postalCode', { required: true })}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                    {errors.postalCode && (
                                        <p className="text-red-500 mt-1">Postal code is required</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeStep === 2 && (
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-2xl font-serif font-bold mb-6">
                                Payment Method
                            </h2>
                            <div className="space-y-6">
                                <div>
                                    <label className="block mb-2">Card Number</label>
                                    <input
                                        {...register('cardNumber', { required: true })}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                    {errors.cardNumber && (
                                        <p className="text-red-500 mt-1">Card number is required</p>
                                    )}
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="block mb-2">Expiry Date</label>
                                        <input
                                            {...register('expiryDate', { required: true })}
                                            placeholder="MM/YY"
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                        />
                                        {errors.expiryDate && (
                                            <p className="text-red-500 mt-1">Expiry date is required</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block mb-2">CVV</label>
                                        <input
                                            {...register('cvv', { required: true })}
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                        />
                                        {errors.cvv && (
                                            <p className="text-red-500 mt-1">CVV is required</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeStep === 3 && (
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-2xl font-serif font-bold mb-6">
                                Review Order
                            </h2>
                            {/* Order summary would go here */}
                            <div className="mt-6">
                                <button
                                    type="submit"
                                    className="btn btn-primary w-full"
                                >
                                    Place Order
                                </button>
                            </div>
                        </div>
                    )}

                    <div className="flex justify-between mt-6">
                        {activeStep > 1 && (
                            <button
                                type="button"
                                onClick={() => setActiveStep(activeStep - 1)}
                                className="btn btn-secondary inline-flex items-center"
                            >
                                <FiArrowLeft className="mr-2" />
                                Back
                            </button>
                        )}
                        {activeStep < 3 && (
                            <button
                                type="button"
                                onClick={() => setActiveStep(activeStep + 1)}
                                className="btn btn-primary ml-auto"
                            >
                                Next
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout; 
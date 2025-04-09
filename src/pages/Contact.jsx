import { useForm } from 'react-hook-form';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // In a real app, this would send the form data to a server
    };

    const contactInfo = [
        {
            icon: <FiMail className="w-6 h-6" />,
            title: 'Email',
            value: 'info@11sari.com',
            link: 'mailto:info@11sari.com',
        },
        {
            icon: <FiPhone className="w-6 h-6" />,
            title: 'Phone',
            value: '+1 (123) 456-7890',
            link: 'tel:+11234567890',
        },
        {
            icon: <FiMapPin className="w-6 h-6" />,
            title: 'Address',
            value: '123 Sari Street, New York, NY 10001',
            link: 'https://maps.google.com',
        },
    ];

    return (
        <div className="py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-serif font-bold text-center mb-12">
                    Contact Us
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <h2 className="text-2xl font-serif font-bold mb-6">
                            Send Us a Message
                        </h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div>
                                <label className="block mb-2">Name</label>
                                <input
                                    {...register('name', { required: true })}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                                {errors.name && (
                                    <p className="text-red-500 mt-1">Name is required</p>
                                )}
                            </div>
                            <div>
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
                            <div>
                                <label className="block mb-2">Subject</label>
                                <input
                                    {...register('subject', { required: true })}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                                {errors.subject && (
                                    <p className="text-red-500 mt-1">Subject is required</p>
                                )}
                            </div>
                            <div>
                                <label className="block mb-2">Message</label>
                                <textarea
                                    {...register('message', { required: true })}
                                    rows="4"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                ></textarea>
                                {errors.message && (
                                    <p className="text-red-500 mt-1">Message is required</p>
                                )}
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary w-full"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h2 className="text-2xl font-serif font-bold mb-6">
                            Get in Touch
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Have questions about our sarees or need assistance with your order?
                            We're here to help! Reach out to us through any of the following
                            channels.
                        </p>

                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <a
                                    key={index}
                                    href={info.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start space-x-4 p-4 bg-light rounded-lg hover:bg-light/80 transition-colors"
                                >
                                    <div className="text-primary mt-1">{info.icon}</div>
                                    <div>
                                        <h3 className="font-bold">{info.title}</h3>
                                        <p className="text-gray-600">{info.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Business Hours */}
                        <div className="mt-8">
                            <h3 className="font-bold mb-4">Business Hours</h3>
                            <div className="space-y-2 text-gray-600">
                                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                <p>Saturday: 10:00 AM - 4:00 PM</p>
                                <p>Sunday: Closed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact; 
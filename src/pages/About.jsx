import { FiAward, FiHeart, FiUsers } from 'react-icons/fi';

const About = () => {
    const values = [
        {
            icon: <FiAward className="w-8 h-8" />,
            title: 'Authenticity',
            description:
                'We source directly from skilled artisans across India, ensuring each saree is authentic and handcrafted.',
        },
        {
            icon: <FiHeart className="w-8 h-8" />,
            title: 'Quality',
            description:
                'Every saree in our collection undergoes rigorous quality checks to meet our high standards.',
        },
        {
            icon: <FiUsers className="w-8 h-8" />,
            title: 'Community',
            description:
                'We support local artisans and their communities through fair trade practices.',
        },
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center">
                <div className="absolute inset-0 bg-gradient-to-r from-dark/80 to-dark/40 z-10" />
                <div className="absolute inset-0 bg-[url('/images/about-hero.jpg')] bg-cover bg-center" />
                <div className="container mx-auto px-4 relative z-20">
                    <h1 className="text-5xl font-serif font-bold text-white">
                        Our Story
                    </h1>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 bg-light">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-serif font-bold mb-6">
                            Preserving Tradition, Empowering Artisans
                        </h2>
                        <p className="text-gray-600 mb-8">
                            11Sari was founded with a simple yet powerful mission: to bring the
                            beauty and craftsmanship of authentic Indian sarees to the world
                            while supporting the talented artisans who create them.
                        </p>
                        <p className="text-gray-600">
                            Our journey began when we discovered the challenges faced by
                            traditional weavers and artisans in India. Many were struggling to
                            sustain their craft in the face of modernization and mass
                            production. We saw an opportunity to create a platform that would
                            not only showcase their incredible work but also ensure they receive
                            fair compensation for their skills.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold text-center mb-12">
                        Our Values
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-light p-8 rounded-lg text-center"
                            >
                                <div className="text-primary mb-4 flex justify-center">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-serif font-bold mb-4">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Artisan Story */}
            <section className="py-16 bg-light">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-serif font-bold mb-6">
                                Meet Our Artisans
                            </h2>
                            <p className="text-gray-600 mb-4">
                                Behind every saree in our collection is a story of dedication and
                                skill. Our artisans come from generations of weavers and
                                craftsmen, each with their own unique techniques and traditions.
                            </p>
                            <p className="text-gray-600">
                                We work closely with our artisans to understand their needs and
                                challenges. Through fair trade practices and direct sourcing, we
                                ensure they receive proper compensation and recognition for their
                                work. This not only helps preserve traditional crafts but also
                                supports entire communities.
                            </p>
                        </div>
                        <div className="h-96 bg-gray-200 rounded-lg">
                            <img
                                src="/images/artisan.jpg"
                                alt="Artisan at work"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-primary text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-serif font-bold mb-6">
                        Join Us in Preserving Tradition
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Every saree you purchase helps support traditional artisans and
                        preserves centuries-old craftsmanship.
                    </p>
                    <a
                        href="/products"
                        className="btn bg-white text-primary hover:bg-white/90"
                    >
                        Shop Our Collection
                    </a>
                </div>
            </section>
        </div>
    );
};

export default About; 
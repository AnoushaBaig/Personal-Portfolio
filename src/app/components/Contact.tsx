import React from 'react';

export default function ContactPage() {
    return (
        <>
        <main>
            {/* Header Section */}
            <section className="bg-gray-700 text-white text-center py-12 md:py-20">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Contact Us</h1>
                <p className="mt-4 text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-4">
                    We would love to hear from you! Please fill out the form below to get in touch.
                </p>
            </section>

            {/* Form Section */}
            <section className="bg-gray-500 py-10 md:py-16">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <form className="bg-white shadow-lg rounded-lg p-6 md:p-8 lg:p-10 max-w-lg mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-800 text-center">Get in Touch</h2>
                        
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-600 mb-1 md:mb-2">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#B68934]"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-600 mb-1 md:mb-2">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#B68934]"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-600 mb-1 md:mb-2">Your Message</label>
                            <textarea
                                id="message"
                                placeholder="Type your message..."
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#B68934] h-24 md:h-32"
                            ></textarea>
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-orange-500 text-white py-2 px-4 md:px-6 rounded-lg hover:bg-orange-700 transition duration-300"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
        </>
    );
}
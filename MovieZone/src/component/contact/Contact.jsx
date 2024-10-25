import React from 'react';

const Contact = () => {
    return (
        <>
            <div className="flex flex-col items-center min-h-screen px-6 py-16 text-white bg-black lg:px-16">
                {/* Page Title */}
                <h2 className="mb-8 text-5xl font-bold text-orange-600">Contact Us</h2>

                {/* Intro Paragraph */}
                <p className="max-w-2xl mb-12 text-lg text-center text-gray-200">
                    We'd love to hear from you! Whether you have a question about features, trials, or anything else, our team is here
                    to answer all your questions.
                </p>

                {/* Contact Form */}
                <form className="w-full max-w-2xl p-8 bg-gray-900 rounded-lg shadow-lg">
                    <div className="mb-6">
                        <label className="block mb-2 text-lg font-semibold text-orange-500" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-2 text-white bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 text-lg font-semibold text-orange-500" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 text-white bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 text-lg font-semibold text-orange-500" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows="5"
                            className="w-full px-4 py-2 text-white bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                            placeholder="Type your message"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 text-white transition bg-orange-600 rounded-lg hover:bg-orange-800"
                    >
                        Send Message
                    </button>
                </form>

                {/* Contact Information */}
                <div className="mt-12 text-center">
                    <h3 className="mb-4 text-3xl font-semibold text-orange-500">Get in Touch</h3>
                    <p className="mb-2 text-gray-300">Email: support@moviesearchapp.com</p>
                    <p className="text-gray-300">Phone: +1 (555) 123-4567</p>
                </div>
            </div>
        </>
    )
}

export default Contact;
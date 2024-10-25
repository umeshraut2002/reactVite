import React from 'react';

const Blog = () => {
    return (
        <>
            <div className="min-h-screen px-6 py-16 text-white bg-black lg:px-16">
                {/* Page Title */}
                <h2 className="mb-12 text-5xl font-bold text-center text-orange-600">Movie Reviews</h2>

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                    {/* Example Blog Post Card */}
                    {[...Array(9)].map((_, index) => (
                        <div key={index} className="p-6 transition-shadow duration-300 bg-gray-900 rounded-lg shadow-lg hover:shadow-orange-500">
                            <img
                                src={`https://example.com/review-image-${index + 1}.jpg`}
                                alt="Movie Review Image"
                                className="object-cover w-full h-48 mb-4 rounded-lg"
                            />
                            <h3 className="mb-2 text-2xl font-semibold">Review Title {index + 1}</h3>
                            <p className="mb-4 text-gray-400">An engaging review that gives readers insight into the movie, discussing its plot, performance, and production quality...</p>
                            <button className="w-full py-2 text-white transition bg-orange-600 rounded-lg hover:bg-orange-800">
                                Read More
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Blog;
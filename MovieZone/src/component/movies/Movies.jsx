import React from 'react';

const Movies = () => {
    return (
        <>
            <div className="min-h-screen px-6 py-16 text-white bg-black lg:px-16">
                {/* Page Title */}
                <h2 className="mb-12 text-5xl font-bold text-center text-orange-600">Movies</h2>

                {/* Movies Grid */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {/* Example Movie Card */}
                    {[...Array(12)].map((_, index) => (
                        <div key={index} className="p-4 transition-shadow duration-300 bg-gray-900 rounded-lg shadow-lg hover:shadow-orange-500">
                            <img
                                src={`https://example.com/movie-poster-${index + 1}.jpg`}
                                alt="Movie Poster"
                                className="object-cover w-full h-64 mb-4 rounded-lg"
                            />
                            <h3 className="mb-2 text-xl font-semibold">Movie Title {index + 1}</h3>
                            <p className="mb-2 text-gray-400">IMDb Rating: {Math.random().toFixed(1) * 10}</p>
                            <button className="w-full py-2 text-white transition bg-orange-600 rounded-lg hover:bg-orange-800">
                                Add to Favorites
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Movies;
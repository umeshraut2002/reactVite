import React from 'react';

const Main = () => {
    return (
        <>
            <div className="flex flex-col w-screen min-h-screen text-white bg-black">
                <main className="w-full max-w-6xl px-4 py-10 mx-auto">
                    <h3 className="mb-8 text-3xl font-bold text-center">
                        Popular Movies
                    </h3>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Example Movie Card */}
                        <div className="p-4 transition-shadow duration-300 bg-gray-900 rounded-lg shadow-lg hover:shadow-orange-500">
                            <img
                                src="https://posters.movieposterdb.com/24_04/2024/11152168/s_if-movie-poster_006c6837.jpg"
                                className="mb-4 mr-4 bg-center bg-cover rounded-lg w-96 h-96"
                            />

                            <h4 className="mb-2 text-xl font-semibold">Movie Title</h4>
                            <p className="mb-2 text-gray-400">IMDb Rating: 8.5</p>
                            <button className="px-4 py-2 text-white transition-colors bg-orange-600 rounded-lg hover:bg-orange-800">
                                Add to Favorites
                            </button>
                        </div>

                        {/* Repeat similar cards for other movies */}
                        <div className="p-4 transition-shadow duration-300 bg-gray-900 rounded-lg shadow-lg hover:shadow-orange-500">
                            <img
                                src="https://posters.movieposterdb.com/24_06/2024/11315808/l_joker-folie-a-deux-movie-poster_8b8497ec.jpg"
                                className="mb-4 mr-4 bg-center bg-cover rounded-lg w-96 h-96"
                            />

                            <h4 className="mb-2 text-xl font-semibold">
                                Another Movie Title
                            </h4>
                            <p className="mb-2 text-gray-400">IMDb Rating: 7.9</p>
                            <button className="px-4 py-2 text-white bg-orange-600 rounded-lg hover:bg-orange-800">
                                Add to Favorites
                            </button>
                        </div>


                        <div className="p-4 transition-shadow duration-300 bg-gray-900 rounded-lg shadow-lg hover:shadow-orange-500">
                            <img
                                src="https://posters.movieposterdb.com/24_06/2024/6263850/l_deadpool-wolverine-movie-poster_36763292.jpg"
                                className="mb-4 mr-4 bg-center bg-cover rounded-lg w-96 h-96"
                            />

                            <h4 className="mb-2 text-xl font-semibold">
                                Another Movie Title
                            </h4>
                            <p className="mb-2 text-gray-400">IMDb Rating: 7.9</p>
                            <button className="px-4 py-2 text-white bg-orange-600 rounded-lg hover:bg-orange-800">
                                Add to Favorites
                            </button>
                        </div>




                        <div className="p-4 transition-shadow duration-300 bg-gray-900 rounded-lg shadow-lg hover:shadow-orange-500">
                            <img
                                src="https://posters.movieposterdb.com/22_02/2022/1877830/l_1877830_764432ad.jpg"
                                className="mb-4 mr-4 bg-center bg-cover rounded-lg w-96 h-96"
                            />

                            <h4 className="mb-2 text-xl font-semibold">
                                Another Movie Title
                            </h4>
                            <p className="mb-2 text-gray-400">IMDb Rating: 7.9</p>
                            <button className="px-4 py-2 text-white bg-orange-600 rounded-lg hover:bg-orange-800">
                                Add to Favorites
                            </button>
                        </div>






                        <div className="p-4 transition-shadow duration-300 bg-gray-900 rounded-lg shadow-lg hover:shadow-orange-500">
                            <img
                                src="https://posters.movieposterdb.com/21_08/2021/1160419/l_1160419_565d3d10.jpg"
                                className="mb-4 mr-4 bg-center bg-cover rounded-lg w-96 h-96"
                            />

                            <h4 className="mb-2 text-xl font-semibold">
                                Another Movie Title
                            </h4>
                            <p className="mb-2 text-gray-400">IMDb Rating: 7.9</p>
                            <button className="px-4 py-2 text-white bg-orange-600 rounded-lg hover:bg-orange-800">
                                Add to Favorites
                            </button>
                        </div>





                        <div className="p-4 transition-shadow duration-300 bg-gray-900 rounded-lg shadow-lg hover:shadow-orange-500">
                            <img
                                src="https://posters.movieposterdb.com/24_06/2024/29268110/l_smile-deluxe-movie-poster_85506969.png"
                                className="mb-4 mr-4 bg-center bg-cover rounded-lg w-96 h-96"
                            />

                            <h4 className="mb-2 text-xl font-semibold">
                                Another Movie Title
                            </h4>
                            <p className="mb-2 text-gray-400">IMDb Rating: 7.9</p>
                            <button className="px-4 py-2 text-white bg-orange-600 rounded-lg hover:bg-orange-800">
                                Add to Favorites
                            </button>
                        </div>
                        
                    </div>
                    <button className="px-4 py-2 mt-10 text-white bg-orange-600 rounded-lg hover:bg-orange-800">
                                Show More 
                            </button>
                </main>
            </div>
        </>
    )
}

export default Main;
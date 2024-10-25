import React from 'react';

const About = () => {
    return (
        <>
            <div className="flex flex-col items-center min-h-screen px-6 py-16 text-white bg-black lg:px-16">
                {/* Page Title */}
                <h2 className="mb-8 text-5xl font-bold text-orange-600">About Us</h2>

                {/* Intro Paragraph */}
                <p className="max-w-2xl mb-12 text-lg text-center text-gray-200">
                    Welcome to the Movie Search App! We aim to provide movie lovers with a seamless experience to find, save, and enjoy
                    their favorite films, all in one place.
                </p>

                {/* Mission and Vision Section */}
                <div className="flex flex-col items-center justify-between w-full max-w-4xl gap-8 mb-16 lg:flex-row">
                    <div className="w-full p-6 bg-gray-900 rounded-lg shadow-lg lg:w-1/2">
                        <h3 className="mb-4 text-2xl font-semibold text-orange-500">Our Mission</h3>
                        <p className="text-gray-300">
                            Our mission is to empower users by making movie discovery fast and fun, ensuring that movie data is
                            accessible to everyone with ease.
                        </p>
                    </div>
                    <div className="w-full p-6 bg-gray-900 rounded-lg shadow-lg lg:w-1/2">
                        <h3 className="mb-4 text-2xl font-semibold text-orange-500">Our Vision</h3>
                        <p className="text-gray-300">
                            We envision a platform where users can connect, discover, and share their love for cinema with a
                            global community of movie enthusiasts.
                        </p>
                    </div>
                </div>

                {/* Team Section */}
                <h3 className="mb-8 text-3xl font-semibold text-orange-500">Meet Our Team</h3>
                <p className="max-w-2xl mb-10 text-center text-gray-200">
                    A passionate team of developers and movie enthusiasts dedicated to creating the best experience for movie lovers.
                </p>
                <div className="grid w-full max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Team Member Card */}
                    <div className="p-6 text-center bg-gray-900 rounded-lg shadow-lg">
                        <img src="team-member1.jpg" alt="Team Member 1" className="w-24 h-24 mx-auto mb-4 rounded-full" />
                        <h4 className="text-xl font-semibold text-orange-500">John Doe</h4>
                        <p className="text-gray-400">Lead Developer</p>
                    </div>
                    {/* Repeat similar cards for other team members */}
                </div>
            </div>
        </>
    )
}

export default About;
import React from "react";

const Github = () => {
  return (
    <>
      <div className="w-screen min-h-screen p-10 text-white bg-black">
        
        <section className="mb-10">
          <h1 className="mb-4 text-3xl font-bold text-orange-400">
            Top Followers
          </h1>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {/* Sample Follower Card */}
            {[1, 2, 3, 4].map((follower, index) => (
              <div key={index} className="p-4 bg-gray-800 rounded-lg shadow-lg">
                <img
                  src={`follower-avatar-${index}.png`}
                  alt="Follower Avatar"
                  className="w-20 h-20 mx-auto mb-4 rounded-full"
                />
                <h3 className="text-lg font-bold text-center">
                  Follower {index + 1}
                </h3>
                <p className="text-sm text-center text-gray-400">
                  @follower{index + 1}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Middle Section - Profile Information */}
        <section className="flex flex-col items-center justify-between p-10 bg-gray-800 rounded-lg shadow-lg md:flex-row">
          {/* Profile Image */}
          <div className="flex justify-center mb-6 md:w-1/3 md:mb-0">
            <img
              src="https://avatars.githubusercontent.com/u/143353687?v=4"
              alt="Profile"
              className="w-40 h-40 border-4 border-orange-400 rounded-full"
            />
          </div>

          
          <div className="space-y-6 md:w-2/3">
            <h1 className="text-4xl font-bold text-orange-400">John Doe</h1>
            <p className="text-lg text-gray-400">@johndoe</p>
            <p className="text-lg">
              Full-stack developer passionate about building modern web
              applications and contributing to open-source projects.
            </p>
            <p className="text-lg">
              <span className="font-semibold">Total Repositories:</span> 48
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Github;

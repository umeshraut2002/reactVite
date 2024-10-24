import React from "react";
import {useLoaderData} from 'react-router-dom';
// import { githubInfoLoader } from "./Githubloader";


const Github = () => {
  
  const data = useLoaderData();

  return (
    <>
      <div className="w-screen p-10 text-white bg-black h-500">
        <section className="flex flex-col items-center justify-between p-10 bg-gray-800 rounded-lg shadow-lg md:flex-row">
          
          <div className="flex justify-center mb-6 md:w-1/3 md:mb-0">
            <img
              src={data.avatar_url}
              alt="profile"
              className="w-40 h-40 border-4 border-orange-400 rounded-full"
            />
          </div>

          
          <div className="space-y-6 md:w-2/3">
            <h1 className="text-4xl font-bold text-orange-400">{data.name}</h1>
            <p className="text-lg text-gray-400">{data.login}</p>
            <p className="text-lg">
            {data.bio}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Total Repositories:</span> {data.public_repos}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/umeshraut2002');
  return response.json();
}
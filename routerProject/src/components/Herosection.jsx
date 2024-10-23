import React from "react";

const Herosection = () => {

    const clickHandler = () => {
        // window.location.href='https://play.google.com/store/apps/details?id=com.chaicode.courses';
         window.open('https://play.google.com/store/apps/details?id=com.chaicode.courses')
    }
    
    return (
        <div className="w-screen text-white bg-black">
            <main className="flex flex-col items-center justify-between p-10 md:flex-row">
                <div className="space-y-4 md:w-1/2">
                    <h1 className="text-4xl font-bold text-orange-400 md:text-6xl">Build Your Future</h1>
                    <p className="text-lg md:text-xl">
                        Empower your development with the most modern UI experience.
                    </p>
                    <button onClick={clickHandler} className="px-6 py-3 font-semibold text-white bg-orange-500 rounded-lg hover:bg-orange-600">
                        Download Now
                    </button>
                </div>
                <div className="mt-6 md:w-1/2 md:mt-0">
                    <img src="https://picsum.photos/id/1060/536/354?blur=2" alt="Hero" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
            </main>
        </div>
    )
}

export default Herosection;
import React from 'react'


function Getapp() {
    return (
        <div>
            <section className="bg-[#F8F9FF] mx-13 my-10 px-10 py-10">

                <div className="bg-[#6F87F8] w-full max-w-5xl mx-auto px-6 py-6 rounded-lg flex">

                    <div className="w-1/2 flex flex-col justify-center">
                        <h1 className="text-3xl font-bold text-white mb-5">Get The App</h1>
                        <p className="mb-5">Experience the ultimate convenience of event discovery and management with our app. Download now and start chilling out!</p>
                        <div className="flex gap-4">
                            <a href="#" className="bg-white text-[#6F87F8] px-4 py-2 rounded-lg font-semibold">Download for iOS</a>
                            <a href="#" className="bg-white text-[#6F87F8] px-4 py-2 rounded-lg font-semibold">Download for Android</a>
                        </div>
                    </div>

                    <div className="w-1/2 flex justify-center">
                        <img
                            src="/Mockup.png"
                            alt="App Mockup"
                            className="w-full max-w-md h-auto"
                        />
                    </div>

                </div>

            </section>
        </div>
    )
}

export default Getapp
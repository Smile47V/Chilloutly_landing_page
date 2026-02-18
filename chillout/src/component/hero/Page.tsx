import React from 'react'
import Navbar from '../Navbar/page'

interface HeaderProps {
    backgroundImage: string
    height?: string
    children?: React.ReactNode
}

function Hero({ backgroundImage, height = "h-64", children }: HeaderProps) {
    return (
        <header className={`relative ${height} w-full overflow-hidden p-8`}>


            <img
                src={backgroundImage}
                alt="Hero Background"
                className="absolute inset-0 w-full h-full object-cover"
            />


            <div className="absolute inset-0 bg-[#0C1332] opacity-80"></div>


            <div className="relative z-10 flex flex-col h-full">


                <div className="flex flex-1 items-center justify-center">
                    <div className=" text-center text-white mt-[-24%] md:max-w-[80%] lg:max-w-[62%] text-base lg:text-lg">
                        {children}
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Hero

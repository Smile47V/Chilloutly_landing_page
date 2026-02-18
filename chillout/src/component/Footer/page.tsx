import Link from 'next/link'
import Image from "next/image";
import React from 'react'

function Footer() {
    return (
        <div className="bg-[#272F57] text-white py-10 px-4 sm:px-6  md:px-10 lg:px-14 flex items-center justify-center min-h-[24rem]">
            <div className="bg-white w-full max-w-7xl rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row gap-6">
                <div className="md:w-[45%]">
                    <Link href="/">
                        <Image
                            src="/icons/logo.png"
                            alt="Logo"
                            width={200}
                            height={40}
                        />
                    </Link>
                </div>
                <div className="md:w-[55%]">Right</div>
            </div>
        </div>
    )
}

export default Footer
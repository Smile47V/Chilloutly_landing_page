import Link from 'next/link'
import Image from "next/image";
import React from 'react'
import Button from '../Button';

function Footer() {
    return (
        <div className="bg-[#272F57] text-white py-10 px-4 sm:px-6  md:px-10 lg:px-12 flex items-center justify-center min-h-[24rem]">
            <div className="bg-white w-full max-w-7xl rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row gap-6">
                <div className="md:w-[35%] ">
                    <div className='flex flex-col gap-4'>
                        <Link href="/">
                            <Image
                                src="/icons/dark_logo.png"
                                alt="Logo"
                                width={200}
                                height={40}
                            />
                        </Link>
                        <div className="text-[#2D2D2D]">Create and customize your events, discover exciting experience
                            around you and connect with people who share your vibe.
                        </div>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <div className="text-[#2D2D2D] text-lg font-bold  mb-4 mt-6">Connect with Us</div>
                        <div className='flex flex-row gap-4'>
                            <Link href="/">
                                <Image
                                    src="/icons/PhoneCall.png"
                                    alt="Logo"
                                    width={20}
                                    height={20}
                                />
                            </Link>
                            <div className='text-[#2D2D2D]'>+012 345 67 89</div>
                        </div>

                        <div className='flex flex-row gap-4 '>
                            <Link href="/">
                                <Image
                                    src="/icons/Envelope.png"
                                    alt="Logo"
                                    width={20}
                                    height={20}
                                />
                            </Link>
                            <div className='text-[#2D2D2D]'>hello@support.com</div>
                        </div>
                    </div>

                    <div className='flex flex-row gap-4 mt-6'>
                        <div className="w-8 h-8 bg-[#09EDEB14] rounded-full flex items-center justify-center">
                            <Link href="/">
                                <Image
                                    src="/icons/ig.png"
                                    alt="Logo"
                                    width={20}
                                    height={20}
                                />
                            </Link>
                        </div>
                        <div className="w-8 h-8 bg-[#09EDEB14] rounded-full flex items-center justify-center">
                            <Link href="/">
                                <Image
                                    src="/icons/Path.png"
                                    alt="Logo"
                                    width={20}
                                    height={20}
                                />
                            </Link>
                        </div>
                        <div className="w-8 h-8 bg-[#09EDEB14] rounded-full flex items-center justify-center">
                            <Link href="/">
                                <Image
                                    src="/icons/be.png"
                                    alt="Logo"
                                    width={20}
                                    height={20}
                                />
                            </Link>
                        </div>
                        <div className="w-8 h-8 bg-[#09EDEB14] rounded-full flex items-center justify-center">
                            <Link href="/">
                                <Image
                                    src="/icons/x.png"
                                    alt="Logo"
                                    width={20}
                                    height={20}
                                />
                            </Link>
                        </div>
                    </div>





                </div>
                <div className="md:w-[65%]">
                    <div className='w-full h-full bg-[#272F57] py-5 px-8 rounded-2xl'>
                        <div className='flex flex-col gap-4'>
                            <div className="text-[#FFFFFF] text-4xl font-bold">Stay Updated With<br />Finacial Insights</div>
                            <p className="text-[#FFFFFF]">Get expert tips, market and exclusive offers<br />delevered to your inbox.</p>
                        </div>
                        <div className="w-full bg-[#EDEDED] mt-3 px-4 py-3">
                            <div className="flex flex-col sm:flex-row items-center  sm:gap-4">
                                {/* Icon */}
                                <div className="w-12 h-12 bg-[#D9D9D9] rounded-full flex items-center justify-center flex-shrink-0">
                                    <Link href="/">
                                        <Image
                                            src="/icons/mail.png"
                                            alt="Mail Icon"
                                            width={24}
                                            height={24}
                                        />
                                    </Link>
                                </div>

                                {/* Form */}
                                <form className="flex flex-1 w-full max-w-xl text-black" action="">
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="flex-1 px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                    <button className="rounded-r-md px-6 text-white bg-[#272F57] rounded-4xl cursor-pointer">Subscribe</button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
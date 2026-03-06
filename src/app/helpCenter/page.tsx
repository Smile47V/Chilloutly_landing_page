import Getapp from '@/component/Footer/getapp/page'
import Hero from '@/component/hero/Page'
import Image from 'next/image'
import React from 'react'

function HelpCenter() {
    return (
        <div>
            <Hero backgroundImage="/heroimage.png" height="h-[737px]">
                <div className=' flex flex-col justify-center items-center gap-6'>
                    <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">Help Center</h1>
                    <div className='bg-[#E9EDFE30] px-6 py-4 flex flex-col gap-4 justify-center items-center w-fit'>
                        <p className='mx-auto text-center font-bold text-2xl'>Need help or have question?</p>
                        <div>
                            <div className="flex flex-row gap-2 items-center mb-5">
                                <Image
                                    src="/icons/feat-arr.png"
                                    alt="Logo"
                                    width={20}
                                    height={4}
                                />
                                <p>Visit the in-app Help Center for quick guides and FAQs</p>
                            </div>
                            <div className="flex flex-row gap-2 items-center mb-5">
                                <Image
                                    src="/icons/feat-arr.png"
                                    alt="Logo"
                                    width={20}
                                    height={4}
                                />
                                <p>Report any issue or contact support directly through your profile.</p>
                            </div>
                            <div className="flex flex-row gap-2 items-center mb-5">
                                <Image
                                    src="/icons/feat-arr.png"
                                    alt="Logo"
                                    width={20}
                                    height={4}
                                />
                                <p>Our team replies within 24 hours to keep things running smoothly.</p>
                            </div>
                            <div className="flex flex-row gap-2 items-center mb-5">
                                <Image
                                    src="/icons/feat-arr.png"
                                    alt="Logo"
                                    width={20}
                                    height={4}
                                />
                                <p>Secure payments and refund system</p>
                            </div>
                        </div>
                    </div>
                </div>

            </Hero>

            <section>
                <Getapp />
            </section>
        </div>
    )
}

export default HelpCenter
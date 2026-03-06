import Features from '@/component/Features/page'
import Getapp from '@/component/Footer/getapp/page'
import Hero from '@/component/hero/Page'
import Image from 'next/image'
import React from 'react'

function Feautures() {
    return (
        <div>
            <Hero backgroundImage="/heroimage.png" height="h-[438px]">
                <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">Chilloutly Features</h1>
            </Hero>
            <section className="flex flex-col w-screen justify-center items-center py-8 bg-[#F3FDF9]">
                <div className="flex flex-col justify-center items-center gap-4 mt-13">
                    <h1 className="font-extrabold text-4xl">What You Can do with <span className="text-[#6F87F8]">Chilloutly</span></h1>
                    <p className=" text-center">Save, Invest, Borrow and Grow on one trusted platform built <br />for your finacial success</p>
                </div>
                <div className="flex flex-col md:flex-row px-7 w-full justify-center items-center gap-6 mt-10">
                    <div className="w-full md:w-[50%]">
                        <Image
                            src="/icons/Visuals.png"
                            alt="Logo"
                            width={750}
                            height={850}
                            className="p-7 transition-transform duration-1000 ease-in-out hover:rotate-[5deg]"
                        />
                    </div>
                    <div className="flex flex-col gap-4 w-full md:w-[50%]">
                        <Features title={"Event creation"} description={"Create or join hangouts with just a few taps — add your title, budget, location, and date."} color={"#D9F9EB"} />
                        <Features title={"Private Events"} description={"Make your event private and share a unique code with only the people you want to invite."} color={"#E9EDFE"} />
                        <Features title={"Admin Moderation"} description={"Every event goes through admin review to keep the community safe, organized, and authentic"} color={"#D9F9EB"} />
                        <Features title={"Automatic Fund Release"} description={"All event payments are securely held until the event date, then released directly to the company or vendors providing the service — ensuring safety and transparency"} color={"#E9EDFE"} />
                        <Features title={"Refund & Ratings"} description={"If an event doesn’t happen, you can request a refund and receive it within 24–48 hours. After each event, participants can rate the organizer."} color={"#D9F9EB"} />
                        <Features title={"Localized Events"} description={"See only events happening in your city or state for easy discovery."} color={"#D9F9EB"} />
                    </div>
                </div>
            </section>

            <section>
                <Getapp />
            </section>
        </div>
    )
}

export default Feautures
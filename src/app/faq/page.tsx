import Accordion from '@/component/Acordion/page'
import Getapp from '@/component/Footer/getapp/page'
import Hero from '@/component/hero/Page'
import React from 'react'

function Faq() {
    const faq = [
        {
            title: "How do I join or create an event?",
            content: "Sign up, tap Create Event, add your details, and wait for admin approval. You can also explore events in your area or use a private code to join one."
        },
        {
            title: "How do I join or create an event?",
            content: "Sign up, tap Create Event, add your details, and wait for admin approval. You can also explore events in your area or use a private code to join one."
        },
        {
            title: "How do I join or create an event?",
            content: "Sign up, tap Create Event, add your details, and wait for admin approval. You can also explore events in your area or use a private code to join one."
        },
        {
            title: "How do I join or create an event?",
            content: "Sign up, tap Create Event, add your details, and wait for admin approval. You can also explore events in your area or use a private code to join one."
        },
        {
            title: "How do I join or create an event?",
            content: "Sign up, tap Create Event, add your details, and wait for admin approval. You can also explore events in your area or use a private code to join one."
        },
    ]
    return (
        <div>
            <Hero backgroundImage="/heroimage.png" height="h-[438px]">
                <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">Frequently Asked Questions</h1>
            </Hero>
            <section className="p-1 md:p-19 lg:P-19 flex flex-col gap-7 justify-center items-center">
                <div className="mx-3">
                    <p className="w-[95%] mx-auto text-center">
                        Save, invest, borrow, and grow on one trusted platform, built for your financial success.
                    </p>
                </div>
                <div className='w-[70%]'>
                    <Accordion items={faq} />
                </div>
            </section>

            <section>
                <Getapp />
            </section>
        </div>
    )
}

export default Faq
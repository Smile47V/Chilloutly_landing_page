import Hero from '@/component/hero/Page'
import Getapp from '@/component/Footer/getapp/page'

function About() {
    return (
        <div>
            <Hero backgroundImage="/heroimage.png" height="h-[438px]">
                <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">About Chilloutly</h1>
            </Hero>
            <section className='bg-[#F3FDF9] flex flex-col justify-center items-center py-10 mb-18'>
                <div className='max-w-3xl px-2 '>
                    <p className='text-center text-lg text-gray-700 mb-8'>
                        We’re creating a platform that makes it easy for people to plan hangouts, trips, and events in their city — split costs, organize details, and create lasting memories, all in one app.
                        Whether it’s a private get-together or a city-wide event, our goal is simple: bring people together easily and safely.
                    </p>

                    <img
                        src="/icons/about.png"
                        alt="Logo"
                        width="800"
                        className="transition-transform duration-300 hover:scale-110"
                    />
                </div>
            </section>

            <section>
                <Getapp />
            </section>

        </div>
    )
}

export default About
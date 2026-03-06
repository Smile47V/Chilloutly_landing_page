import Accordion from "@/component/Acordion/page";
import Features from "@/component/Features/page";
import Getapp from "@/component/Footer/getapp/page";
import Hero from "@/component/hero/Page";
import Page1 from "@/component/hero/Page1";


export default function Home() {
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
            <Hero backgroundImage="/heroimage.png" height="h-[920px]" children={<Page1 />} />

            <section className="flex flex-col w-screen justify-center items-center py-8 bg-[#F3FDF9]">
                <div className="flex flex-col justify-center items-center gap-4 mt-13">
                    <h1 className="font-extrabold text-4xl">What You Can do with <span className="text-[#6F87F8]">Chilloutly</span></h1>
                    <p className=" text-center">Save, Invest, Borrow and Grow on one trusted platform built <br />for your finacial success</p>
                </div>
                <div className="flex flex-col md:flex-row px-7 w-full justify-center items-center gap-6 mt-10">
                    <div className="w-full md:w-[50%]">
                        <img
                            src="/icons/Visuals.png"
                            alt="Visuals"
                            className="p-7 w-[750px] max-w-full transition-transform duration-1000 ease-in-out hover:rotate-[5deg]"
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

            <section className="flex flex-col md:flex-row justify-center items-center p-42 w-full ">
                <div className="flex flex-col p-20 gap-4 mt-13 w-full md:w-[50%] lg:w-[50%]">
                    <h1 className="font-bold text-4xl">Why <span className="text-[#6F87F8]">Chilloutly?</span></h1>
                    <div>
                        <div className="flex flex-row gap-2 items-center mb-5">
                            <Image
                                src="/icons/feat-arr.png"
                                alt="Logo"
                                width={20}
                                height={4}
                            />
                            <p>Intuitive and easy-to-use interface</p>
                        </div>
                        <div className="flex flex-row gap-2 items-center mb-5">
                            <Image
                                src="/icons/feat-arr.png"
                                alt="Logo"
                                width={20}
                                height={4}
                            />
                            <p>Verified events and trusted community</p>
                        </div>
                        <div className="flex flex-row gap-2 items-center mb-5">
                            <Image
                                src="/icons/feat-arr.png"
                                alt="Logo"
                                width={20}
                                height={4}
                            />
                            <p>Real-time updates and instant notifications</p>
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
                        <div className="flex flex-row gap-2 items-center mb-5">
                            <Image
                                src="/icons/feat-arr.png"
                                alt="Logo"
                                width={20}
                                height={4}
                            />
                            <p>Perfect for individuals, brands, and event planners</p>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col md:flex-row px-7 w-full justify-center items-center md:w-[50%] gap-6 mt-10">
                    <Image
                        src="/icons/Group.png"
                        alt="Logo"
                        width={400}
                        height={550}
                        className="md:max-w[40%] transition-transform duration-300 hover:scale-110"
                    />
                </div>

            </section>

            <section>
                <Getapp />
            </section>


            <section className="p-1 md:p-19 lg:P-19 flex flex-col gap-7">
                <div className="mx-3 ">
                    <h1 className="font-black text-3xl">Frequently Asked Question</h1>
                    <p className="w-full md:-w-[27%] lg:w-[27%]">Save, invest, borrow, and grow on one trusted platform, built for your financial success.</p>
                </div>
                <div>
                    <Accordion items={faq} />
                </div>
            </section>


        </div>
    );
}

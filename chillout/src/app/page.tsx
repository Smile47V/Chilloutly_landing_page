import Hero from "@/component/hero/Page";
import Page1 from "@/component/hero/Page1";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <Hero backgroundImage="/heroimage.png" height="h-[920px]" children={<Page1 />} />

            <section className="flex justify-center items-center py-8 bg-[#F3FDF9]">
                <div className="flex flex-col justify-center items-center gap-4 mt-13">
                    <h1 className="font-extrabold text-4xl">What You Can do with <span className="text-[#6F87F8]">Chilloutly</span></h1>
                    <p className=" text-center">Save, Invest, Borrow and Grow on one trusted platform built <br />for your finacial success</p>
                </div>


            </section>
        </div>
    );
}

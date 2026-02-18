import Button from '../Button'
import Link from "next/link"
import Image from "next/image";

function Page1() {
    return (
        <div className='flex flex-col gap-9 justify-center items-center mt-60 '>
            <div className='flex flex-col gap-6 mt-53 mb-5'>
                <div className='lg:text-6xl md:text-4xl font-bold text-white  '>
                    Create, Discover, and Experience <br />Event <span className='text-[#6F87F8]'>Like Never Before</span>
                </div>
                <div>From intmate gatherings to grand festivals<span>-</span>host manage and attend events effortlessly, all in one app.</div>
            </div>

            <div className=' w-full flex justify-center'>
                <Button>
                    <div className="flex items-center justify-between gap-20 px-1 py-1 whitespace-nowrap">

                        <span className='px-7 py-3'>Download the app</span>

                        <Link href="/">
                            <div className="bg-[#84ECBF] w-12 h-12 flex items-center justify-center rounded-full">
                                <Image
                                    src="/button_icon.png"
                                    alt="Logo"
                                    width={20}
                                    height={20}
                                />
                            </div>
                        </Link>

                    </div>
                </Button>

            </div>

            <div className='bg-[#E9EDFE30] px-10 py-6 flex flex-col gap-2 justify-center items-center w-fit'>
                <div className='font-bold'>Our security Our piority</div>
                <div className='text-[#F1F3FE] font-extralight'>Srcured with industry-Standard 256-bit encryption. Your dta and funds<br />
                    are protected by the same technology trusted by global banks </div>
            </div>


        </div >
    )
}

export default Page1
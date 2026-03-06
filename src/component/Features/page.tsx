import React from 'react'
import Image from "next/image";
interface Props {
    title: string;
    description: string;
    color: string;
}

const Features = (props: Props) => {
    return (
        <div className='flex-col p-5 mb-2 md:max-w-full lg:max-w-[90%]' style={{ backgroundColor: props.color }}>
            <div className='flex gap-2 items-center mb-5'>
                <Image
                    src="/icons/feat-arr.png"
                    alt="Logo"
                    width={20}
                    height={7}
                />
                <p className='font-bold'>{props.title}</p>
            </div>
            <p className='text-[#2D2D2D] text-sm md:max-w-[90%] lg:max-w-[70%]'>{props.description}</p>
        </div>
    )
}

export default Features
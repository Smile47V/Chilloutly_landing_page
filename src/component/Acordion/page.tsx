"use client";
import { useState } from "react";

interface AccordionItem {
    title: string;
    content: string;
}

interface AccordionProps {
    items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full ">
            {items.map((item, index) => (
                <div key={index} className={` py-4 mb-5 ${openIndex === index ? "bg-[#09EDEB14]" : "bg-[#B9B9B91A]"} rounded-lg px-5 cursor-pointer transition-colors duration-300`}>
                    <button
                        onClick={() => toggleItem(index)}
                        className="w-full flex justify-between items-center"
                    >
                        {item.title}

                        <span
                            className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                }`}
                        >
                            ▼
                        </span>
                    </button>

                    {openIndex === index && (
                        <div className="mt-2 text-gray-600">
                            {item.content}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
"use client";

import Link from "next/link"
import Image from "next/image";
import { usePathname } from "next/navigation";

import Button from "../Button";


const Navbar = () => {
    const pathname = usePathname();
    return (
        <header className="fixed top-0 left-0 w-full z-50 flex items-center p-4">

            <div className="w-1/2">
                <Link href="/">
                    <Image
                        src="/icons/logo.png"
                        alt="Logo"
                        width={200}
                        height={40}
                    />
                </Link>
            </div>


            <div className="w-1/2 flex  justify-end gap-7 items-center">
                <div className="flex items-center gap-7 px-6 py-2 rounded-4xl bg-[#6F87F840]">
                    <nav className="flex justify-between gap-6 text-[#FFFFFF]">
                        <Link href="/" className={pathname === "/" ? "text-blue-500 font-bold" : ""}>Home</Link>
                        <Link href="/about" className={pathname === "/about" ? "text-blue-500 font-bold" : ""}>About</Link>
                        <Link href="/feautures" className={pathname === "/feautures" ? "text-blue-500 font-bold" : ""}>Features</Link>
                        <Link href="/faq" className={pathname === "/faq" ? "text-blue-500 font-bold" : ""}>FAQ</Link>
                        <Link href="/helpCenter" className={pathname === "/helpCenter" ? "text-blue-500 font-bold" : ""}>HelpCenter</Link>
                    </nav>


                </div>
                <Button><div className="px-10 py-4 text-[#FFFFFF]">Get app</div></Button>
            </div>

        </header>

    )
}

export default Navbar     
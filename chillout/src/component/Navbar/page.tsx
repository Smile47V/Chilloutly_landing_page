import Link from "next/link"
import Image from "next/image";

import Button from "../Button";


const Navbar = () => {
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
                <nav className="flex justify-between gap-6">
                    <Link href="/">Home</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Features</Link>
                    <Link href="/">FAQ</Link>
                    <Link href="/">HelpCenter</Link>
                </nav>

                <Button><div className="px-10 py-4">Get app</div></Button>
            </div>

        </header>

    )
}

export default Navbar     
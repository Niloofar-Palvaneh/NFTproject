import Button from "../button/Button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isShowMobileMenu, setIsShowMobileMenu] = useState(false)
    const isShowMobileMenuHandler = () => {
        setIsShowMobileMenu(!isShowMobileMenu)
    }
    return (
        <>
            <div className="flex items-center justify-between px-12 py-2 sm:px-2">
                <div className="z-50">
                    <Image src={"/logo.png"} width={60} height={60} alt="logo" />
                </div>
                <div className="sm:hidden">
                    <ul className="flex items-center gap-12 text-[18px]">
                        <Link href={"#"} className="hover:text-fuchsia-400 transition">
                            Home
                        </Link>
                        <Link href={"#"} className="hover:text-fuchsia-400 transition">
                            Contact
                        </Link>
                        <Link href={"#"} className="hover:text-fuchsia-400 transition">
                            Product
                        </Link>
                        <Link href={"#"} className="hover:text-fuchsia-400 transition">
                            Feature
                        </Link>
                        <li>
                            <Button title="Build New" />
                        </li>
                    </ul>
                </div>
                <div className="hidden sm:flex flex-col gap-2 z-50"
                    onClick={isShowMobileMenuHandler}
                >
                    <div className={`bg-white rounded w-[30px] h-[3px] transition-all ease-out duration-300 ${isShowMobileMenu ? "rotate-45" : "rotate-0"}`}></div>
                    <div className={`bg-white rounded w-[25px] h-[3px] transition-all ease-out duration-300 ${isShowMobileMenu ? "rotate-180" : "inline"}`}></div>
                    <div className={`bg-white rounded w-[30px] h-[3px] transition-all ease-out duration-300 ${isShowMobileMenu ? "-rotate-45" : "rotate-0"}`}></div>
                </div>
            </div>
            <div className={`${isShowMobileMenu ? "-right-0 " : "right-[100%]"} transition-all ease-out duration-300 
             absolute h-auto py-12 w-full bg-violet-950 flex items-center justify-center z-50 `}>
                <ul className=" flex flex-col gap-8 items-center text-[18px]">
                    <Link href={"#"} className="hover:text-fuchsia-400 transition">
                        Home
                    </Link>
                    <Link href={"#"} className="hover:text-fuchsia-400 transition">
                        Contact
                    </Link>
                    <Link href={"#"} className="hover:text-fuchsia-400 transition">
                        Product
                    </Link>
                    <Link href={"#"} className="hover:text-fuchsia-400 transition">
                        Feature
                    </Link>
                    <li>
                        <Button title="Build New" />
                    </li>
                </ul>
            </div>
        </>
    )
}
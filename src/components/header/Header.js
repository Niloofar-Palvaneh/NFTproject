import Image from "next/image";
import Button from "../button/Button";
import Link from "next/link";

export default function Header() {
    return (
        <>
            <div className="px-12 py-2 flex justify-between items-center gap-12 sm:px-2 sm:mt-8">
                <div className="flex-1 flex flex-col gap-8 sm:bg-[url('/flowered-face.png')] md:bg-[url('/flowered-face.png')] xl:bg-[url('/flowered-face.png')] bg-cover bg-center relative">
                    <div className="w-full h-[400px] sm:h-[480px] md:h-[490px] lg:h-[498px] xl:h-[499px] 2xl:h-[299px] bg-custom-opacity absolute z-10 hidden sm:inline md:inline xl:inline"></div>
                    <h1 className="font-bold text-[65px] z-40 sm:text-center sm:text-3xl">
                        Discover the latest
                        NFT Marketplace.
                    </h1>
                    <p className="leading-[35px] text-xl z-40 sm:text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure dolor in Excepteur
                        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
                    </p>
                    <div className="flex items-center gap-4 sm:justify-center">
                        <Button title="Try For Free" />
                        <Link 
                        className="border px-4 py-2 z-40 rounded "
                        href="#">Learn more</Link>
                    </div>
                </div>
                <div className="w-full flex-1 w-1/2 h-[700px]  bg-[url('/flowered-face.png')] bg-cover bg-center sm:hidden md:hidden xl:hidden"></div>
            </div>

        </>
    )
}
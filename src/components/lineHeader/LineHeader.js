import Image from "next/image"
import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";

export default function LineHeader() {
    useEffect(() => {
        AOS.init({
          easing: "ease-out-cubic",
          once: true,
          offset: 50,
        });
      }, []);
    return (
        <>
            <div  className="z-50 w-full border-y-4 px-12 py-4
            sm:flex-col md:flex-col
            border-violet-900 mt-24 bg-indigo-950 overflow-hidden flex items-center justify-around gap-8">
                <h2 data-aos="fade-right" className="text-3xl font-bold text-center sm:leading-[40px]">
                    We provide everything that you need
                </h2>
                <div className="w-[3px] h-[200px] sm:w-full sm:h-[3px] md:w-full md:h-[3px] bg-violet-950 rounded"></div>
                <div data-aos="fade-up" className="flex flex-col items-center justify-center gap-4">
                    <Image
                        className="rounded-full p-2 bg-pink-500"
                        src={"/1.svg"} width={80} height={80} alt="..." />
                    <h4 className="text-xl font-bold">
                        Buy NTF
                    </h4>
                    <p className="w-3/4 text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    </p>
                </div>
                <div data-aos="fade-up" className="flex flex-col items-center justify-center gap-4">
                    <Image
                        className="rounded-full p-2 bg-blue-500"
                        src={"/2.svg"} width={80} height={80} alt="..." />
                    <h4 className="text-xl font-bold">
                        Sell NTF
                    </h4>
                    <p className="w-3/4 text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,r adipiscing elit,
                    </p>
                </div>
            </div>
          
        </>
    )
}
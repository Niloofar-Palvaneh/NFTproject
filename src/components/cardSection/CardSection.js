import Image from "next/image";
import Button from "../button/Button";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function CardSection(){
    useEffect(() => {
        AOS.init({
          easing: "ease-out-cubic",
          once: true,
          offset: 50,
        });
      }, []);

    return(
        <>
        <div className="w-full flex items-center justify-center mt-24 overflow-hidden">
            <div className="w-[90%] flex items-center justify-around sm:flex-col sm:justify-center sm:gap-4">
                <Image data-aos="fade-right" src={"/Card.png"} width={400} height={400} alt="card"/>
                <div data-aos="fade-left" className="w-1/2 flex flex-col gap-8 sm:w-full sm:text-center sm:items-center">
                    <h4 className="text-3xl font-bold">
                    Get exclusive NTF bundles from here.
                    </h4>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                     labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <Button title="Learn more"/>
                </div>
            </div>
        </div>
        </>
    )
}
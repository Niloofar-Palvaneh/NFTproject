import Image from "next/image";
import Button from "../button/Button";

export default function ExplorSection() {
    const cardsData = [
        {
            src: '/ex1.png'
        },
        {
            src: '/ex2.png'
        },
        {
            src: '/ex3.png'
        },
        {
            src: '/ex4.png'
        },
        {
            src: '/ex5.png'
        },
        {
            src: '/ex6.png'
        },
    ]
    return (
        <>
            <div className="w-full flex items-center justify-center mt-24">
                <div className="w-[90%] sm:w-full ">
                    <div className="w-full flex justify-start sm:justify-center md:justify-center">
                        <h3 className="text-3xl font-bold mb-6 sm:m-4">
                            Explore our collections
                        </h3>
                    </div>
                    <div className=" grid grid-cols-3 gap-4 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-2 place-items-center ">
                        {
                            cardsData.map(data => (
                                <div className="bg-gradient-to-r from-fuchsia-400 to-sky-700 p-[1px] rounded overflow-hidden w-max hover:bg-gradient-to-l from-fuchsia-400 to-sky-700 ">
                                    <div className="bg-[#18153c] p-2 rounded  hover:bg-[#221e53] transition ">
                                        <div className="flex flex-col gap-4">
                                            <Image src={data.src} width={400} height={400} alt="..." />
                                            <div className="flex items-center justify-between">
                                                <h6 className="text-xl font-bold">
                                                    Blue dolliner
                                                </h6>
                                                <Button title="BID" />
                                            </div>
                                            <span className="text-gray-400">
                                                by Alon art
                                            </span>
                                            <div className="flex items-center justify-between">
                                                <section className="flex items-center gap-1">
                                                    <Image src={"/gold.png"} width={20} height={20} alt="..." />
                                                    1.52 ETH
                                                </section>
                                                <section className="text-gray-400">
                                                    3,243 USD
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
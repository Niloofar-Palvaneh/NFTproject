import Button from "../button/Button";


export default function Footer() {
    return (
        <>
            <div className="flex items-center justify-center w-full mt-32 sm:mt-12">
                <div className="w-[40%] sm:w-full md:w-full xl:w-full h-[600px] flex flex-col gap-8 items-center justify-center text-center bg-[url('/bg-footer.png')] bg-center bg-cover">
                    <h4 className="p-2 text-5xl font-bold">
                        Create Your NTF
                    </h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco .
                    </p>
                    <Button title="Try now" />
                </div>
            </div>
            <div className="w-full p-2 text-sm bg-violet-950 text-center mt-24 sm:mt-12">
                creator: Niloofar-Palvaneh
            </div>
        </>
    )
}
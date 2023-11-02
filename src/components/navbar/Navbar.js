import Button from "../button/Button";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <div className="flex items-center justify-between">
                <div>
                    <Image src={"/logo.png"} width={60} height={60} alt="logo" />
                </div>
                <div>
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

            </div>
        </>
    )
}
import { Button } from "@nextui-org/react";
import Link from "next/link";

const Hero = () => {
    return (
        <div className="text-center bg-[#00547E] pt-24 pb-16 text-white space-y-6 rounded-b-[50px] relative">
            <h3 className="md:text-6xl font-bold text-2xl">Control Your Future</h3>
            <p className="md:text-base text-sm">Explore inheritance courses,live session and more to you ace your exams!</p>
            <div className="">
            <Link href='/register'>
            <Button className="bg-red-400 text-white rounded-full text-base font-semibold hover:bg-blue-400">Get Started</Button>
            </Link>
            </div>
            
        </div>
    );
};

export default Hero;
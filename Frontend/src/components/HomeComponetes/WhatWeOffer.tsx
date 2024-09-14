import { AirVent, GraduationCap, Search } from "lucide-react";

const WhatWeOffer = () => {
    return (
        <div className="w-full  mt-1 ">
            <p className="text-3xl font-bold text-center mb-5">What We Offer</p>
            <div className="container mx-auto flex md:flex-row flex-col justify-center items-center gap-3">
                <div className="bg-white space-y-3 rounded-md p-8 shadow-md text-center">
                    <AirVent className="mx-auto w-10 h-10" />
                    <p className="text-xl font-semibold">Interactive Courses</p>
                    <p>Engaging video and quezzes to makebjew nfewjkfb</p>
                </div>
                <div className="bg-white space-y-3 rounded-md p-8 shadow-md text-center">
                    <GraduationCap className="mx-auto w-10 h-10" />
                    <p className="text-xl font-semibold">Live Sessions</p>
                    <p>Engaging video and quezzes to makebjew nfewjkfb</p>
                </div>
                <div className="bg-white space-y-3 rounded-md p-8 shadow-md text-center">
                    <Search className="mx-auto w-10 h-10" />
                    <p className="text-xl font-semibold">Interactive Revisions</p>
                    <p>Engaging video and quezzes to makebjew nfewjkfb</p>
                </div>
            </div>

        </div>
    );
};

export default WhatWeOffer;
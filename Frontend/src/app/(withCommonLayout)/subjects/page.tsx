import { BookA, BookText, Earth, TrainFrontTunnel } from "lucide-react";

const SubjectsPage = () => {
    const subjects = [
        {
            name: "Arabic",
            icon: <BookText />
        },
        {
            name: "English",
            icon: <Earth/>
        },
        {
            name: "Religion",
            icon: <TrainFrontTunnel/>
        },
        {
            name: "French",
            icon: <BookA/>
        },
    ]
    return (
        <div className="space-y-4 md:pt-32 pt-14 min-h-screen bg-[#E1E6E6]">
            <h3 className="text-3xl font-bold text-center">Subjects</h3>
            <p className="text-2xl font-bold  text-center">General</p>
            {
                subjects?.map((item: any, index: number) => <div
                    key={index}
                    className="text-center bg-white rounded-md p-5 shadow-lg  w-[22%] mx-auto mb-10 flex items-center gap-4">
                    <button className="bg-black text-white w-16 h-16 rounded-full font-semibold hover:bg-blue-400 flex justify-center items-center">{item?.icon}</button>
                    <p className="text-lg font-bold text-blue-950">{item?.name}</p>
                </div>)
            }

        </div>
    );
};

export default SubjectsPage;
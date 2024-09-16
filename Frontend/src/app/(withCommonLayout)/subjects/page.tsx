"use client"
import { BookA, BookText, Earth, TrainFrontTunnel } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const SubjectsPage = () => {
    const subjectsData = [
       {
        category:"General",
        subjects:[
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
       },
       {
        category:"Science",
        subjects:[
            {
                name: "Chemistry",
                icon: <BookText />
            },
            {
                name: "Physics",
                icon: <Earth/>
            }
        ]
       },
       {
        category:"Math",
        subjects:[
            {
                name: "Pure Mathematics",
                icon: <BookText />
            },
            {
                name: "Applied Mathematics",
                icon: <Earth/>
            }
        ]
       },
    ]
    return (
        <div className="space-y-5 md:py-32 pt-14  bg-[#E1E6E6]">
            <h3 className="text-3xl font-bold text-center">Subjects</h3>
         
      {
  subjectsData?.map((item: any, index: number) => (
    <div key={index} className="text-center pt-3">
      <p className="text-2xl font-bold text-center">{item?.category}</p>
      {item?.subjects?.map((subject: any, index: number) => (
       <Link href={`/subjects/teachers/${5}`}   key={index}>
        <motion.div
        
          className="bg-white rounded-md p-5 shadow-lg w-[22%] mx-auto my-5 flex items-center gap-4 cursor-pointer relative overflow-hidden"
          whileHover={{
            scale: 1.08,
            backgroundColor: "#f0f5ff",
            boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
          }}
          transition={{ type: "spring", stiffness: 250, damping: 20 }}
        >
          {/* Glowing animated border on hover */}
          <motion.div
            className="absolute inset-0 border-2 rounded-md border-transparent"
            whileHover={{
              borderColor: "#1e90ff",
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />

          {/* Button with a smooth rotating and color-shifting effect */}
          <motion.button
            whileHover={{ rotate: 360, backgroundColor: "#1e90ff", scale: 1.2 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="bg-black text-white w-16 h-16 rounded-full font-semibold flex justify-center items-center relative"
          >
            {/* Icon animation (pulsing effect) */}
            <motion.span
              initial={{ scale: 1 }}
              whileHover={{
                scale: 1.2,
                transition: { yoyo: Infinity, duration: 0.5 },
              }}
              className="flex justify-center items-center"
            >
              {subject?.icon}
            </motion.span>
          </motion.button>

          <p className="text-lg font-bold text-blue-950 hover:text-blue-500">{subject?.name}</p>
        </motion.div>
       </Link>
      ))}
    </div>
  ))
}
    </div>

    );
};

export default SubjectsPage;
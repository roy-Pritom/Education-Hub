// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import {
//   Facebook,
//   Home,
//   Instagram,
//   Menu,
//   MoonIcon,
//   Phone,
//   Route,
//   SunIcon,
//   X,
// } from "lucide-react";
// import Image from "next/image";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolling, setScrolling] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   // Use effect to add or remove 'no-scroll' class on the body
//   useEffect(() => {
//     if (isOpen) {
//       document.body.classList.add("no-scroll");
//     } else {
//       document.body.classList.remove("no-scroll");
//     }
//     // Cleanup effect when component unmounts
//     return () => {
//       document.body.classList.remove("no-scroll");
//     };
//   }, [isOpen]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         setScrolling(true);
//       } else {
//         setScrolling(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <header
//       className={`${
//         scrolling
//           ? "bg-white dark:bg-slate-800 fixed w-full z-40"
//           : "fixed w-full z-40"
//       }`}
//     >
//       <div className="container mx-auto px-6 lg:px-20">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center ">
//             <Link href="/" className=" relative brightness-125">
//               <Image
//                 width={50}
//                 height={50}
//                 className="h-[35px] w-[35px]"
//                 src="https://cdn-icons-png.flaticon.com/128/3242/3242257.png"
//                 alt=""
//               />
//             </Link>
//           </div>
//           <div className="flex items-center">
//             <button
//               onClick={toggleMenu}
//               className={`${
//                 scrolling
//                   ? "text-[#0C9463] z-50 focus:outline-none"
//                   : "text-[#0C9463] z-50 focus:outline-none"
//               }`}
//             >
//               {isOpen ? (
//                 <X className="h-6 w-6 text-white" aria-hidden="true" />
//               ) : (
//                 <Menu className="h-6 w-6" aria-hidden="true" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
//       <motion.div
//         initial={{ opacity: 0, y: "-100%" }}
//         animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : "-100%" }}
//         transition={{ duration: 2 }}
//         className="fixed top-0 left-0 w-full h-full bg-gradient-to-r from-[#0C9463] via-[#0C9463] to-[#0C9463] flex flex-col items-center justify-center z-30"
//       >
//         <div className="w-full flex justify-center">
//           <div className="space-y-4">
//             <Link
//               className="flex items-center gap-3"
//               href="/"
//               onClick={() => setIsOpen(false)}
//             >
//               <Home size={20} className="text-white" />
//               <h1 className="text-white uppercase vigaRegular text-xl hover:text-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-white">
//                 Home
//               </h1>
//             </Link>
//             <div
//               className="flex items-center gap-3 cursor-pointer"
//               onClick={() => setIsOpen(false)}
//             >
//               <Route size={20} className="text-white" />
//               <h1
//                 // href="#about"
//                 className="text-white uppercase vigaRegular text-xl hover:text-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-white"
//               >
//                 About
//               </h1>
//             </div>
//             <div
//               className="flex items-center gap-3 cursor-pointer"
//               onClick={() => setIsOpen(false)}
//             >
//               <Route size={20} className="text-white" />
//               <h1
//                 // href="#about"
//                 className="text-white uppercase vigaRegular text-xl hover:text-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-white"
//               >
//                 Technology
//               </h1>
//             </div>
//             <div
//               className="flex items-center gap-3 cursor-pointer"
//               onClick={() => setIsOpen(false)}
//             >
//               <Route size={20} className="text-white" />
//               <h1
//                 // href="#about"
//                 className="text-white uppercase vigaRegular text-xl hover:text-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-white"
//               >
//                 Project
//               </h1>
//             </div>
//             <div
//               className="flex items-center gap-3 cursor-pointer"
//               onClick={() => setIsOpen(false)}
//             >
//               <Route size={20} className="text-white" />
//               <h1
//                 // href="#about"
//                 className="text-white uppercase vigaRegular text-xl hover:text-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-white"
//               >
//                 Blogs
//               </h1>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </header>
//   );
// };

// export default Header;


"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Home,
  Menu,
  MoonIcon,
  Phone,
  Route,
  SunIcon,
  X,
} from "lucide-react";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Avatar, Button } from "@nextui-org/react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const user = '4';
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const router = useRouter();
  const handleLogout = () => {
    const toastId = toast.loading('processing...')
    try {
      // logoutUser(router)
      toast.success("logout successfully", { id: toastId, duration: 1000 })
    }
    catch (error: any) {
      console.log(error?.message);
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navITem = <>
    {
      user ?
        <div className="flex items-center gap-4">
           <Link href="/subjects" className="hover:text-red-500">
            <button className="border-none ">Subjects</button>
          </Link>
          <Link href="/assessments" className="hover:text-red-500">
            <button className="border-none ">Assessments</button>
          </Link>
          <Link href="/login" className="hover:text-red-500">
            <button className="border-none ">Leaderboard</button>
          </Link>
          <Link href="/login" className="hover:text-red-500">
            <button className="border-none ">Chat</button>
          </Link>
            <button onClick={handleLogout} className="border-none hover:text-red-500 ">Logout</button>
          
        </div>
        :
        <div className="flex items-center gap-3">
          <Link href="/login" className="hover:text-red-500">
            <button className="border-none ">LogIn</button>
          </Link>
          <Link href="/register" className="hover:text-red-500">
            <button className="border-none">Sign Up</button>
          </Link>
        </div>
    }
  </>

  return (
    <header
      className={`${scrolling
        ? "bg-white dark:bg-slate-800 fixed w-full z-40"
        : "fixed w-full z-40 bg-[#00507B] md:text-white shadow-xl"
        }`}
    >
      <div className="container mx-auto py-3 flex md:justify-center justify-between items-center md:px-5 px-2 gap-5">
        <div className="">
          <div className="flex items-center justify-center gap-3 ">
            <Link href="/" className="text-lg   hover:text-red-500">
              Home
            </Link>
        
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-3">
          
          <div className="">
            {navITem}

          </div>
        </div>
        <button className="md:hidden text-slate-800" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="overflow-hidden md:hidden"
      >
        <div className="flex flex-col items-center bg-white dark:bg-slate-800">
          
          {navITem}

        </div>
      </motion.div>
    </header>
  );
};

export default Header;


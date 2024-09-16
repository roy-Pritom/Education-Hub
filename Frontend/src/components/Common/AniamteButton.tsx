"use client"
import { motion } from "framer-motion";
import { useState } from "react";
type TProps ={
  message:string;
  btnColor:string;
  textColor:string;
}
const AniamteButton = ({message,btnColor,textColor}:TProps) => {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className="relative inline-block"
      >
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className={`${btnColor} ${textColor} text-white rounded-full font-semibold px-5 py-2 hover:bg-black relative overflow-hidden shadow-lg transition duration-300 ease-in-out`}
        >
          {message}
          
          {/* Beautiful animated bar inside button */}
          <motion.div
            className="absolute bottom-0 left-2 right-2 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: hovered ? "100%" : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
  
          {/* Soft glow effect on hover */}
          {hovered && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          )}
        </motion.button>
      </motion.div>
    );
};

export default AniamteButton;
import React from "react";
import { SocialIcon } from "react-social-icons";
type Props = {};
import { motion } from "framer-motion";
export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start xl:items-center justify-between max-w-7xl mx-auto z-20">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://www.youtube.com/c/SonnySangha"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.youtube.com/c/SonnySangha"
          fgColor="gray"
          bgColor="transparent"
        />{" "}
        <SocialIcon
          url="https://www.youtube.com/c/SonnySangha"
          fgColor="gray"
          bgColor="transparent"
        />{" "}
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400 cursor-default">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
}

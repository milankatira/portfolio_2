import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function Card({}: Props) {
  return (
    <article
      className="cursor-pointer overflow-hidden
    opacity-100 hover:opacity-40 transition-all duration-300
    flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w[900px] snap-center bg-[#292929] p-10"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
        alt=""
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO OF papafam</h4>
        <p className="text-2xl font-bold mt-1">papafam</p>
        <div className="flex space-x-2 my-2">
          <img
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
            alt=""
            className="h-10 w-10 rounded-full"
          />

          <img
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
            alt=""
            className="h-10 w-10 rounded-full"
          />

          <img
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
            alt=""
            className="h-10 w-10 rounded-full"
          />
          {/* tech used */}
          {/* tech used */}
          {/* tech used */}
        </div>
        <p className="uppercase text-gray-300">started at... ended at...</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>summury</li>
          <li>summury</li>
          <li>summury</li>
        </ul>
      </div>
    </article>
  );
}

import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="h-56 w-56 -mb-20 md:mb-0 flex-shrink-0 object-cover rounded-full md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[400px]"
        // className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
        alt="FF"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">here is a litle background</h4>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
          reprehenderit repudiandae illum suscipit veritatis perspiciatis quo
          voluptatum quia laborum error ducimus eligendi magni amet atque
          reiciendis asperiores a animi, quos repellat nisi. Aperiam enim
          incidunt alias totam ducimus cupiditate rem, ea numquam voluptatem
          atque consequatur magnam neque esse maiores, vel ex repellendus
          quibusdam laudantium quod explicabo!
        </p>
      </div>
    </motion.div>
  );
}

import React from "react";
import { story } from "../data/MyStory";
import { motion } from "framer-motion";
import { statement } from "../data/Statement";
import ButtonLink from "./ButtonLink";
import { useContext } from "react";
import { AppContext } from "../App";

const Blog = () => {
  const { darkTheme, secondaryDarkTheme } = useContext(AppContext);

  const topAnimate = {
    offscreen: { opacity: 0, translateY: 100 },
    onscreen: { opacity: 1, translateY: 0 },
  };

  const myAnimationStory = story.toReversed().map((item, index) => {
    return index === 1 ? (
      <section
        className={`h-auto flex flex-col justify-center items-center gap-10 my-2`}
        key={item.id}
      >
        <h1
          className={`text-md lg:text-xl text-center font-bold text-gray-700 ${
            darkTheme ? "text-white" : null
          }`}
        >
          {item.title}
        </h1>
        <div
          className={`flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-center shadow-lg ${
            darkTheme ? secondaryDarkTheme : null
          }`}
        >
          <img
            src={item.img}
            alt="me"
            className="w-[300px] lg:w-[500px] shadow-2xl rounded-lg"
          />
          <p
            className={`w-[300px] p-5 text-center text-gray-600 text-sm lg:text-lg lg:w-[600px] lg:p-10 ${
              darkTheme ? "text-white" : null
            }`}
          >
            {item.description}
          </p>
        </div>
      </section>
    ) : index % 2 === 0 ? (
      <motion.section
        initial={"offscreen"}
        whileInView={"onscreen"}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
        variants={topAnimate}
        className={`h-auto flex flex-col justify-center items-center gap-10 my-2`}
        key={item.id}
      >
        <h1
          className={`text-md lg:text-xl text-center font-bold text-gray-700 ${
            darkTheme ? "text-white" : null
          }`}
        >
          {item.title}
        </h1>

        <div
          className={`flex flex-col-reverse gap-5 lg:flex-row lg:items-center lg:justify-center shadow-lg ${
            darkTheme ? secondaryDarkTheme : null
          }`}
        >
          <motion.p
            initial={"offscreen"}
            whileInView={"onscreen"}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
            variants={topAnimate}
            className={`w-[300px] p-5 text-center text-gray-600 text-sm lg:text-lg lg:w-[600px] lg:p-10 ${
              darkTheme ? "text-white" : null
            }`}
          >
            {item.description}
          </motion.p>
          <motion.img
            initial={"offscreen"}
            whileInView={"onscreen"}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            variants={topAnimate}
            src={item.img}
            alt="me"
            className="w-[300px] lg:w-[500px] shadow-2xl rounded-lg"
          />
        </div>
      </motion.section>
    ) : (
      <motion.section
        initial={"offscreen"}
        whileInView={"onscreen"}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
        variants={topAnimate}
        className={`h-auto flex flex-col justify-center items-center gap-10 my-2`}
        key={item.id}
      >
        <h1
          className={`text-md text-center lg:text-xl font-bold text-gray-700 ${
            darkTheme ? "text-white" : null
          }`}
        >
          {item.title}
        </h1>

        <div
          className={`flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-center shadow-lg ${
            darkTheme ? secondaryDarkTheme : null
          }`}
        >
          <motion.img
            initial={"offscreen"}
            whileInView={"onscreen"}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            variants={topAnimate}
            src={item.img}
            alt="me"
            className="w-[300px] lg:w-[500px] shadow-2xl rounded-lg"
          />

          <motion.p
            initial={"offscreen"}
            whileInView={"onscreen"}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
            variants={topAnimate}
            className={`w-[300px] p-5 text-center text-gray-600 text-sm lg:text-lg lg:w-[600px] lg:p-10 ${
              darkTheme ? "text-white" : null
            }`}
          >
            {item.description}
          </motion.p>
        </div>
      </motion.section>
    );
  });

  return (
    <>
      <main
        className={`font-montserrat flex flex-col justify-center items-center gap-10 py-10`}
      >
        <h1 className="text-center font-bold text-4xl my-5">My Stories</h1>

        {myAnimationStory}

        <motion.p
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1 }}
          variants={topAnimate}
          className={`text-base text-center font-md w-72 text-gray-600 px-10 py-4 lg:text-xl lg:w-[1100px] ${
            darkTheme ? "text-white" : null
          }`}
        >
          {/* {statement.thanks}    */}
        </motion.p>

        {/* <ButtonLink path='/projects' text='See my projects' /> */}
      </main>
    </>
  );
};

export default Blog;

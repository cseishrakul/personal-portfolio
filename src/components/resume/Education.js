import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex gap-20"
    >
      <div className="">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">1998-2010</p>
          <h2 className="text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Secondary School Education"
            subTitle="Kingstar
             Secondary School (1998-2000)"
            result="5.00/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Kingstar
             Secondary School(1998-2000)"
            result="5.00/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Kingstar
             Secondary School(1998-2000)"
            result="5.00/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      <div className="">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010-2022</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2011-2020)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years,having transformed itself from a producer and innovated-based economy."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Kingstar
             Secondary School(1998-2000)"
            result="5.00/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Kingstar
             Secondary School(1998-2000)"
            result="5.00/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;

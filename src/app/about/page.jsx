"use client"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {
  
  //const containerRef = useRef()
  const skillRef = useRef()
  const isSkillRefInView = useInView(skillRef, {once:true, margin:"-150px"})

  const experienceRef = useRef()
  const isExperienceRefInView = useInView(experienceRef, {once:true, margin:"-150px"})
  
  return (
    <motion.div 
    className="h-full" 
    initial={{y:"-200vh"}}
    animate={{y:"0%"}}
    transition={{duration: 1}}
    >
    {/* CONTAINER */}
    <div className=" h-full overflow-scroll lg:flex">
      {/* TEXT CONTAINER */}
      <div className=" p-4 sm:p-8 md:p-12 lg:p-24 xl:p-30 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-50 lg:w-2/3 lg:pr-0 xl:1/2">
        {/* SKILLS CONTAINER */}
        <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
          {/* SKILLS TITLE */}
          <motion.h1 
          initial={{x:"-300px"}}
          animate={isSkillRefInView ? { x : 0 } : {}}
          transition={{delay: 0.2 }}
          className="font-bold text-2xl">SKILLS</motion.h1>
          {/* SKILL LIST */}
          <motion.div 
            initial={{x:"-300px"}}
            animate={isSkillRefInView ? { x : 0 } : {}}
            className="flex gap-4 flex-wrap">
            <motion.div 
              whileHover={{scale: 1.1}}
              transition={{type: "spring", stiffness: 400, damping: 10 }}
              className="rounded p-2 text-sm cursor-pointer bg-black text-white outline hover:bg-white hover:text-black">JavaScript
            </motion.div>
            <motion.div 
              whileHover={{scale: 1.1}}
              transition={{type: "spring", stiffness: 400, damping: 10 }}
              className="rounded p-2 text-sm cursor-pointer bg-black text-white outline hover:bg-white hover:text-black">TypeScript</motion.div>
            <motion.div 
              whileHover={{scale: 1.1}}
              transition={{type: "spring", stiffness: 400, damping: 10 }}
              className="rounded p-2 text-sm cursor-pointer bg-black text-white outline hover:bg-white hover:text-black">React.js</motion.div>
            <motion.div 
              whileHover={{scale: 1.1}}
              transition={{type: "spring", stiffness: 400, damping: 10 }}
              className="rounded p-2 text-sm cursor-pointer bg-black text-white outline hover:bg-white hover:text-black">Next.js</motion.div>
            <motion.div 
              whileHover={{scale: 1.1}}
              transition={{type: "spring", stiffness: 400, damping: 10 }}
              className="rounded p-2 text-sm cursor-pointer bg-black text-white outline hover:bg-white hover:text-black">HTML/CSS</motion.div>
            <motion.div 
              whileHover={{scale: 1.1}}
              transition={{type: "spring", stiffness: 400, damping: 10 }}
              className="rounded p-2 text-sm cursor-pointer bg-black text-white outline hover:bg-white hover:text-black">Tailwind CSS</motion.div>
            <motion.div 
              whileHover={{scale: 1.1}}
              transition={{type: "spring", stiffness: 400, damping: 10 }}
              className="rounded p-2 text-sm cursor-pointer bg-black text-white outline hover:bg-white hover:text-black">Python</motion.div>
            <motion.div 
              whileHover={{scale: 1.1}}
              transition={{type: "spring", stiffness: 400, damping: 10 }}
              className="rounded p-2 text-sm cursor-pointer bg-black text-white outline hover:bg-white hover:text-black">Selenium</motion.div>
            <motion.div 
              whileHover={{scale: 1.1}}
              transition={{type: "spring", stiffness: 400, damping: 10 }}
              className="rounded p-2 text-sm cursor-pointer bg-black text-white outline hover:bg-white hover:text-black">Pandas</motion.div>
            <motion.div 
              whileHover={{scale: 1.1}}
              transition={{type: "spring", stiffness: 400, damping: 10 }}
              className="rounded p-2 text-sm cursor-pointer bg-black text-white outline hover:bg-white hover:text-black">Sklearn</motion.div>
            <motion.div 
              whileHover={{scale: 1.1}}
              transition={{type: "spring", stiffness: 400, damping: 10 }}
              className="rounded p-2 text-sm cursor-pointer bg-black text-white outline hover:bg-white hover:text-black">Java</motion.div>
            <motion.div 
              whileHover={{scale: 1.1}}
              transition={{type: "spring", stiffness: 400, damping: 10 }}
              className="rounded p-2 text-sm cursor-pointer bg-black text-white outline hover:bg-white hover:text-black">MySQL</motion.div>
            <motion.div 
              whileHover={{scale: 1.1}}
              transition={{type: "spring", stiffness: 400, damping: 10 }}
              className="rounded p-2 text-sm cursor-pointer bg-black text-white outline hover:bg-white hover:text-black">MongoDB</motion.div>
            <motion.div 
              whileHover={{scale: 1.1}}
              transition={{type: "spring", stiffness: 400, damping: 10 }}
              className="rounded p-2 text-sm cursor-pointer bg-black text-white outline hover:bg-white hover:text-black">GCP</motion.div>
            <motion.div 
              whileHover={{scale: 1.1}}
              transition={{type: "spring", stiffness: 400, damping: 10 }}
              className="rounded p-2 text-sm cursor-pointer bg-black text-white outline hover:bg-white hover:text-black">Git</motion.div>
            <motion.div 
              whileHover={{scale: 1.1}}
              transition={{type: "spring", stiffness: 400, damping: 10 }}
              className="rounded p-2 text-sm cursor-pointer bg-black text-white outline hover:bg-white hover:text-black">R</motion.div>
          </motion.div>
        </div>
        {/* EXPERIENCE CONTAINER */}
        <div className="flex flex-col gap-12 justify-center pb-24" ref={experienceRef}>
          {/* EXPERIENCE TITLE */}
          <motion.h1 
            className="font-bold text-2xl"
            initial={{x:"-300px"}}
            animate={isExperienceRefInView ? { x : 0 } : {}}
            transition={{delay: 0.2 }}
          >
          EXPERIENCE</motion.h1>
          {/* EXPERIENCE LIST */}
          <motion.div 
            className=""
            initial={{y:"300px"}}
            animate={isExperienceRefInView ? { y : 0 } : {}}
            transition={{delay: 0.2 }}
          >
            {/* EXPERIENCE LIST ITEM*/}
            <div className="flex justify-between h-48">
              {/* LEFT */}
              <div className="w-1/3">
                {/* JOB TITLE */}
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg w-fit outline">Backend Software Engineer Intern</div>
                {/* JOB DESC */}
                <div className="p-3 text-sm italic">My first SWE internship!</div>
                {/* JOB DATE */}
                <div className="p-1 text-red-400 text-sm font-semibold">2023-2024</div>
                {/* JOB COMPANY */}
                <div className="p-1 rounded italic text-sm w-fit font-semibold">Trax Contents</div>
              </div>
              {/* CENTER */}
              <div className="justify-center flex w-1/6">
                {/* LINE */}
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  {/* LINE CIRCLE */}
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="w-1/3"></div>
            </div>
            {/* EXPERIENCE LIST ITEM*/}
            <div className="flex justify-between h-48">
              {/* LEFT */}
              <div className="w-1/3"></div>
              {/* CENTER */}
              <div className="flex justify-center w-1/6">
                {/* LINE */}
                <div className="w-1 h-full bg-gray-700 rounded relative">
                  {/* LINE CIRCLE */}
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="w-1/3">
                {/* JOB TITLE */}
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg w-fit outline">Undergraduate Research Assistant</div>
                {/* JOB DESC */}
                <div className="p-3 text-sm italic">My first research position!</div>
                {/* JOB DATE */}
                <div className="p-1 text-red-400 text-sm font-semibold">2022-2023</div>
                {/* JOB COMPANY */}
                <div className="p-1 rounded italic font-semibold text-sm w-fit">McCombs School of Business</div>
              </div>
            </div>
            {/* EXPERIENCE LIST ITEM*/}
            <div className="flex justify-between h-48">
              {/* LEFT */}
              <div className="w-1/3">
                {/* JOB TITLE */}
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg w-fit outline">Undergraduate Student</div>
                {/* JOB DESC */}
                <div className="p-3 text-sm italic">The start of my UT Longhorn Journey! </div>
                {/* JOB DATE */}
                <div className="p-1 text-red-400 text-sm font-semibold">2021-Present</div>
                {/* JOB COMPANY */}
                <div className="p-1 rounded italic font-semibold text-sm w-fit">UT Austin</div>
              </div>
              {/* CENTER */}
              <div className="flex justify-center w-1/6">
                {/* LINE */}
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  {/* LINE CIRCLE */}
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="w-1/3"></div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* SVG CONTAINER */}
      <div className="hidden lg:block w-1/3 xl:1/2"></div>
    </div>
    </motion.div>
  )
}

export default AboutPage;
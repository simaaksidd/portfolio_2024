"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-gray-200 to-red-100",
    title: "Scraping E-commerce Sites",
    desc: "This project is a compilation of web scraping scripts which capture and process live data using Selenum, Beautiful Soup 4, and Pandas.",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://github.com/simaaksidd/Webscraping",
  },
  {
    id: 2,
    color: "from-red-100 to-green-100",
    title: "Database Management",
    desc: "This portfolio includes Database management projects from popular frameworks such as MySQL, PostgreSQL, BigQuery, Firestore, mongoDB, etc.",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://github.com/cs327e-fall2023/Simaak-and-Edward",
  },
  {
    id: 3,
    color: "from-green-100 to-blue-100",
    title: "DSA",
    desc: "These projects cover a wide spectrum of DSA topics, from basic scripting to advanced data structures and algorithms.",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://github.com/simaaksidd/Programming_Assignments",
  },
  {
    id: 4,
    color: "from-blue-100 to-blue-100",
    title: "Data Analysis",
    desc: "This semester-long group project focused on the life-cycle of data, including collecting, processing, cleaning, analyzing and interpreting Insurance claims data to determine various characteristics of differing insurace claims.",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://github.com/simaaksidd/Insurance_Claims",
  },
];

const PortfolioPage = () => {
  
  const ref = useRef();

  const {scrollYProgress} = useScroll({target:ref});
  
  const x = useTransform(scrollYProgress, [0,1], ["0%","-80%"]);

  return (
    <motion.div 
      className="h-full" 
      initial={{y:"-200vh"}}
      animate={{y:"0%"}}
      transition={{duration: 1}}
    >
          <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
            <h1 className="text-8xl pt-20">Curious?</h1>
            <div className="relative">
              <motion.svg
                animate={{ rotate: 360 }}
                transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                viewBox="0 0 300 300"
                className="w-64 h-64 md:w-[500px] md:h-[500px] "
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                  />
                </defs>
                <text fill="#000">
                  <textPath xlinkHref="#circlePath" className="text-xl">
                    Student and Full-Stack Developer
                  </textPath>
                </text>
              </motion.svg>
              <Link href="/contact" className="w-28 h-28 md:w-49 md:h-49 absolute top-0 left-0 right-0 bottom-0 m-auto z-40 bg-black text-white rounded-full flex items-center justify-center">
                Contact Me
              </Link>
            </div>
          </div>
    </motion.div>
  )
}

export default PortfolioPage;
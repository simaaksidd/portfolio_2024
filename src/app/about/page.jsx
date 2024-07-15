"use client"
import { motion } from "framer-motion";

const AboutPage = () => {
    return (
      <motion.div 
      className="h-full" 
      initial={{y:"-200vh"}}
      animate={{y:"0%"}}
      transition={{duration: 1}}
    >
      {/* CONTAINER */}
      <div className=" h-full overflow-scroll">
        {/* TEXT CONTAINER */}
        <div className=" p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
          {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
          {/* BIOGRAPHY DESC */}
            <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nunc neque, maximus quis gravida ac, eleifend a tellus. Integer at velit interdum, accumsan arcu sit amet, tincidunt risus. Suspendisse varius ut purus quis gravida. Suspendisse sed justo quam. Donec et lorem velit. Ut sollicitudin finibus mi vitae finibus. Donec magna nisi, porta a nibh accumsan, pulvinar placerat metus. Sed laoreet fringilla quam, eget lacinia nisl maximus a. Fusce consectetur odio ut mattis placerat. Quisque est augue, feugiat efficitur tellus et, lacinia porttitor nunc. Morbi sed augue et risus mattis vulputate sit amet vitae felis. Sed tempus mauris id purus lobortis malesuada. Nam ut lacus mi. Duis gravida justo neque, et tempor orci congue a. In massa dui, ornare malesuada tellus sit amet, accumsan fringilla quam.
            </p>
          {/* BIOGRAPHY QUOTE */}
            <span className="italic text-sm">
            "Problems worthy of attack prove their worth by hitting back." -Piet Hein
            </span>
          {/* BIOGRAPHY SIGN SVG */}
          <div className="self-end">
            <svg xmlns="http://www.w3.org/2000/svg" width="126" height="60" viewBox="0 0 313 150" fill="none">
              <path d="M2 146.595C8.39327 142.333 6.95335 142.154 13.6111 138.317C26.4606 130.912 37.3101 121.687 48.5 112C72.7111 91.0411 99.9211 69.4103 116.944 41.8725C124.575 29.5284 131 18 133.222 4.37255C132.5 1.00001 129 1.62912 126.5 3.35989C123.262 5.60189 122.032 6.33294 119 8.85989C109.397 16.8626 100.746 23.9928 94.4444 35.0948C90.5724 41.917 85 52.3773 85 60.3725C85 73.4089 96 85.2416 96 98.5948C96 104.307 91.8587 108.825 89.4444 113.873C86.9293 119.131 80.2983 125.364 74.4444 126.428C66.3224 127.905 59.614 125.74 53 121.373C41.788 113.968 47.8737 116.546 37 107.595C35.5 106.36 21.5 101.5 17.5 101.5C13.5 101.5 -0.357893 103.351 2 107.595C4.50663 112.107 7.14478 112.5 11.5 112.5C23.7967 112.5 36.0828 112.914 48.5 112.5C65.2419 111.942 81.1879 109.461 97.7778 107.595C108.33 106.408 118.589 102.468 129 101.373C129.907 101.277 131.508 100.329 132.444 99.9281C132.924 99.7227 129.801 103.63 129 104.317C126.3 106.632 123.871 110.203 123.056 113.873C121.976 118.729 127.949 119.12 131 117.595C137.936 114.127 145.147 107.526 150 101.595C151.458 99.8126 161.507 85.742 163.5 86.5392C165.684 87.4129 165.198 99.0572 164.5 100.873C162.88 105.086 161.9 109.788 160.222 114.15C158.05 119.799 155.334 121.512 159 114.373C163.496 105.617 167.139 99.7048 174.444 92.9837C175.802 91.7349 179.258 88.4837 181.444 88.4837C182.8 88.4837 183.855 95.8395 183.944 96.8726C184.466 102.868 184.308 110.313 181.556 115.817C181.102 116.725 177.344 122.241 177.222 121.928C176.047 118.907 180.626 113.914 182 111.373C184.473 106.798 193.925 94.3726 200 94.3726C205.097 94.3726 199.862 111.111 199 112.595C196.673 116.602 192.703 120.439 191.111 124.817C190.14 127.486 195.514 121.848 196.111 121.317C200.2 117.683 205.004 114.57 209.444 111.373C213.265 108.621 215.966 104.173 220.056 101.873C221.987 100.786 230.252 94.6461 224 98.5948C219.662 101.334 213.81 110.8 211.778 115.373C210.564 118.104 205.897 123.871 209.5 125.873C213.941 128.34 219.136 119 220.5 115.817C222.2 111.85 226.143 99.4999 224.778 103.595C222.567 110.226 218.625 119.74 220.222 126.928C221.812 134.081 232.283 123.09 234 121.373C238.835 116.537 243.01 111.028 247.5 105.873C250.947 101.915 256.097 98.2553 258.944 93.9837C259.466 93.2015 253.496 99.8767 252 101.373C247.146 106.226 241.462 110.877 239.222 117.595C238.387 120.1 236.065 128.846 239.5 130.373C244.996 132.815 250.453 123.037 252.444 118.873C254.957 113.619 261.208 97.4102 259.944 103.095C259.453 105.308 252.804 125.138 256.5 124.317C259.933 123.554 262.604 117.143 264.556 114.595C269.879 107.645 274.04 99.5871 278 91.817C281.835 84.2923 285.186 77.2142 287.778 69.1503C289.204 64.7139 290.149 60.1265 291.444 55.6503C291.882 54.1387 293.556 51.594 293.556 50.0392C293.556 45.5918 289.13 57.7902 287.5 61.9281C285.185 67.8055 282.322 73.3553 280.5 79.4281C277.73 88.6619 275.591 98.5058 275.056 108.15C274.914 110.702 274.53 112.662 273.5 114.928C271.832 118.597 271.374 122.406 270.222 126.15C269.098 129.804 268.671 133.498 268 137.373C267.762 138.745 265 153.039 265 146.595C265 133.696 270.746 123.477 274.444 111.373C277.231 102.253 277.331 92.7326 283.444 84.8726C287.149 80.1093 296.863 75.3726 302.778 75.3726C309.466 75.3726 308 83.8758 308 88.1503C308 94.7105 295.536 98.12 290.444 99.817C287.939 100.652 285.091 101.373 282.444 101.373C274.89 101.373 287.225 102.251 289 102.317C292.802 102.458 305.6 101.172 306 108.373C306.341 114.509 299.08 121.915 296 126.706C295.027 128.22 293.636 138.468 296.222 138.373C303.314 138.11 305.526 129.197 311 127.373" stroke="black" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
          {/* BIOGRAPHY SCROLL SVG */}
          <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* SKILLS TITLE */}
            <h1 className="font-bold text-2xl">SKILLS</h1>
            {/* SKILL LIST */}
            <div className="flex gap-4 flex-wrap">
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white outline hover:bg-white hover:text-black">JavaScript</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white outline hover:bg-white hover:text-black">TypeScript</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white outline hover:bg-white hover:text-black">React.js</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white outline hover:bg-white hover:text-black">Next.js</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white outline hover:bg-white hover:text-black">HTML/CSS</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white outline hover:bg-white hover:text-black">Tailwind CSS</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white outline hover:bg-white hover:text-black">Python</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white outline hover:bg-white hover:text-black">Selenium</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white outline hover:bg-white hover:text-black">Pandas</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white outline hover:bg-white hover:text-black">Sklearn</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white outline hover:bg-white hover:text-black">Java</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white outline hover:bg-white hover:text-black">MySQL</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white outline hover:bg-white hover:text-black">MongoDB</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white outline hover:bg-white hover:text-black">GCP</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white outline hover:bg-white hover:text-black">Git</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white outline hover:bg-white hover:text-black">R</div>
            </div>
        {/* SKILL SCROLL SVG */}
        <motion.svg
          initial={{ opacity: 0.2, y: 0 }}
          animate={{ opacity: 1, y: "10px" }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width={50}
          height={50}
        >
          <path
            d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
            stroke="#000000"
            strokeWidth="1"
          ></path>
          <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
          <path
            d="M15 11L12 14L9 11"
            stroke="#000000"
            strokeWidth="1"
          ></path>
        </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div className="flex flex-col gap-12 justify-center pb-48">
            {/* EXPERIENCE TITLE */}
            <h1 className="font-bold text-2xl">EXPERIENCE</h1>
            {/* EXPERIENCE LIST */}
            <div className="">
              
              {/* EXPERIENCE LIST ITEM*/}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg w-fit outline">BACKEND SOFTWARE ENGINEER</div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">lorem</div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">2024-Present</div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white test-sm font-semibold w-fit outline">Apple</div>
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
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg w-fit outline">BACKEND SOFTWARE ENGINEER</div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">lorem</div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">2024-Present</div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white test-sm font-semibold w-fit outline">Apple</div>
                </div>
              </div>

              {/* EXPERIENCE LIST ITEM*/}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg w-fit outline">BACKEND SOFTWARE ENGINEER</div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">lorem</div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">2024-Present</div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white test-sm font-semibold w-fit outline">Apple</div>
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
            </div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden"></div>
      </div>
      </motion.div>
    )
  }
  
  export default AboutPage;
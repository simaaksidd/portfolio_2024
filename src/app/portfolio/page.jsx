"use client"
import React from "react";
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

  // const {scrollYProgress} = useScroll({target:ref});

  return (
    <motion.div 
      className="h-full" 
      initial={{y:"-200vh"}}
      animate={{y:"0%"}}
      transition={{duration: 1}}
    >
    <section>
    <div className="py-16">
        <div className="mx-auto px-6 max-w-6xl">
            <div className="text-center">
                <h2 className="text-8xl pt-20">My Work</h2>
                <p className="mt-6 text-gray-700 "></p>
            </div>
            <div className="mt-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                <div className="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200">
                  <div aria-hidden="true" className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 bg-gradient-to-b duration-200 from-blue-500 to-white blur-2xl opacity-30"></div>
                    <div className="relative justify-center items-center">
                      <div className="border border-blue-500/10 flex justify-center items-center relative *:relative h-14 w-14 rounded-lg before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-blue-100 before:bg-gradient-to-b before:shadow">
                        <svg className="pl-1 pt-1 opacity-100 z-10" viewBox="0 0 120 120" width="45px" height="45px" version="1.0" xmlns="http://www.w3.org/2000/svg" xmlnsCc="http://creativecommons.org/ns#" xmlnsDc="http://purl.org/dc/elements/1.1/" xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlnsXlink="http://www.w3.org/1999/xlink">
                          <metadata>
                            <rdfRDF>
                              <ccWork rdfAbout="">
                                <dcFormat>image/svg+xml</dcFormat>
                                <dcType rdfResource="http://purl.org/dc/dcmitype/StillImage"/>
                              </ccWork>
                            </rdfRDF>
                          </metadata>
                            <defs>
                              <linearGradient id="c" x1="150.96" x2="112.03" y1="192.35" y2="137.27" gradientTransform="matrix(.56254 0 0 .56797 -14.991 -11.702)" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#ffd43b" offset="0"/>
                                <stop stop-color="#ffe873" offset="1"/>
                              </linearGradient>
                              <linearGradient id="b" x1="26.649" x2="135.67" y1="20.604" y2="114.4" gradientTransform="matrix(.56254 0 0 .56797 -14.991 -11.702)" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#5a9fd4" offset="0"/>
                                <stop stop-color="#306998" offset="1"/>
                              </linearGradient>
                              <radialGradient id="a" cx="61.519" cy="132.29" r="29.037" gradientTransform="matrix(1.7491e-8 -.23995 1.0547 3.7915e-7 -83.701 142.46)" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#b8b8b8" stop-opacity=".49804" offset="0"/>
                                <stop stop-color="#7f7f7f" stop-opacity="0" offset="1"/>
                              </radialGradient>
                            </defs>
                          <path d="m54.919 9.1927e-4c-4.5837 0.021298-8.9609 0.41222-12.812 1.0938-11.346 2.0045-13.406 6.2001-13.406 13.937v10.219h26.812v3.4062h-36.875c-7.7925 0-14.616 4.6837-16.75 13.594-2.4618 10.213-2.571 16.586 0 27.25 1.9059 7.9379 6.4575 13.594 14.25 13.594h9.2188v-12.25c0-8.8499 7.6571-16.656 16.75-16.656h26.781c7.455 0 13.406-6.1382 13.406-13.625v-25.531c0-7.2663-6.13-12.725-13.406-13.937-4.606-0.76673-9.3851-1.115-13.969-1.0938zm-14.5 8.2188c2.7695 0 5.0312 2.2986 5.0312 5.125-2e-6 2.8163-2.2617 5.0938-5.0312 5.0938-2.7795-1e-6 -5.0312-2.2774-5.0312-5.0938-1e-6 -2.8264 2.2518-5.125 5.0312-5.125z" fill="url(#b)"/>
                          <path d="m85.638 28.657v11.906c0 9.2308-7.8259 17-16.75 17h-26.781c-7.3358 0-13.406 6.2785-13.406 13.625v25.531c0 7.2663 6.3186 11.54 13.406 13.625 8.4873 2.4956 16.626 2.9466 26.781 0 6.7502-1.9544 13.406-5.8876 13.406-13.625v-10.219h-26.781v-3.4062h40.188c7.7925 0 10.696-5.4354 13.406-13.594 2.7993-8.3989 2.6802-16.476 0-27.25-1.9258-7.7574-5.6039-13.594-13.406-13.594zm-15.062 64.656c2.7795 3e-6 5.0312 2.2774 5.0312 5.0937-2e-6 2.8264-2.2518 5.125-5.0312 5.125-2.7696 0-5.0312-2.2986-5.0312-5.125 2e-6 -2.8163 2.2617-5.0937 5.0312-5.0937z" fill="url(#c)"/>
                          <ellipse cx="55.817" cy="127.7" rx="35.931" ry="6.9673" fill="url(#a)" opacity=".44382"/>
                        </svg>
                      </div>
                      <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
                        <p className="text-gray-700">I have 4 years of Experience with Python. Check out my Webscraping project.</p>
                      </div>
                      <div className="flex gap-36 -mb-8 py-4 border-t border-gray-200 ">
                          <a href="#" download="/" className="group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center">
                            <span>Download</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 13l-5 5m0 0l-5-5m5 5V6"></path></svg>
                          </a>
                          <a href="https://github.com/simaaksidd/Webscraping" className="group flex items-center rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 text-gray-950 hover:bg-gray-200/75 active:bg-gray-100 size-8 justify-center">
                            <span className="sr-only">Source Code</span>
                            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"></path></svg>
                          </a>
                      </div>
                    </div>
                </div>
                <div className="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200">
                  <div aria-hidden="true" className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 bg-gradient-to-b duration-200 from-green-500 to-white blur-2xl opacity-30"></div>
                    <div className="relative justify-center items-center">
                      <div className="border border-blue-500/10 flex justify-center items-center relative *:relative h-14 w-14 rounded-lg before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-green-100 before:bg-gradient-to-b before:shadow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="120px" height="120px" viewBox="0 0 35 35" className="pl-1 pt-1 flex relative justify-center items-center opacity-100 z-10"><path d="M15.9.087l.854 1.604c.192.296.4.558.645.802.715.715 1.394 1.464 2.004 2.266 1.447 1.9 2.423 4.01 3.12 6.292.418 1.394.645 2.824.662 4.27.07 4.323-1.412 8.035-4.4 11.12-.488.488-1.01.94-1.57 1.342-.296 0-.436-.227-.558-.436-.227-.383-.366-.82-.436-1.255-.105-.523-.174-1.046-.14-1.586v-.244C16.057 24.21 15.796.21 15.9.087z" fill="#599636"/><path d="M15.9.034c-.035-.07-.07-.017-.105.017.017.35-.105.662-.296.96-.21.296-.488.523-.767.767-1.55 1.342-2.77 2.963-3.747 4.776-1.3 2.44-1.97 5.055-2.16 7.808-.087.993.314 4.497.627 5.508.854 2.684 2.388 4.933 4.375 6.885.488.47 1.01.906 1.55 1.325.157 0 .174-.14.21-.244a4.78 4.78 0 0 0 .157-.68l.35-2.614L15.9.034z" fill="#6cac48"/><path d="M16.754 28.845c.035-.4.227-.732.436-1.063-.21-.087-.366-.26-.488-.453-.105-.174-.192-.383-.26-.575-.244-.732-.296-1.5-.366-2.248v-.453c-.087.07-.105.662-.105.75a17.37 17.37 0 0 1-.314 2.353c-.052.314-.087.627-.28.906 0 .035 0 .07.017.122.314.924.4 1.865.453 2.824v.35c0 .418-.017.33.33.47.14.052.296.07.436.174.105 0 .122-.087.122-.157l-.052-.575v-1.604c-.017-.28.035-.558.07-.82z" fill="#c2bfbf"/></svg>
                      </div>
                      <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
                        <p className="text-gray-700">I have experience with variety of database technologies. My favorite is MongoDB.</p>
                      </div>
                      <div className="flex gap-36 -mb-8 py-4 border-t border-gray-200 ">
                          <a href="#" download="/" className="group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center">
                            <span>Download</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 13l-5 5m0 0l-5-5m5 5V6"></path></svg>
                          </a>
                          <a href="https://github.com/simaaksidd/db_projects" className="group flex items-center rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 text-gray-950 hover:bg-gray-200/75 active:bg-gray-100 size-8 justify-center">
                            <span className="sr-only">Source Code</span>
                            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"></path></svg>
                          </a>
                      </div>
                    </div>
                </div>
                <div className="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200">
                  <div aria-hidden="true" className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 bg-gradient-to-b duration-200 from-orange-500 to-white blur-2xl opacity-30"></div>
                    <div className="relative justify-center items-center">
                      <div className="border border-blue-500/10 flex justify-center items-center relative *:relative h-14 w-14 rounded-lg before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-orange-100 before:bg-gradient-to-b before:shadow">
                        <svg className="pl-2 pt-1 flex relative justify-center items-center opacity-100 z-10" version="1.1" viewBox="0 0 120 120"width="50px" height="50px" xmlns="http://www.w3.org/2000/svg">
                          <title>1_black</title>
                          <desc>Created with Sketch.</desc>
                          <g fill="none" fill-rule="evenodd">
                            <g transform="translate(-2093 -290)">
                              <g transform="translate(2093 290)">
                                <path d="m67.507 83.066c2.4937-2.49 6.5303-2.4835 9.016 0.014526 2.4857 2.4981 2.4792 6.5417-0.014501 9.0317l-11.073 11.057c-10.216 10.201-26.875 10.349-37.263 0.34363-0.060041-0.057526-4.6857-4.5931-19.945-19.556-10.152-9.9541-11.163-25.882-1.6101-36.111l17.812-19.072c9.4813-10.153 26.959-11.262 37.799-2.4956l16.177 13.083c2.7396 2.2156 3.1675 6.2365 0.95577 8.9809s-6.2256 3.173-8.9652 0.95744l-16.177-13.083c-5.6694-4.5848-15.587-3.9552-20.479 1.2833l-17.812 19.072c-4.6507 4.9795-4.1413 13.001 1.2182 18.257 11.205 10.988 19.841 19.455 19.851 19.465 5.4008 5.2018 14.133 5.1242 19.436-0.17085l11.073-11.057z" fill="#FFA116" fill-rule="nonzero"/>
                                <path d="m40.607 72.001c-3.521 0-6.3753-2.8593-6.3753-6.3864s2.8543-6.3864 6.3753-6.3864h47.018c3.521 0 6.3753 2.8593 6.3753 6.3864s-2.8543 6.3864-6.3753 6.3864h-47.018z" fill="#B3B3B3"/>
                                <path d="m49.412 2.0234c2.4055-2.5757 6.4398-2.7102 9.011-0.30058 2.5712 2.4097 2.7055 6.4511 0.30005 9.0267l-42.795 45.823c-4.6509 4.9791-4.1415 13.001 1.2177 18.256l19.763 19.38c2.5161 2.4673 2.5592 6.5107 0.096204 9.0312-2.463 2.5205-6.4994 2.5637-9.0155 0.096372l-19.764-19.38c-10.151-9.9546-11.163-25.883-1.609-36.11l42.795-45.823z" fill="#000"/>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
                        <p className="text-gray-700">I have extensive data structures and algorithms training. Here .</p>
                      </div>
                      <div className="flex gap-36 -mb-8 py-4 border-t border-gray-200 ">
                          <a href="#" download="/" className="group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center">
                            <span>Download</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 13l-5 5m0 0l-5-5m5 5V6"></path></svg>
                          </a>
                          <a href="https://github.com/simaaksidd/Webscraping" className="group flex items-center rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 text-gray-950 hover:bg-gray-200/75 active:bg-gray-100 size-8 justify-center">
                            <span className="sr-only">Source Code</span>
                            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"></path></svg>
                          </a>
                      </div>
                    </div>
                </div>
                <div className="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200">
                  <div aria-hidden="true" className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 bg-gradient-to-b duration-200 from-blue-500 to-white blur-2xl opacity-30"></div>
                    <div className="relative justify-center items-center">
                      <div className="border border-blue-500/10 flex justify-center items-center relative *:relative h-14 w-14 rounded-lg before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-blue-100 before:bg-gradient-to-b before:shadow">
                        <svg className="pl-1 pt-1 opacity-100 z-10" viewBox="0 0 120 120" width="45px" height="45px" version="1.0" xmlns="http://www.w3.org/2000/svg" xmlnsCc="http://creativecommons.org/ns#" xmlnsDc="http://purl.org/dc/elements/1.1/" xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlnsXlink="http://www.w3.org/1999/xlink">
                          <metadata>
                            <rdfRDF>
                              <ccWork rdfAbout="">
                                <dcFormat>image/svg+xml</dcFormat>
                                <dcType rdfResource="http://purl.org/dc/dcmitype/StillImage"/>
                              </ccWork>
                            </rdfRDF>
                          </metadata>
                            <defs>
                              <linearGradient id="c" x1="150.96" x2="112.03" y1="192.35" y2="137.27" gradientTransform="matrix(.56254 0 0 .56797 -14.991 -11.702)" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#ffd43b" offset="0"/>
                                <stop stop-color="#ffe873" offset="1"/>
                              </linearGradient>
                              <linearGradient id="b" x1="26.649" x2="135.67" y1="20.604" y2="114.4" gradientTransform="matrix(.56254 0 0 .56797 -14.991 -11.702)" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#5a9fd4" offset="0"/>
                                <stop stop-color="#306998" offset="1"/>
                              </linearGradient>
                              <radialGradient id="a" cx="61.519" cy="132.29" r="29.037" gradientTransform="matrix(1.7491e-8 -.23995 1.0547 3.7915e-7 -83.701 142.46)" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#b8b8b8" stop-opacity=".49804" offset="0"/>
                                <stop stop-color="#7f7f7f" stop-opacity="0" offset="1"/>
                              </radialGradient>
                            </defs>
                          <path d="m54.919 9.1927e-4c-4.5837 0.021298-8.9609 0.41222-12.812 1.0938-11.346 2.0045-13.406 6.2001-13.406 13.937v10.219h26.812v3.4062h-36.875c-7.7925 0-14.616 4.6837-16.75 13.594-2.4618 10.213-2.571 16.586 0 27.25 1.9059 7.9379 6.4575 13.594 14.25 13.594h9.2188v-12.25c0-8.8499 7.6571-16.656 16.75-16.656h26.781c7.455 0 13.406-6.1382 13.406-13.625v-25.531c0-7.2663-6.13-12.725-13.406-13.937-4.606-0.76673-9.3851-1.115-13.969-1.0938zm-14.5 8.2188c2.7695 0 5.0312 2.2986 5.0312 5.125-2e-6 2.8163-2.2617 5.0938-5.0312 5.0938-2.7795-1e-6 -5.0312-2.2774-5.0312-5.0938-1e-6 -2.8264 2.2518-5.125 5.0312-5.125z" fill="url(#b)"/>
                          <path d="m85.638 28.657v11.906c0 9.2308-7.8259 17-16.75 17h-26.781c-7.3358 0-13.406 6.2785-13.406 13.625v25.531c0 7.2663 6.3186 11.54 13.406 13.625 8.4873 2.4956 16.626 2.9466 26.781 0 6.7502-1.9544 13.406-5.8876 13.406-13.625v-10.219h-26.781v-3.4062h40.188c7.7925 0 10.696-5.4354 13.406-13.594 2.7993-8.3989 2.6802-16.476 0-27.25-1.9258-7.7574-5.6039-13.594-13.406-13.594zm-15.062 64.656c2.7795 3e-6 5.0312 2.2774 5.0312 5.0937-2e-6 2.8264-2.2518 5.125-5.0312 5.125-2.7696 0-5.0312-2.2986-5.0312-5.125 2e-6 -2.8163 2.2617-5.0937 5.0312-5.0937z" fill="url(#c)"/>
                          <ellipse cx="55.817" cy="127.7" rx="35.931" ry="6.9673" fill="url(#a)" opacity=".44382"/>
                        </svg>
                      </div>
                      <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
                        <p className="text-gray-700">I have 4 years of Experience with Python. Check out my Webscraping project.</p>
                      </div>
                      <div className="flex gap-36 -mb-8 py-4 border-t border-gray-200 ">
                          <a href="#" download="/" className="group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center">
                            <span>Download</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 13l-5 5m0 0l-5-5m5 5V6"></path></svg>
                          </a>
                          <a href="https://github.com/simaaksidd/Webscraping" className="group flex items-center rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 text-gray-950 hover:bg-gray-200/75 active:bg-gray-100 size-8 justify-center">
                            <span className="sr-only">Source Code</span>
                            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"></path></svg>
                          </a>
                      </div>
                    </div>
                </div>
                <div className="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200">
                  <div aria-hidden="true" className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 bg-gradient-to-b duration-200 from-blue-500 to-white blur-2xl opacity-30"></div>
                    <div className="relative justify-center items-center">
                      <div className="border border-blue-500/10 flex justify-center items-center relative *:relative h-14 w-14 rounded-lg before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-blue-100 before:bg-gradient-to-b before:shadow">
                        <svg className="pl-1 pt-1 opacity-100 z-10" viewBox="0 0 120 120" width="45px" height="45px" version="1.0" xmlns="http://www.w3.org/2000/svg" xmlnsCc="http://creativecommons.org/ns#" xmlnsDc="http://purl.org/dc/elements/1.1/" xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlnsXlink="http://www.w3.org/1999/xlink">
                          <metadata>
                            <rdfRDF>
                              <ccWork rdfAbout="">
                                <dcFormat>image/svg+xml</dcFormat>
                                <dcType rdfResource="http://purl.org/dc/dcmitype/StillImage"/>
                              </ccWork>
                            </rdfRDF>
                          </metadata>
                            <defs>
                              <linearGradient id="c" x1="150.96" x2="112.03" y1="192.35" y2="137.27" gradientTransform="matrix(.56254 0 0 .56797 -14.991 -11.702)" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#ffd43b" offset="0"/>
                                <stop stop-color="#ffe873" offset="1"/>
                              </linearGradient>
                              <linearGradient id="b" x1="26.649" x2="135.67" y1="20.604" y2="114.4" gradientTransform="matrix(.56254 0 0 .56797 -14.991 -11.702)" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#5a9fd4" offset="0"/>
                                <stop stop-color="#306998" offset="1"/>
                              </linearGradient>
                              <radialGradient id="a" cx="61.519" cy="132.29" r="29.037" gradientTransform="matrix(1.7491e-8 -.23995 1.0547 3.7915e-7 -83.701 142.46)" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#b8b8b8" stop-opacity=".49804" offset="0"/>
                                <stop stop-color="#7f7f7f" stop-opacity="0" offset="1"/>
                              </radialGradient>
                            </defs>
                          <path d="m54.919 9.1927e-4c-4.5837 0.021298-8.9609 0.41222-12.812 1.0938-11.346 2.0045-13.406 6.2001-13.406 13.937v10.219h26.812v3.4062h-36.875c-7.7925 0-14.616 4.6837-16.75 13.594-2.4618 10.213-2.571 16.586 0 27.25 1.9059 7.9379 6.4575 13.594 14.25 13.594h9.2188v-12.25c0-8.8499 7.6571-16.656 16.75-16.656h26.781c7.455 0 13.406-6.1382 13.406-13.625v-25.531c0-7.2663-6.13-12.725-13.406-13.937-4.606-0.76673-9.3851-1.115-13.969-1.0938zm-14.5 8.2188c2.7695 0 5.0312 2.2986 5.0312 5.125-2e-6 2.8163-2.2617 5.0938-5.0312 5.0938-2.7795-1e-6 -5.0312-2.2774-5.0312-5.0938-1e-6 -2.8264 2.2518-5.125 5.0312-5.125z" fill="url(#b)"/>
                          <path d="m85.638 28.657v11.906c0 9.2308-7.8259 17-16.75 17h-26.781c-7.3358 0-13.406 6.2785-13.406 13.625v25.531c0 7.2663 6.3186 11.54 13.406 13.625 8.4873 2.4956 16.626 2.9466 26.781 0 6.7502-1.9544 13.406-5.8876 13.406-13.625v-10.219h-26.781v-3.4062h40.188c7.7925 0 10.696-5.4354 13.406-13.594 2.7993-8.3989 2.6802-16.476 0-27.25-1.9258-7.7574-5.6039-13.594-13.406-13.594zm-15.062 64.656c2.7795 3e-6 5.0312 2.2774 5.0312 5.0937-2e-6 2.8264-2.2518 5.125-5.0312 5.125-2.7696 0-5.0312-2.2986-5.0312-5.125 2e-6 -2.8163 2.2617-5.0937 5.0312-5.0937z" fill="url(#c)"/>
                          <ellipse cx="55.817" cy="127.7" rx="35.931" ry="6.9673" fill="url(#a)" opacity=".44382"/>
                        </svg>
                      </div>
                      <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
                        <p className="text-gray-700">I have 4 years of Experience with Python. Check out my Webscraping project.</p>
                      </div>
                      <div className="flex gap-36 -mb-8 py-4 border-t border-gray-200 ">
                          <a href="#" download="/" className="group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center">
                            <span>Download</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 13l-5 5m0 0l-5-5m5 5V6"></path></svg>
                          </a>
                          <a href="https://github.com/simaaksidd/Webscraping" className="group flex items-center rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 text-gray-950 hover:bg-gray-200/75 active:bg-gray-100 size-8 justify-center">
                            <span className="sr-only">Source Code</span>
                            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"></path></svg>
                          </a>
                      </div>
                    </div>
                </div>
                <div className="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200">
                  <div aria-hidden="true" className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 bg-gradient-to-b duration-200 from-blue-500 to-white blur-2xl opacity-30"></div>
                    <div className="relative justify-center items-center">
                      <div className="border border-blue-500/10 flex justify-center items-center relative *:relative h-14 w-14 rounded-lg before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-blue-100 before:bg-gradient-to-b before:shadow">
                        <svg className="pl-1 pt-1 opacity-100 z-10" viewBox="0 0 120 120" width="45px" height="45px" version="1.0" xmlns="http://www.w3.org/2000/svg" xmlnsCc="http://creativecommons.org/ns#" xmlnsDc="http://purl.org/dc/elements/1.1/" xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlnsXlink="http://www.w3.org/1999/xlink">
                          <metadata>
                            <rdfRDF>
                              <ccWork rdfAbout="">
                                <dcFormat>image/svg+xml</dcFormat>
                                <dcType rdfResource="http://purl.org/dc/dcmitype/StillImage"/>
                              </ccWork>
                            </rdfRDF>
                          </metadata>
                            <defs>
                              <linearGradient id="c" x1="150.96" x2="112.03" y1="192.35" y2="137.27" gradientTransform="matrix(.56254 0 0 .56797 -14.991 -11.702)" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#ffd43b" offset="0"/>
                                <stop stop-color="#ffe873" offset="1"/>
                              </linearGradient>
                              <linearGradient id="b" x1="26.649" x2="135.67" y1="20.604" y2="114.4" gradientTransform="matrix(.56254 0 0 .56797 -14.991 -11.702)" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#5a9fd4" offset="0"/>
                                <stop stop-color="#306998" offset="1"/>
                              </linearGradient>
                              <radialGradient id="a" cx="61.519" cy="132.29" r="29.037" gradientTransform="matrix(1.7491e-8 -.23995 1.0547 3.7915e-7 -83.701 142.46)" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#b8b8b8" stop-opacity=".49804" offset="0"/>
                                <stop stop-color="#7f7f7f" stop-opacity="0" offset="1"/>
                              </radialGradient>
                            </defs>
                          <path d="m54.919 9.1927e-4c-4.5837 0.021298-8.9609 0.41222-12.812 1.0938-11.346 2.0045-13.406 6.2001-13.406 13.937v10.219h26.812v3.4062h-36.875c-7.7925 0-14.616 4.6837-16.75 13.594-2.4618 10.213-2.571 16.586 0 27.25 1.9059 7.9379 6.4575 13.594 14.25 13.594h9.2188v-12.25c0-8.8499 7.6571-16.656 16.75-16.656h26.781c7.455 0 13.406-6.1382 13.406-13.625v-25.531c0-7.2663-6.13-12.725-13.406-13.937-4.606-0.76673-9.3851-1.115-13.969-1.0938zm-14.5 8.2188c2.7695 0 5.0312 2.2986 5.0312 5.125-2e-6 2.8163-2.2617 5.0938-5.0312 5.0938-2.7795-1e-6 -5.0312-2.2774-5.0312-5.0938-1e-6 -2.8264 2.2518-5.125 5.0312-5.125z" fill="url(#b)"/>
                          <path d="m85.638 28.657v11.906c0 9.2308-7.8259 17-16.75 17h-26.781c-7.3358 0-13.406 6.2785-13.406 13.625v25.531c0 7.2663 6.3186 11.54 13.406 13.625 8.4873 2.4956 16.626 2.9466 26.781 0 6.7502-1.9544 13.406-5.8876 13.406-13.625v-10.219h-26.781v-3.4062h40.188c7.7925 0 10.696-5.4354 13.406-13.594 2.7993-8.3989 2.6802-16.476 0-27.25-1.9258-7.7574-5.6039-13.594-13.406-13.594zm-15.062 64.656c2.7795 3e-6 5.0312 2.2774 5.0312 5.0937-2e-6 2.8264-2.2518 5.125-5.0312 5.125-2.7696 0-5.0312-2.2986-5.0312-5.125 2e-6 -2.8163 2.2617-5.0937 5.0312-5.0937z" fill="url(#c)"/>
                          <ellipse cx="55.817" cy="127.7" rx="35.931" ry="6.9673" fill="url(#a)" opacity=".44382"/>
                        </svg>
                      </div>
                      <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
                        <p className="text-gray-700">I have 4 years of Experience with Python. Check out my Webscraping project.</p>
                      </div>
                      <div className="flex gap-36 -mb-8 py-4 border-t border-gray-200 ">
                          <a href="#" download="/" className="group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center">
                            <span>Download</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 13l-5 5m0 0l-5-5m5 5V6"></path></svg>
                          </a>
                          <a href="https://github.com/simaaksidd/Webscraping" className="group flex items-center rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 text-gray-950 hover:bg-gray-200/75 active:bg-gray-100 size-8 justify-center">
                            <span className="sr-only">Source Code</span>
                            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"></path></svg>
                          </a>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
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
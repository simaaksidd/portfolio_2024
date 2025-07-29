"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const PortfolioPage = () => {
  const [selectedCard, setSelectedCard] = React.useState(null);

  const projects = [
    {
      id: 1,
      title: "Python Data Analysis",
      description: "A collection of scripts for web scraping various retail and e-commerce websites using Selenium and Beautiful Soup 4.",
      image: "./project1.png",
      link: "https://github.com/simaaksidd/Webscraping",
      color: "blue-500",
      width: 2070,
      height: 1380,
      icon: "python"
    },
    {
      id: 2,
      title: "Database Design and Implementation",
      description: "Designed and implemented a scalable database system using MongoDB. Created efficient schemas and query optimization for high-performance data retrieval and storage.",
      image: "./project2.png",
      link: "https://github.com/simaaksidd/db_projects",
      color: "green-500",
      width: 2070,
      height: 1380,
      icon: "mongodb"
    },
    {
      id: 3,
      title: "Data Structure and Algorithms",
      description: "This is a collection of Leetcode problems I've solved. I've used Python to solve these problems.",
      image: "./project3.png",
      link: "https://leetcode.com/u/SSiddiqi/",
      color: "orange-500",
      width: 2064,
      height: 1376,
      icon: "leetcode"
    },
    {
      id: 4,
      title: "React Personal Portfolio",
      description: "A responsive portfolio website built with modern web technologies. Features smooth animations, responsive design, and optimized performance across all devices.",
      image: "./project4.png",
      link: "https://github.com/simaaksidd/portfolio_2024",
      color: "gray-500",
      width: 2070,
      height: 1380,
      icon: "nextjs"
    },
    {
      id: 5,
      title: "Machine Learning and Data Science",
      description: "Advanced data processing and analysis using R and Python. Built efficient data pipelines for large-scale data transformation and analysis.",
      image: "./project5.png",
      link: "https://github.com/simaaksidd/Insurance_Claims",
      color: "indigo-500",
      width: 2015,
      height: 1350,
      icon: "pandas"
    },
    {
      id: 6,
      title: "Node.js Backend API",
      description: "A robust RESTful API built with Node.js and Express. Implements secure authentication, data validation, and efficient database operations for a scalable backend solution.",
      image: "./project6.png",
      link: "https://github.com/simaaksidd/Echo_server_clien",
      color: "emerald-500",
      width: 2074,
      height: 1383,
      icon: "nodejs"
    }
  ];

  const handleCardClick = (id) => {
    setSelectedCard(id);
  };

  const handleCardClose = (e) => {
    e.stopPropagation(); // Prevent event from bubbling up
    setSelectedCard(null);
  };

  const CardOverlay = ({ project }) => {
    return (
      <motion.div 
        className="fixed inset-0 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div 
          className="absolute inset-0 bg-black/40 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
        <motion.div 
          className=" rounded-2xl shadow-2xl w-full max-w-4xl mx-4 relative z-10 overflow-hidden"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 60, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          <div className="relative aspect-video">
            <Image 
              src={project.image} 
              alt={project.title}
              width={project.width}
              height={project.height}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <button 
              onClick={handleCardClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
          <div className="p-8">
            <div className="flex items-center gap-6 mb-6">
              <div className={`relative flex justify-center items-center h-16 w-16`}>
                <div aria-hidden="true" className={`absolute inset-0 rounded-full bg-gradient-to-b from-${project.color} to-white opacity-20 blur-xl`}></div>
                <div className={`relative flex justify-center items-center h-14 w-14 rounded-xl bg-white shadow-lg`}>
                  <ProjectIcon icon={project.icon} />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900">{project.title}</h3>
        </div>
        
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
          {project.description}
        </p>
        
            <div className="flex gap-4">
              <motion.a 
                href={project.link} 
                className="px-6 py-3 border border-gray-300 rounded-lg transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Project!
              </motion.a>
            </div>
        </div>
        </motion.div>
      </motion.div>
    );
  };

  const ProjectIcon = ({ icon }) => {
    switch (icon) {
      case 'python':
  return (
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
        );
      case 'mongodb':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="120px" height="120px" viewBox="0 0 35 35" className="pl-1 pt-1 flex relative justify-center items-center opacity-100 z-10">
            <path d="M15.9.087l.854 1.604c.192.296.4.558.645.802.715.715 1.394 1.464 2.004 2.266 1.447 1.9 2.423 4.01 3.12 6.292.418 1.394.645 2.824.662 4.27.07 4.323-1.412 8.035-4.4 11.12-.488.488-1.01.94-1.57 1.342-.296 0-.436-.227-.558-.436-.227-.383-.366-.82-.436-1.255-.105-.523-.174-1.046-.14-1.586v-.244C16.057 24.21 15.796.21 15.9.087z" fill="#599636"/>
            <path d="M15.9.034c-.035-.07-.07-.017-.105.017.017.35-.105.662-.296.96-.21.296-.488.523-.767.767-1.55 1.342-2.77 2.963-3.747 4.776-1.3 2.44-1.97 5.055-2.16 7.808-.087.993.314 4.497.627 5.508.854 2.684 2.388 4.933 4.375 6.885.488.47 1.01.906 1.55 1.325.157 0 .174-.14.21-.244a4.78 4.78 0 0 0 .157-.68l.35-2.614L15.9.034z" fill="#6cac48"/>
            <path d="M16.754 28.845c.035-.4.227-.732.436-1.063-.21-.087-.366-.26-.488-.453-.105-.174-.192-.383-.26-.575-.244-.732-.296-1.5-.366-2.248v-.453c-.087.07-.105.662-.105.75a17.37 17.37 0 0 1-.314 2.353c-.052.314-.087.627-.28.906 0 .035 0 .07.017.122.314.924.4 1.865.453 2.824v.35c0 .418-.017.33.33.47.14.052.296.07.436.174.105 0 .122-.087.122-.157l-.052-.575v-1.604c-.017-.28.035-.558.07-.82z" fill="#c2bfbf"/>
          </svg>
        );
      case 'leetcode':
        return (
          <svg className="pl-2 pt-1 flex relative justify-center items-center opacity-100 z-10" version="1.1" viewBox="0 0 120 120" width="50px" height="50px" xmlns="http://www.w3.org/2000/svg">
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
        );
      case 'nextjs':
        return (
          <svg className="flex relative justify-center items-center opacity-100 z-10" xmlns="http://www.w3.org/2000/svg" width="38px" height="38px" viewBox="0 0 15 15">
            <path fill="currentColor" d="m4.5 4.5l.405-.293A.5.5 0 0 0 4 4.5zm3 9.5A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1zM5 12V4.5H4V12zm-.905-7.207l6.5 9l.81-.586l-6.5-9zM10 4v6h1V4z"/>
          </svg>
        );
      case 'pandas':
        return (
                      <svg className="pl-2 pb-3 flex relative justify-center items-center opacity-100 z-10" xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 250 250">
                          <rect className="fill-current text-pandas-blue" x="74.88" y="68.42" width="24.09" height="50.02"/>
                          <rect className="fill-current text-pandas-blue" x="74.88" y="171.17" width="24.09" height="50.02"/>
                          <rect className="fill-current text-pandas-yellow" x="74.88" y="133.04" width="24.09" height="23.6"/>
                          <rect className="fill-current text-pandas-blue" x="36.19" y="109.55" width="24.09" height="166.27"/>
                          <rect className="fill-current text-pandas-blue" x="112.78" y="212.44" width="24.09" height="50.02"/>
                          <rect className="fill-current text-pandas-blue" x="112.78" y="109.61" width="24.09" height="50.02"/>
                          <rect className="fill-current text-pandas-pink" x="112.78" y="174.23" width="24.09" height="23.6"/>
                          <rect className="fill-current text-pandas-blue" x="150.67" y="55.39" width="24.09" height="166.27"/>
                      </svg>
        );
      case 'nodejs':
        return (
          <svg className="flex relative justify-center items-center opacity-100 z-10" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid" fill="#8cc84b">
            <path d="M14.656.427c.8-.453 1.82-.455 2.6 0L29.2 7.16c.747.42 1.247 1.253 1.24 2.114v13.5c.005.897-.544 1.748-1.332 2.16l-11.88 6.702a2.6 2.6 0 0 1-2.639-.073l-3.565-2.06c-.243-.145-.516-.26-.688-.495.152-.204.422-.23.642-.23.496-.158.95-.4 1.406-.656.115-.08.256-.05.366.022l3.04 1.758c.217.125.437-.04.623-.145l11.665-6.583c.144-.07.224-.222.212-.38V9.334c.016-.18-.087-.344-.25-.417L16.19 2.244a.41.41 0 0 0-.465-.001L3.892 8.93c-.16.073-.27.235-.25.415v13.37c-.014.158.07.307.215.375l3.162 1.785c.594.32 1.323.5 1.977.265a1.5 1.5 0 0 0 .971-1.409l.003-13.29c-.014-.197.172-.36.363-.34h1.52c.2-.005.357.207.33.405L12.18 23.88c.001 1.188-.487 2.48-1.586 3.063-1.354.7-3.028.553-4.366-.12l-3.4-1.88c-.8-.4-1.337-1.264-1.332-2.16v-13.5a2.46 2.46 0 0 1 1.282-2.141L14.656.427zM18.1 9.785c1.727-.1 3.576-.066 5.13.785 1.203.652 1.87 2.02 1.892 3.358-.034.18-.222.28-.394.267-.5-.001-1.002.007-1.504-.003-.213.008-.336-.188-.363-.376-.144-.64-.493-1.273-1.095-1.582-.924-.463-1.996-.44-3.004-.43-.736.04-1.527.103-2.15.535-.48.328-.624 1-.453 1.522.16.383.603.506.964.62 2.082.544 4.287.5 6.33 1.207.845.292 1.672.86 1.962 1.745.378 1.186.213 2.604-.63 3.556-.684.784-1.68 1.2-2.675 1.442-1.323.295-2.695.302-4.038.17-1.263-.144-2.577-.476-3.552-1.336-.834-.724-1.24-1.852-1.2-2.94.01-.184.193-.312.37-.297h1.5c.202-.014.35.16.36.35.093.6.322 1.25.854 1.6 1.026.662 2.313.616 3.487.635.973-.043 2.065-.056 2.86-.7.42-.367.543-.98.43-1.508-.123-.446-.6-.653-1-.8-2.055-.65-4.285-.414-6.32-1.15-.826-.292-1.625-.844-1.942-1.693-.443-1.2-.24-2.687.693-3.607.9-.915 2.22-1.268 3.47-1.394z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section>
      <div className="py-10">
        <div className="mx-auto px-6 max-w-6xl">
          <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <motion.div 
                key={project.id} 
                className={`relative group overflow-hidden rounded-xl bg-white border-2 border-gray-200 min-h-[200px] cursor-pointer transition-all duration-300 hover:border-${project.color} hover:shadow-[0_0_15px_rgba(var(--${project.color}-rgb),0.5)]`}
                onClick={() => handleCardClick(project.id)}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex flex-col items-center gap-4 p-6">
                    <div className={`relative flex justify-center items-center h-20 w-20`}>
                      <div aria-hidden="true" className={`absolute inset-0 rounded-full bg-gradient-to-b from-${project.color} to-white opacity-20 blur-xl`}></div>
                      <div className={`relative flex justify-center items-center h-16 w-16 rounded-xl bg-white shadow-lg`}>
                        <ProjectIcon icon={project.icon} />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 text-center">{project.title}</h3>
                    </div>
                </div>
                {selectedCard === project.id && <CardOverlay project={project} />}
              </motion.div>
            ))}
            </div>
        </div>
    </div>
    </section>
  )
}

export default PortfolioPage;
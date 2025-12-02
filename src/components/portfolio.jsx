"use client"
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState('about');
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const aboutContent = {
    name: "Simaak Siddiqi",
    title: "Full-Stack Developer",
    bio: "I'm a passionate software engineer with expertise in building scalable web applications. My experience spans from developing interactive user interfaces to designing robust database architectures.",
    skills: [
      "React & Next.js",
      "TypeScript & JavaScript",
      "Python & Java",
      "MongoDB & PostgreSQL",
      "AWS & Docker",
      "Data Analysis"
    ],
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  };

  const projects = [
    {
      id: 1,
      tech: [
        "TypeScript",
        "React",
        "HTML/CSS",
        "ExpressJS", 
        "MongoDB",
        "Docker",
        "AWS"
      ],
      title: "Crown Chess",
      description: "This is a full stack chess app inspired by apps like LiChess and Chess.com. You can play with friends, train your skills against AI, or watch the best chess players' matches.",
      category: "Full-Stack",
      image: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      link: "",
    },
    {
      id: 2,
      tech: [
        "MySQL",
        "PostgreSQL",
        "BigQuery",
        "Firestore",
        "MongoDB"
      ],
      title: "Database Management",
      description: "This portfolio includes Database management projects from popular frameworks such as MySQL, PostgreSQL, BigQuery, Firestore, mongoDB, etc.",
      category: "Backend",
      image: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      link: "https://github.com/cs327e-fall2023/Simaak-and-Edward",
    },
    {
      id: 3,
      tech: [
        "Python",
        "Java",
        "C++",
        "Algorithms",
        "Data Structures"
      ],
      title: "DSA",
      description: "These projects cover a wide spectrum of DSA topics, from basic scripting to advanced data structures and algorithms.",
      category: "Backend",
      image: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      link: "https://github.com/simaaksidd/Programming_Assignments",
    },
    {
      id: 4,
      tech: [
        "Python",
        "Pandas",
        "NumPy",
        "Data Visualization",
        "SQL"
      ],
      title: "Data Analysis",
      description: "This semester-long group project focused on the life-cycle of data, including collecting, processing, cleaning, analyzing and interpreting Insurance claims data to determine various characteristics of differing insurace claims.",
      category: "Backend",
      image: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "https://github.com/simaaksidd/Insurance_Claims",
    },
    {
      id: 5,
      tech: [
        "JavaScript",
        "React",
        "NextJS",
        "UI/UX Design",
        "APIs"
      ],
      title: "Personal Portfolio",
      description: "A responsive portfolio website built with modern web technologies. Features smooth animations, responsive design, and optimized performance across all devices.",
      category: "Frontend",
      image: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "https://github.com/simaaksidd/portfolio_2024",
    },
  ];

  const handleScroll = (e) => {
    const container = e.target;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.offsetWidth;
    const index = Math.round(scrollPosition / cardWidth) % projects.length;
    setCurrentIndex(index);
  };

  const scrollToIndex = (index) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col px-12 py-12">
      {/* Filter Buttons */}
      <div className="flex gap-4 mb-8 justify-center align-middle">
        <button 
          onClick={() => { setActiveTab('about'); setCurrentIndex(0); }}
          className={`px-8 py-3 rounded-lg font-mono text-sm transition-colors ${
            activeTab === 'about' 
              ? 'bg-black text-white' 
              : 'bg-white text-black hover:bg-gray-200'
          }`}
        >
          About Me
        </button>
        <button 
          onClick={() => { setActiveTab('projects'); setCurrentIndex(0); }}
          className={`px-8 py-3 rounded-lg font-mono text-sm transition-colors ${
            activeTab === 'projects' 
              ? 'bg-black text-white' 
              : 'bg-white text-black hover:bg-gray-200'
          }`}
        >
          Projects
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 relative">
        {activeTab === 'about' ? (
          // About Me Page
          <div className="h-full rounded-lg overflow-hidden relative">
            <Image
              src={aboutContent.image}
              alt="About Me"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 p-12 flex flex-col justify-center items-center text-center">
              <div className="max-w-3xl">
                <h1 className="text-5xl font-light mb-4 text-white">
                  {aboutContent.name}
                </h1>
                <p className="text-2xl text-gray-300 mb-8 font-mono">
                  {aboutContent.title}
                </p>
                <p className="text-lg text-white mb-8 leading-relaxed">
                  {aboutContent.bio}
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  {aboutContent.skills.map(skill => (
                    <span 
                      key={skill}
                      className="px-4 py-2 bg-white bg-opacity-20 text-white text-sm font-mono rounded backdrop-blur-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Projects Gallery
          <>
            <div 
              ref={scrollContainerRef}
              className="flex gap-8 overflow-x-auto snap-x snap-mandatory h-full scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onScroll={handleScroll}
            >
              {/* Create infinite loop by repeating projects 3 times */}
              {[...projects, ...projects, ...projects].map((project, idx) => (
                <div 
                  key={`${project.id}-${idx}`}
                  className="flex-shrink-0 w-full snap-center group"
                >
                  <div className="rounded-lg overflow-hidden h-full relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                    
                    <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>
                    
                    <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-3xl font-light mb-1 text-white">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-300 mb-4 font-mono">
                        {project.category}
                      </p>
                      
                      <p className="text-base text-white mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map(tech => (
                          <span 
                            key={tech}
                            className="px-3 py-1 bg-white bg-opacity-20 text-white text-sm font-mono rounded backdrop-blur-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <Link href={project.link}>
                        <button className="px-6 py-2 bg-white text-black rounded-lg text-sm font-mono hover:bg-gray-200 transition-colors w-fit">
                          View Project
                        </button>
                      </Link>
                    </div>

                    {/* Clickable Pagination Dots inside card */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                      {projects.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => scrollToIndex(index + projects.length)}
                          className={`w-2 h-2 rounded-full bg-white transition-all cursor-pointer hover:opacity-100 ${
                            index === currentIndex ? 'opacity-100' : 'opacity-50'
                          }`}
                          aria-label={`Go to project ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
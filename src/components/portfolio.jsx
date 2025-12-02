"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function PortfolioPage() {
  const [filter, setFilter] = useState('full-stack');
  const [currentIndex, setCurrentIndex] = useState(0);

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
      category: "full-stack",
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
      category: "backend",
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
      category: "backend",
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
      category: "backend",
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
      category: "frontend",
      image: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "https://github.com/simaaksidd/portfolio_2024",
    },
  ];

  const filteredProjects = projects.filter(p => p.category === filter);

  const handleScroll = (e) => {
    const container = e.target;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.offsetWidth;
    const index = Math.round(scrollPosition / cardWidth);
    setCurrentIndex(index);
  };

  return (
    <div className="h-screen w-screen min flex flex-col px-12 py-12">
      {/* Header */}
      {/* <div className="mb-8">
        <h1 className="text-6xl font-light mb-6 text-black">My Work</h1>
        <p className="text-lg text-black font-mono">
          Selected Projects
        </p>
      </div> */}

      {/* Filter Buttons */}
      <div className="flex gap-4 mb-8 justify-center align-middle">
        <button 
          onClick={() => { setFilter('full-stack'); setCurrentIndex(0); }}
          className={`px-8 py-3 rounded-lg font-mono text-sm transition-colors ${
            filter === 'full-stack' 
              ? 'bg-black text-white' 
              : 'bg-white text-black hover:bg-gray-200'
          }`}
        >
          Full-Stack
        </button>
        <button 
          onClick={() => { setFilter('frontend'); setCurrentIndex(0); }}
          className={`px-8 py-3 rounded-lg font-mono text-sm transition-colors ${
            filter === 'frontend' 
              ? 'bg-black text-white' 
              : 'bg-white text-black hover:bg-gray-200'
          }`}
        >
          Frontend
        </button>
        <button 
          onClick={() => { setFilter('backend'); setCurrentIndex(0); }}
          className={`px-8 py-3 rounded-lg font-mono text-sm transition-colors ${
            filter === 'backend' 
              ? 'bg-black text-white' 
              : 'bg-white text-black hover:bg-gray-200'
          }`}
        >
          Backend
        </button>
      </div>

      {/* Horizontal Scroll Gallery */}
      <div className="flex-1 relative">
        <div 
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory h-full pb-16 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onScroll={handleScroll}
        >
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="flex-shrink-0 w-full snap-center group"
            >
              <div className="rounded-lg overflow-hidden h-full relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={currentIndex === filteredProjects.findIndex(p => p.id === project.id)}
                />
                
                <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-3xl font-light mb-4 text-white">
                    {project.title}
                  </h3>
                  
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
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {filteredProjects.map((_, index) => (
            <div
              key={index}
              className={`rounded-full bg-black transition-all ${
                index === currentIndex ? 'w-3 h-3' : 'w-2 h-2 opacity-40'
              }`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
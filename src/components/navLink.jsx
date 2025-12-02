"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"


const NavLink = ({ link, children }) => {
    const pathName = usePathname();

    const scrollToSection = (e, sectionId) => {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    };

    return (
        <Link 
            className={`rounded p-1 ${pathName === link.url && "bg-black text-white"}`} 
            href={link.url}
            onClick={(e) => scrollToSection(e, link.id)}
            >
                {children || link.title}
        </Link>
    );
};

export default NavLink;
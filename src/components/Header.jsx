import NavLinks from './NavLinks';
import { useEffect, useState } from 'react';


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  
      useEffect(() => {
          function handleScroll() {
            if (window.scrollY > 50) {
              setIsScrolled(true);
            } else {
              setIsScrolled(false);
            }
          }
      
          window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener("scroll", handleScroll);
        }, []);
  
  return (
    <header className= {isScrolled ? 'scrolled' : undefined}>
      <NavLinks page="Home"/>
      <NavLinks page="Catalog"/>
      <a href="#Home"><li id="logo">OWL</li></a>
      <NavLinks page="Features"/>
      <NavLinks page="Contact"/>
    </header>
  );
}
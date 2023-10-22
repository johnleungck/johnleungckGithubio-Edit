import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Hero from './Components/Hero';
import Timeline from './Components/Timeline';
import Works from './Components/Works';
import Contact from './Components/Contact';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Navbar = styled.nav`
  position: fixed;
  left: 5%;
  top: 50%;
  transform: translateY(-50%);
  
  width: ${({ $isNavHidden }) => ($isNavHidden ? '0.5rem' : '20rem')};
  display: flex;
  flex-direction: column;
  z-index: 1;

  background-image: linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0));
`;

const NavSwitch = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 0.5rem;
  height: 100%;
  background: white;
  cursor: pointer;
`;

const NavItem = styled.a`
  display: flex;
  align-items: center;
  height: 3rem;
  margin: 10px 20px;
  white-space: nowrap;

  opacity: ${({ $isNavHidden }) => ($isNavHidden ? '0' : '1')};
  pointer-events: ${({ $isNavHidden }) => ($isNavHidden ? 'none' : 'auto')};
  
  text-decoration: none;
  text-transform: ${({ $isActive }) => ($isActive ? 'uppercase' : 'none')};
  font-size: ${({ $isActive }) => ($isActive ? '2rem' : '1rem')};
  font-weight: ${({ $isActive }) => ($isActive ? 'bold' : 'normal')};
  transition: 0.5s;
  cursor: pointer;
  color: #ffffff;
  &:visited {
    color: #ffffff;
  }
  &:hover {
    font-size: ${({ $isActive }) => ($isActive ? '1.5rem' : '1.5rem')};
    font-weight: bold;
    text-transform: uppercase;
    transition: 0.1s;
  }
`;

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isNavHidden, setIsNavHidden] = useState(false);
  const containerRef = useRef();

  const toggleNavHidden = () => {
    setIsNavHidden(!isNavHidden);
  }

  useEffect(() => {
    const container = containerRef.current;
    
    const handleScroll = () => {
      const scrollPosition = container.scrollTop;
      if (scrollPosition <= 0.5 * window.innerHeight) {
        setActiveSection('hero');
      } else if (scrollPosition <= 1.5 * window.innerHeight) {
        setActiveSection('timeline');
      } else if (scrollPosition <= 2.5 * window.innerHeight) {
        setActiveSection('works');
      } else {
        setActiveSection('contact');
      }
    };

    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar $isNavHidden={isNavHidden}>
        <NavSwitch onClick={toggleNavHidden}/>
        <NavItem
          href="#hero"
          $isNavHidden={isNavHidden}
          $isActive={activeSection === 'hero'}
        >
          About Me
        </NavItem>
        <NavItem
          href="#timeline"
          $isNavHidden={isNavHidden}
          $isActive={activeSection === 'timeline'}
        >
          Time Machine
        </NavItem>
        <NavItem
          href="#works"
          $isNavHidden={isNavHidden}
          $isActive={activeSection === 'works'}
        >
          Projects & Skills
        </NavItem>
        <NavItem
          href="#contact"
          $isNavHidden={isNavHidden}
          $isActive={activeSection === 'contact'}
        >
          Get in Touch
        </NavItem>
      </Navbar>
      

      <Container ref={containerRef}>
        <Hero id="hero"/>
        <Timeline id="timeline"/>
        <Works id="works"/>
        <Contact id="contact"/>
      </Container>
    </div>
  )
}

export default App

import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

import BUSiFINDImage from '../assets/ProjectImage/BUSiFIND.jpg'
import SousImage from '../assets/ProjectImage/Sous.png'
import portfolioWebsiteImage from '../assets/ProjectImage/portfolioWebsite.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import githubLogo from '../assets/SiteLogo/github.png'
import appStoreLogo from '../assets/SiteLogo/appStore.png'

import { Canvas } from '@react-three/fiber';
import { Box, Plane, Scroll, ScrollControls } from '@react-three/drei';
import { Physics, useBox, usePlane } from '@react-three/cannon';
import { TextureLoader } from 'three';
import cLogo from '../assets/SkillsLogo/c.jpg'
import cantoneseLogo from '../assets/SkillsLogo/cantonese.png'
import controlSystemLogo from '../assets/SkillsLogo/controlSystem.png'
import englishLogo from '../assets/SkillsLogo/english.png'
import javaLogo from '../assets/SkillsLogo/java.png'
import javascriptLogo from '../assets/SkillsLogo/javascript.png'
import mandarinLogo from '../assets/SkillsLogo/mandarin.png'
import matlabLogo from '../assets/SkillsLogo/matlab.png'
import pythonLogo from '../assets/SkillsLogo/python.jpeg'
import reactJSLogo from '../assets/SkillsLogo/reactJS.png'
import spanishLogo from '../assets/SkillsLogo/spanish.png'
import swiftLogo from '../assets/SkillsLogo/swift.png'
import wirelessCommLogo from '../assets/SkillsLogo/wirelessComm.jpg'

const Section = styled.div`
  height: 100vh;
  width: 100vw;

  background-color: #000000;
  overflow: auto;
  scroll-snap-align: center;
  scroll-snap-stop: always;

  scrollbar-width: none;
  &::-webkit-scrollbar {
      display: none;
  }
`

const SwiperContainer = styled.div`
  height: 40vh;
  width: 100vw;
  padding-top: 5vh;
`

const Card = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #515151;
  color: #ffffff;
  opacity: 0.9;
  position: relative;
  border-radius: 20px;
  background-image: url(${props => props.img});
  
  width: 90%;
  height: 95%;
`

const DisplayOver = styled.div`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  border-radius: 20px;
  z-index: 2;
  transition: background-color 350ms ease;
  background-color: transparent;
  padding: 20px 20px 0 20px;
  box-sizing: border-box;

  ${Card}:hover & {
    background-color: rgba(0,0,0,.8);
  }
`

const BigTitle = styled.h1`
  font-family: Helvetica;
`

const Hover = styled.div`
  opacity: 0;
  transition: opacity 350ms ease;

  ${Card}:hover & {
    opacity: 1;
  }
`

const SubTitle = styled.h4`
  font-family: Helvetica;
  transform: translate3d(0, 50px, 0);
  transition: transform 350ms ease;

  ${Card}:hover & {
    transform: translate3d(0, 0, 0);
  }
`

const Paragraph = styled.p`
  transform: translate3d(0, 50px, 0);
  transition: transform 350ms ease;

  ${Card}:hover & {
    transform: translate3d(0, 0, 0);
  }
`

const CTA = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`

const Skillset = styled.p`
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-style: italic;
  font-weight: 900;
`

function Ground({ color, ...props }) {
  const [ref] = usePlane(() => ({ ...props }), useRef(null))

  return (
    <Plane args={[1000, 1000]} ref={ref}>
      <meshStandardMaterial color={color} />
    </Plane>
  )
}

function Wall({ position, size }) {
  const [ref] = useBox(() => ({ position, args: size, type: 'Static' }));

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={size} />
      <meshStandardMaterial transparent={true} opacity={0} />
    </mesh>
  );
}

function Crate(props) {
  const [ref, api] = useBox(
    () => ({ args: [2, 2, 2], mass: 1, ...props }),
    useRef(null)
  )
  
  const textureLoader = new TextureLoader()
  const texture = textureLoader.load(props.skillImg)

  return (
    <Box
      args={[2, 2, 2]}
      onClick={() => {
        api.applyImpulse([0, 8, 0.1], [0, -1, 0])
      }}
      ref={ref}
    >
      <meshPhongMaterial map={texture}/>
    </Box>
  )
}

export default function Works() {
  return (
    <>
      <Section id="works">
        <Canvas camera={{ fov: 50, position: [0, 5, 10] }}>
          <fog attach="fog" args={['#1e1433', 10, 25]} />
          <ScrollControls pages={0}>
            <Scene/>
            <ProjectSwiper/>
          </ScrollControls>
        </Canvas>
      </Section>
    </>
  );
}

function Scene() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1000);
  const updateMedia = () => {
    setDesktop(window.innerWidth > 1000);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <>
      {/*<OrbitControls />*/}
      <Physics gravity={[0, -20, 0]}>
          <Ground
            color="#000000"
            position={[0, -5, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />          
          <Wall position={[0, 0, -5]} size={[100, 500, 0.1]}/>
          <Wall position={[0, 0, 3]} size={[100, 500, 0.1]}/>
          <Wall position={isDesktop ? [-10, 0, 0] : [-5, 0, 0]} size={[0.1, 500, 100]}/>
          <Wall position={isDesktop ? [10, 0, 0] : [5, 0, 0]} size={[0.1, 500, 100]}/>

          <Crate position={[2, 0, 0]} skillImg={cLogo}/>
          <Crate position={[0, 5, 0]} skillImg={cantoneseLogo}/>
          <Crate position={[-2, 10, 0]} skillImg={controlSystemLogo}/>

          <Crate position={[2, 5, 0]} skillImg={englishLogo}/>
          <Crate position={[0, 10, 0]} skillImg={javaLogo}/>
          <Crate position={[-2, 15, 0]} skillImg={javascriptLogo}/>

          <Crate position={[2, 10, 0]} skillImg={mandarinLogo}/>
          <Crate position={[0, 15, 0]} skillImg={matlabLogo}/>
          <Crate position={[-2, 20, 0]} skillImg={pythonLogo}/>

          <Crate position={[2, 15, 0]} skillImg={reactJSLogo}/>
          <Crate position={[0, 20, 0]} skillImg={spanishLogo}/>
          <Crate position={[-2, 25, 0]} skillImg={swiftLogo}/>

          <Crate position={[2, 20, 0]} skillImg={wirelessCommLogo}/>
      </Physics>

      <ambientLight intensity={3} />
    </>
  )
}

const ProjectSwiper = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1000);
  const updateMedia = () => {
    setDesktop(window.innerWidth > 1000);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <Scroll html>
      <SwiperContainer>
        <Swiper
          // # of Cards >= slidesPerView * 2 ==> sin duc
          slidesPerView={isDesktop ? 2 : 1.5}
          spaceBetween={30}
          autoplay={{
              delay: 10000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
          }}
          pagination={{clickable: true,}}
          centeredSlides={true}
          loop={true}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}

          style={{width: '100%', height: '100%', '--swiper-navigation-color': '#fff', '--swiper-pagination-bullet-inactive-color': '#67697f', "--swiper-pagination-bullet-inactive-opacity": "1",}}
        >
          <SwiperSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
            <Card img={BUSiFINDImage}>
              <DisplayOver>
                  <BigTitle>BUSiFIND</BigTitle>
                  <Hover>
                  <SubTitle>Trip Planning & Route Searching App</SubTitle>
                  <SubTitle>Undergraduate Senor Design Project 2023</SubTitle>
                  <br/>
                  <Paragraph>Key Feature:</Paragraph>
                  <Paragraph>1. Route & Stops Search</Paragraph>
                  <Paragraph>2. AR Directions</Paragraph>
                  <Paragraph>3. Estimated Time of Arrival</Paragraph>
                  <br/>
                  <Paragraph><i>Notes: Only available in Hong Kong. This project is for school, so please don't expect I will update the app.</i></Paragraph>
                  <CTA>
                    <a href="https://github.com/johnleungck/BUSiFIND" target="_blank" rel="noopener noreferrer"><img src={githubLogo} alt='Github' style={{height:'24px'}}/></a>
                    &nbsp;
                    <a href='https://apps.apple.com/hk/app/busifind/id6447512736' target="_blank" rel="noopener noreferrer"><img src={appStoreLogo} alt='App Store' style={{height:'24px'}}/></a>
                  </CTA>
                  </Hover>
                  <Skillset>#Swift #AR #iOS #Maps #API</Skillset>
              </DisplayOver>
            </Card>
          </SwiperSlide>
          
          <SwiperSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Card img={SousImage}>
              <DisplayOver>
                  <BigTitle>Sous</BigTitle>
                  <Hover>
                  <SubTitle>Expsense Tracker</SubTitle>
                  <SubTitle>Side Project 2023</SubTitle>
                  <br/>
                  <Paragraph>Daily personal expense tracker</Paragraph>
                  <Paragraph>Graphical expenses analysis</Paragraph>
                  <Paragraph>Printable spending report</Paragraph>
                  <br/>
                  <Paragraph><i>Development in Progress</i></Paragraph>
                  <CTA>
                    <a href="https://github.com/johnleungck/Sous" target="_blank" rel="noopener noreferrer"><img src={githubLogo} alt='Github' style={{height:'24px'}}/></a>
                  </CTA>
                  </Hover>
                  <Skillset>#Swift #CoreData #iOS #UI/UX</Skillset>
              </DisplayOver>
            </Card>
          </SwiperSlide>

          <SwiperSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Card img={portfolioWebsiteImage}>
              <DisplayOver>
                  <BigTitle>johnleungck.github.io</BigTitle>
                  <Hover>
                  <SubTitle>Portfolio Website</SubTitle>
                  <SubTitle>Side Project 2023</SubTitle>
                  <br/>
                  <Paragraph>A personal portfolio website. Different framework and libraries used, such as reactJS, threeJS, gsap, cannonJS</Paragraph>
                  <br/>
                  <Paragraph>Done this coz i had not much to do in my final year in the university and hoped to kill my time in a proper way. lol</Paragraph>
                  <CTA>
                    <a href="https://johnleungck.github.io" target="_blank" rel="noopener noreferrer"><img src={githubLogo} alt='Github' style={{height:'24px'}}/></a>
                  </CTA>
                  </Hover>
                  <Skillset>#React #HTML #Website #ThreeJS</Skillset>
              </DisplayOver>
            </Card>
          </SwiperSlide>

          <SwiperSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Card img={pythonLogo}>
              <DisplayOver>
                  <BigTitle>CrowdSense</BigTitle>
                  <Hover>
                  <SubTitle>Flow of People Estimating Device</SubTitle>
                  <SubTitle>Undergraduate Project 2023</SubTitle>
                  <br/>
                  <Paragraph>Estimating the number of people in a certain area by measuring the signal activities.</Paragraph>
                  <Paragraph>Machine learning is applied to the project to analyse the packet tranmsission frequency and capacity.</Paragraph>
                  <br/>
                  <Paragraph>Inspired by Waitz, UCSD. The idea is the same, but i'm not sure is Waitz estimate the busyness in similiar way.</Paragraph>
                  <CTA>
                    
                  </CTA>
                  </Hover>
                  <Skillset>#Wireless Communication #Machine Learning #Tshark #Python</Skillset>
              </DisplayOver>
            </Card>
          </SwiperSlide>
        </Swiper>
      </SwiperContainer>
    </Scroll>
  )
}
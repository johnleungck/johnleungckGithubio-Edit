import { OrbitControls, PointMaterial, Points, Scroll, ScrollControls, } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import * as random from "maath/random/dist/maath-random.esm"
import styled from 'styled-components'
import RotateGlobe from './RotateGlobe'
import Satellite from './Satellite'
import githubLogo from '../assets/SiteLogo/github.png'
import linkedinLogo from '../assets/SiteLogo/linkedin.png'
import appStoreLogo from '../assets/SiteLogo/appStore.png'
import discordLogo from '../assets/SiteLogo/discord.png'
import instagramLogo from '../assets/SiteLogo/instagram.png'
import steamLogo from '../assets/SiteLogo/steam.png'

const Section = styled.div`
  height: 100vh;
  background-color: #000000;
  scroll-snap-align: center;
  scroll-snap-stop: always;

  scrollbar-width: none;
  &::-webkit-scrollbar {
      display: none;
  }
`

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Socials = styled.div`
  padding-top: 20px;
  align-content: space-between;
`

const SocialLink = styled.a`
  padding: 10px;
`

const Test = () => {
  return (
    <Section id="contact">
      <Canvas
        frameloop='demand'
        camera={{ fov: 10, position: [0, 0, 15] }}
      >
        <Stars position={[0, 0, 1]}/>
        <RotateGlobe position={[0, 0, 1]}/>
        <ContactCanvas />
        <Satellite position={[0, 0, 1]}/>
      </Canvas>
    </Section>
  )
}
export default Test

function Stars(props) {
  const ref = useRef()
  const [sphere] = useState(() => random.inSphere(new Float32Array(5001), { radius: 5 }))
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#c6bc77" size={0.05} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}

const ContactCanvas = () => {
  return (
    <>
      <ScrollControls pages={0}>
        {/*<RotateGlobe/>*/}
        <ContactOverlay/>
      </ScrollControls>
    </>
  )
}

const ContactOverlay = () => {
  return (
    <Scroll html>
      <Container>
        <Socials>
          <SocialLink href="https://github.com/johnleungck" target="_blank" rel="noopener noreferrer"><img src={githubLogo} alt='Github' style={{height:'24px'}}/></SocialLink>
          <SocialLink href="https://www.linkedin.com/in/chung-kai-leung-809931195/" target="_blank" rel="noopener noreferrer"><img src={linkedinLogo} alt='LinkedIn' style={{height:'24px'}}/></SocialLink>
          <SocialLink href="https://apps.apple.com/hk/developer/chung-kai-leung/iid1681558148" target="_blank" rel="noopener noreferrer"><img src={appStoreLogo} alt='App Store' style={{height:'24px'}}/></SocialLink>
          <SocialLink href="https://discordapp.com/users/294784704627081226" target="_blank" rel="noopener noreferrer"><img src={discordLogo} alt='Discord' style={{height:'24px'}}/></SocialLink>
          <SocialLink href="https://www.instagram.com/leung_chung_kai/" target="_blank" rel="noopener noreferrer"><img src={instagramLogo} alt='Instagram' style={{height:'24px'}}/></SocialLink>
          <SocialLink href="https://steamcommunity.com/id/johnleungdie" target="_blank" rel="noopener noreferrer"><img src={steamLogo} alt='Steam' style={{height:'24px'}}/></SocialLink>
        </Socials>
        <div style={{color:"white", paddingTop:"10px"}}>
          Email: chungkai615@gmail.com
        </div>
      </Container>
    </Scroll>
  )
}
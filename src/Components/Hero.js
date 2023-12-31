import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Scroll, ScrollControls, useScroll} from '@react-three/drei'
import OceanGlobe from './OceanGlobe'
import Rocket from './Rocket'

import ReactTyped from 'react-typed'

const Section = styled.div`
    height: 100vh;
    width: 100vw;

    background-color: black;
    overflow: auto;
    scroll-snap-align: center;
    scroll-snap-stop: always;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`

const Hero = () => {
  return (
    <Section id="hero">
        <Canvas
            frameloop='demand'
            camera={{ fov: 10, position: [0, 0, 9] }}
            style={{touchAction: "auto !important"}}
        >
            <HeroCanvas/>
        </Canvas>
    </Section>
  )
}
export default Hero

const HeroCanvas = () => {
    return (
        <>
            <ScrollControls pages={2} damping={0.3} style={{paddingRight:"17px"}}>
                <OceanGlobe/>
                <Rocket/>
                <Overlay/>
            </ScrollControls>
        </>
    )
}

const Title = styled.h3.attrs(props => ({
    style: {
        opacity: props.opacity,
    }
}))`
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    font-size: 8vw;
    font-weight: 600;
    color: #e4e3e3;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
    flex-direction: column;
`

const BioContainer = styled.div`
    margin: 0;
    padding: 0; 
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: space-between;
`

const BioNullLeft = styled.div`
    position: relative;
    flex: 1;

    @media only screen and (max-width: 1000px) {
        flex: 0;
    }
`

const Bio = styled.div.attrs(props => ({
    style: {
        opacity: props.opacity,
    }
}))`
    padding-left: 20vw;
    padding-right: 10vw;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    flex: 1;

    @media only screen and (max-width: 1000px) {
        padding-left: 10vw;
        padding-right: 10vw;
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        flex: 1;
    }
`

const BioTextBox = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;

    font-size: 18px;
    text-align: justify;
    color: #ffffff;
    background: #292929ab;
    border-radius: 5px;

    @media only screen and (max-width: 1000px) { 
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 20px;
        padding-right: 20px;

        font-size: 18px;
        text-align: justify;
        color: #ffffff;
        background: #292929ab;
        border-radius: 5px;
    }
`

const Overlay = () => {
    const ref = useRef(null)
    const scroll = useScroll()
    const [opacityTitle, setOpacityTitle] = useState(1);
    const [opacityBio, setOpacityBio] = useState(1);

    useFrame(() => {
        setOpacityTitle(1 - scroll.range(0, 1.5))
        setOpacityBio(scroll.curve(1/2, 1.5))
    })

    return (
        <Scroll html>
            <Title opacity={opacityTitle}>
                <p>Hello World <br/>
                    I'm&nbsp;
                    <ReactTyped
                        strings={["John Leung.", "yet an Engr.", "a Gamer."]}
                        typeSpeed={100}
                        loop
                        backSpeed={50}
                        cursorChar="|"
                    />
                </p>
            </Title>
            <BioContainer>
                <BioNullLeft/>
                <Bio opacity={opacityBio}>
                    <BioTextBox>
                        <p>Hey, I'm Leung Chung Kai, John - Hong Kong 🇭🇰</p>
                        <br/>
                        <p>Always Exploring the Planet! ✈️ 🌍</p>
                        <br/>
                        <p>Coding 🖥️, WiFi 📡, Control 🕹️, Nerdy Stuff 👾 ...</p>
                        <br/>
                        <p>That's What I Can Do (Probably)</p>
                        <br/>
                        <strong>Scroll Down & See More ⬇</strong>
                    </BioTextBox>
                </Bio>
            </BioContainer>
        </Scroll>
    )
}
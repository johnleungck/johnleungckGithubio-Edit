import React, { useRef, useEffect } from 'react'
import styled from 'styled-components';
import lwLogo from '../assets/OrganisationLogo/LW.png'
import cgaLogo from '../assets/OrganisationLogo/CGA.png'
import hkuLogo from '../assets/OrganisationLogo/HKU.jpg'
import uolLogo from '../assets/OrganisationLogo/UOL.jpg'
import cmiLogo from '../assets/OrganisationLogo/CMI.jpg'

function useHorizontalScroll() {
  const elRef = useRef()
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = e => {
        if (e.deltaY === 0) return;
        if (!(el.scrollLeft===0 && e.deltaY<0) && !(el.scrollWidth-el.clientWidth-Math.round(el.scrollLeft)===0 && e.deltaY>0)) {
          e.preventDefault()
        }
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
        })
      }
      el.addEventListener("wheel", onWheel)
      return () => el.removeEventListener("wheel", onWheel)
    }
  }, [])
  return elRef
}

const Section = styled.div`
  height: 100vh;
  width: 100vw;

  white-space: nowrap;
  background-color: #000;
  background-image: linear-gradient(black, #1e1433 95%);
  overflow: auto;
  scroll-snap-align: center;
  scroll-snap-stop: always;

  display: flex;
  align-items: center;
  
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

const TlSpacer = styled.div`
  height: 100vh;
  flex: 0 0 25vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 800px) {
    height: 100vh;
    flex: 0 0 0vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
  }
`

const TlMajor = styled.div`
  height: 100vh;
  flex: 0 0 50vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  @media only screen and (max-width: 800px) {
    height: 100vh;
    flex: 0 0 100vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
  }
`

const TlMajorBox = styled.div`
  height: 50%;
  width: 65%;
  color: #ffffff;
  
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 800px) {
    height: 70%;
    width: 65%;
    color: #ffffff;
    
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const TlMajorText = styled.div`
  background:#292929ab;

  display: flex;
  flex-direction: column;
  white-space: pre-wrap;
  line-height: 1.5;

  min-width: 100%;
  padding: 20px;
  border-radius: 20px;

  @media only screen and (max-width: 800px) {
    background:#292929ab;

    display: flex;
    flex-direction: column;
    white-space: pre-wrap;
    line-height: 1.5;
    font-size: 0.8em;

    min-width: 100%;
    padding: 20px;
    border-radius: 20px;
  }
`

const TlDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-top: 60px;
  margin-bottom: 30px;

  @media only screen and (max-width: 800px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-top: 30px;
    margin-bottom: 10px;
  }
`

const TlLogo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid #ffffff;

  @media only screen and (max-width: 800px) {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 2px solid #ffffff;
  }
`

const TlLine = styled.div`
  flex: 1;
  height: 5px;
  background-color: #7c7c7c;

  @media only screen and (max-width: 800px) {
    flex: 1;
    height: 3px;
    background-color: #7c7c7c;
  }
`

const TlTimePeriod = styled.p`
  width: 100%;
  display: flex;
  justify-content: center;
  
  font-size: 15px;
`

const Timeline = () => {
  const scrollRef = useHorizontalScroll()

  return (
    <Section ref={scrollRef} id="timeline">
      <TlSpacer/>
      {/* LWMSS */}
      <TlMajor>
        <TlMajorBox>
          <TlMajorText>
            <b style={{ fontSize: "1.2em" }}>The Hong Kong Diploma of Secondary Education</b>
            <i style={{ fontSize: "1.2em" }}>SKH Lam Woo Memorial Secondary School</i>
            <br/>
            <p>Acheivement:</p>
            <li>Hong Kong No. 4, Asia Top 400 - PUBG</li>
            <li>Campus League 2019 Round 4 - League of Legends</li>
            <br/>
            <p>Grade:</p>
            <li>5* in Mathematics</li>
            <li>5* in Information and Communication Technology</li>
            <li>5 in Mathematics Extend Module 2</li>
            <li>5 in Liberal Studies</li>
          </TlMajorText>
        </TlMajorBox>
        <TlDiv>
          <TlLine style={{opacity:"0"}}/>
          <TlLogo src={lwLogo}/>
          <TlLine/>
        </TlDiv>
        <TlTimePeriod>2013 - 2019</TlTimePeriod>
      </TlMajor>

      {/* CGA */}
      <TlMajor>
        <TlMajorBox>
          <TlMajorText>
            <b style={{ fontSize: "1.2em" }}>Event Assistant</b>
            <i style={{ fontSize: "1.2em" }}>Cyber Games Arena</i>
            <br/>
            <p>Responsibilities:</p>
            <li>Assisting with event coordination</li>
            <li>Handling event and staging equipments</li>
            <li>Establishing connection with clients and customers</li>
            <br/>
            <p>Skills:</p>
            <li>IT-Related Technical Proficiency</li>
            <li>On-site Marketing & Promotion</li>
            <li>Teamwork</li>
            <li>Adaptability</li>
          </TlMajorText>
        </TlMajorBox>
        <TlDiv>
          <TlLine/>
          <TlLogo src={cgaLogo}/>
          <TlLine/>
        </TlDiv>
        <TlTimePeriod>2019 - 2021</TlTimePeriod>
      </TlMajor>

      <TlMajor>
        <TlMajorBox>
          <TlMajorText>
            <b style={{ fontSize: "1.2em" }}>BEng in Electronic Engineering</b>
            <b style={{ fontSize: "1.2em" }}>Minor in Finance</b>
            <i style={{ fontSize: "1.2em" }}>The University of Hong Kong</i>
            <br/>
            <p>Activities:</p>
            <li>HKU Racing - Powertrain Electronics (2020-2021)</li>
            <br/>
            <p>Awards & Scholarships:</p>
            <li>HKUWW Exchange Scholarships</li>
            <li>HKSAR Reaching Out Award</li>
            <br/>
            <p>Grade:</p>
            <li>3.24 over 4.3 - CGPA</li>
          </TlMajorText>
        </TlMajorBox>
        <TlDiv>
          <TlLine/>
          <TlLogo src={hkuLogo}/>
          <TlLine/>
        </TlDiv>
        <TlTimePeriod>2019 - 2024</TlTimePeriod>
      </TlMajor>
      
      <TlMajor>
        <TlMajorBox>
          <TlMajorText>
            <b style={{ fontSize: "1.2em" }}>Student Exchange Programme</b>
            <i style={{ fontSize: "1.2em" }}>University of Leicester</i>
            <br/>
            <p>Modules:</p>
            <li>Corporate Finance</li>
            <li>Investment Management</li>
            <li>Statistic</li>
            <br/>
            <p>Activities:</p>
            <li>Travel around Europe</li>
            <li>Proud member of LCFC</li>
          </TlMajorText>
        </TlMajorBox>
        <TlDiv>
          <TlLine/>
          <TlLogo src={uolLogo}/>
          <TlLine/>
        </TlDiv>
        <TlTimePeriod>Spring 2022</TlTimePeriod>
      </TlMajor>

      <TlMajor>
        <TlMajorBox>
          <TlMajorText>
            <b style={{ fontSize: "1.2em" }}>Summer Internship</b>
            <i style={{ fontSize: "1.2em" }}>China Mobile International Limited</i>
            <br/>
            <p>Responsibilities:</p>
            <li>Enterprise Business - Industry Development Solutions</li>
            <li>Designing dedicated IoT and Networking solutions</li>
            <li>IoT and Cloud deployment for various scenario</li>
            <br/>
            <p>Skills:</p>
            <li>Technologically Savvy</li>
            <li>Communication</li>
            <li>Problem Solving</li>
            <li>Research & Data Analysis</li>
          </TlMajorText>
        </TlMajorBox>
        <TlDiv>
          <TlLine/>
          <TlLogo src={cmiLogo}/>
          <TlLine/>
        </TlDiv>
        <TlTimePeriod>Summer 2022</TlTimePeriod>
      </TlMajor>

      {/*<div style={{color: 'white'}}>Add minor event for expected graduation</div>*/}
      <TlSpacer/>
    </Section>
  )
}

export default Timeline
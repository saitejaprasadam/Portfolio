import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle, SubtitleNoMargin, SubSubtitleNoMargin } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'
import Experience from '../views/Experience'

import profileImage from '../images/Saiteja Prasadam.jpg'
import propertyApps from '../images/Property Apps.png'
import contenterra from '../images/Contenterra.png'
//import { Fragment } from 'react'
import { style_css } from '../styles/global.css'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AvatarSmall = styled.img`
  ${tw`rounded-full w-16 xl:w-32 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white font-serif pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
  width: 100%
`

const Desc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const DescSmall = styled.p`
  ${tw`text-white text-md md:text-lg lg:text-xl font-sans text-justify`};
`

const DescSmallWithMargin = styled.p`
  ${tw`text-white text-md md:text-lg lg:text-xl font-sans text-justify`};
  margin-bottom: 80px;
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-md lg:text-2md`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md sm:text-sm`};
`

const buttonStyles = {
  fontSize: "12px",
  textAlign: "center",
  color: "#000000",
  padding: "12px 30px",
  backgroundColor: "rgb(255, 255, 255)",
  borderRadius: "4px",
  borderWidth: "1px",
  cursor: "pointer",
}

const marginRight = {
  marginRight: "15px"
}

const moreButton = {
  textAlign: "center",
  width: "100%"
}

const yellowColor = {
  color: "#FFA500"
}

const Index = () => (
  <>
    <Layout />
    <Parallax pages={6}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Saiteja Prasadam.
        </BigTitle>
        <Subtitle>DevOps Engineer · Montreal</Subtitle>
        
        <a style={marginRight} target="_blank" href="https://linkedin.com/in/saitejaprasadam/">
          <button style={buttonStyles}>LinkedIn</button>
        </a>

        <a style={marginRight} target="_blank" href="https://github.com/saitejaprasadam/">
          <button style={buttonStyles}>Github</button>
        </a>

        <a style={marginRight} target="_blank" href="mailto:saitejaprasadam@gmail.com">
          <button style={buttonStyles}>Email</button>
        </a>

        <a style={marginRight} target="_blank" href="/Saiteja Prasadam.pdf">
          <button style={buttonStyles}>Resume</button>
        </a>
      </Hero>
      
      <Experience offset={1}>
        <Title>Experience</Title>
        <AboutHero>
          <AvatarSmall src={propertyApps} alt="Property Apps" />
          <AboutSub>
              <a style={yellowColor} target="_blank" href="https://linkedin.com/company/property-apps/">Property Apps</a>
              <br/>
              <SubtitleNoMargin>Full Stack Developer · PHP (Laravel), Angular 4 & Ionic 3</SubtitleNoMargin>
              <SubSubtitleNoMargin>1 Year and 9 Months ( Jan 2017 – October 2018)</SubSubtitleNoMargin>
          </AboutSub>
        </AboutHero>
        <DescSmallWithMargin>
          <ul>
            <li>Worked on there on going project – Property Apps (The Property Apps app is a feature-full solution for building communication and management), Assisted in designing, developing and maintain various modules, which is being current used in many real estate companies to manage their buildings.</li>
            <li>Technologies used Laravel (MVC), Angular 4, Ionic 3, JSON Rest API, Firebase Cloud Push Notifications, Word Press.</li>
            <li>Integrated with Payment Gateway and Tenant Screening Providers (Naborly and Certn).</li>
            <li>Ported Code Ignitor to Laravel Framework, Ionic 2 to Ionic 3.</li>
            <li>Used Scrum Life Cycle.</li>
          </ul>
        </DescSmallWithMargin>   

        <AboutHero>
          <AvatarSmall src={contenterra} alt="ContenTerra" />
          <AboutSub>
              <a style={yellowColor} target="_blank" href="https://linkedin.com/company/contenterra-software/">ContenTerra</a>
              <br/>
              <SubtitleNoMargin>.Net developer Intern · C# Windows Services, Redis</SubtitleNoMargin>
              <SubSubtitleNoMargin>3 Months ( Jan 2016 to April 2016)</SubSubtitleNoMargin>
          </AboutSub>
        </AboutHero>
        <DescSmallWithMargin>
          <ul>
            <li>Worked on there on going project – FedBizIntel (It offers the complete government sales platform providing 360˚ support with opportunity portal, government-focused website re-branding, social media jump start, capture support, and proposal writing services.)</li>
            <li>Worked in designing, developing website for the sales portal and worked on the backend .net framework services to perform operations on the government focus website to analyze all the information on the contracts.</li>
            <li>Technologies used .Net platform C#, MVC, Redis, Windows Service.</li>
            <li>Used Scrum Life Cycle.</li>
          </ul>
        </DescSmallWithMargin>      
      </Experience>

      <Projects offset={2.98}>
        <Title>Projects</Title>
        
        <ProjectsWrapper>
          <ProjectCard
            title="Hippo"
            link="projects/hippo"
            bg="linear-gradient(to right, #6913CC 0%, #2772FA 100%)">
            Android Application for streaming torrent (Purely for Educational Purpose).
          </ProjectCard>

          <ProjectCard
            title="KMR Player"
            link="projects/kmr-player"
            bg="linear-gradient(to right, #ED1E79 0%, #662D8C 100%)">
            Materialized Android Music Player with LAN Networking Support with your squad.
          </ProjectCard>          
          
          <ProjectCard
            title="Automatic Number Plate Recognition System"
            link="projects/automatic-number-plate-recognition-system"
            bg="linear-gradient(to right, #01A1FA 0%, #29F399 100%)">
            Recreation of a Tomb Raider Wallpaper (Fan Art)
          </ProjectCard>
          
          <ProjectCard
            title="Share Doc"
            link="projects/share-doc"
            bg="linear-gradient(to right, #FF3C5E 0%, #FFAD97 100%)">
            A fantasy image manipulation relocating the habitat of wild animals.
          </ProjectCard>
        </ProjectsWrapper>              

        <Subtitle style={moreButton}><a target="_blank" href="projects/">See more of my works</a></Subtitle>

      </Projects>
      
      <About offset={4}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={profileImage} alt="Saiteja Prasadam" />
          <AboutSub>
            The English language can not fully capture the depth and complexity of my thoughts.<br/>

            <a style={marginRight} target="_blank" href="https://linkedin.com/in/saitejaprasadam/">
              <button style={buttonStyles}>LinkedIn</button>
            </a>

            <a style={marginRight} target="_blank" href="https://github.com/saitejaprasadam/">
              <button style={buttonStyles}>Github</button>
            </a>

            <a style={marginRight} target="_blank" href="mailto:saitejaprasadam@gmail.com">
              <button style={buttonStyles}>Email</button>
            </a>

            <a style={marginRight} target="_blank" href="/Saiteja Prasadam.pdf">
              <button style={buttonStyles}>Resume</button>
            </a>
          </AboutSub>

        </AboutHero>
        <DescSmall>
          <b>Educational Qualifications</b>
          <ul>
            <li>Master’s in Applied Computer Science - Concordia University (Montreal, Canada)</li>
            <li>Bachelor’s in Information Technology - CVR College of Engineering (Hyderabad, India)</li>
          </ul>

          <b>Languages Known: </b>English, Hindi & Telugu.<br/>
          <b>Hobbies: </b>Programming, Gaming, Photography, Traveling, Cooking, learning new things related to technology, listening to music, Watching tech YouTube videos.          
        </DescSmall>
      </About>
      
      <Contact offset={5}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a target="_blank" href="mailto:saitejaprasadam@gmail.com">Hi</a> or find me on other platforms:{' '}
            <a target="_blank" href="https://linkedin.com/in/saitejaprasadam/">LinkedIn</a> &{' '}
            <a target="_blank" href="https://github.com/saitejaprasadam">Github</a>
          </ContactText>
        </Inner>
        <Footer>
          Template inspired from {' '} <a target="_blank" href="https://lekoarts.de">LekoArts</a>
        </Footer>
      </Contact>
    
    </Parallax>
  </>
)

export default Index

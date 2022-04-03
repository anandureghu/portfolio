import React from 'react'
import {motion} from 'framer-motion';

import './Landing.scss'
import images from '../../constants/images';

import {BsGithub, BsLinkedin, BsTwitter, BsInstagram, BsDashLg, BsArrowRight, BsChevronDoubleDown} from 'react-icons/bs';
import {SiJavascript, SiSpringboot, SiSpring, SiPostgresql, SiMysql} from 'react-icons/si'
import {FaReact, FaJava} from 'react-icons/fa'
import {GrGolang} from 'react-icons/gr'
import {DiGit} from 'react-icons/di'

function Landing() {
  return (
    <div className="landing">
      <div className="container">
        <motion.div 
        initial={{
          opacity:0,
          y:100,
        }}
        animate={{
          opacity:1,
          y:0,
          transition:{duration:1},
        }}
        className="landing_text">
          <p className="name">Anandu Reghu  
            <motion.span animate={{x:[null, 20]}}
            transition={{
              yoyo: Infinity
            }}>
              <a href="#">
                <BsArrowRight/>
              </a>
            </motion.span></p>
          <p className="description">Developer Designer Freelancer</p>
          <p className="social_medias">
            <a href="https://github.com/anandureghu" className="social_media" target="_blank">
              <BsGithub/>
            </a>
            <a href="https://linkedin.com/in/anandureghu" className="social_media" target="_blank">
              <BsLinkedin/>
            </a>
            <a href="https://twitter.com/anandu__reghu" className="social_media" target="_blank">
              <BsTwitter/>
            </a>
            <a href="https://instagram.com/k_r_1_4" className="social_media" target="_blank">
              <BsInstagram/>
            </a>
          </p>
          <motion.a
          animate={{y:[null,20]}}
          transition={{
            yoyo:Infinity
          }}
          href="/"
          className="go-down">
            <BsChevronDoubleDown/>
          </motion.a>
        </motion.div>
        <div className="landing_display">
          <div className="coding-img">
            <motion.img src={images.coding2} alt="" className="coding" 
            initial={{
              x:100,
              opacity:0
            }}
            animate={{
              x:0,
              opacity:1,
              transition:{duration:1}
            }}/>

        
          <motion.img 
          initial={{y:-50, opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{duration:1, delay:0.1}}
          drag={true}
          // dragConstraints={{left:100, right: 100, top:100, bottom:100}}
          src={images.react} alt="" className="display-icon react" />

          <motion.img 
          initial={{y:-50, opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{duration:1, delay:0.2}}
          drag={true}
          // dragConstraints={{left:100, right: 100, top:100, bottom:100}}
          src={images.java} alt="" className="display-icon java" />

          <motion.img 
          initial={{y:-50, opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{duration:1, delay:0.1}}
          drag={true}
          // dragConstraints={{left:100, right: 100, top:100, bottom:100}}
          src={images.js} alt="" className="display-icon js" />

          <motion.img 
          initial={{y:-50, opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{duration:1, delay:0.3}}
          drag={true}
          // dragConstraints={{left:100, right: 100, top:100, bottom:100}}
          src={images.go} alt="" className="display-icon go" />
          
          <motion.img 
          initial={{y:-50, opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{duration:1, delay:0.2}}
          drag={true}
          // dragConstraints={{left:100, right: 100, top:100, bottom:100}}
          src={images.springboot} alt="" className="display-icon spring-boot" />
          
          <motion.img 
          initial={{y:-50, opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{duration:1, delay:0.1}}
          drag={true}
          // dragConstraints={{left:100, right: 100, top:100, bottom:100}}
          src={images.postgre} alt="" className="display-icon postgre" />
          
          <motion.img 
          initial={{y:-50, opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{duration:1, delay:0.1}}
          drag={true}
          // dragConstraints={{left:100, right: 100, top:100, bottom:100}}
          src={images.git} alt="" className="display-icon git" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
import React, { useState, useEffect } from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

import "./Container.css";
import { motion } from "framer-motion";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import ProfileCard from "./ProfileCard.js";
import {
  CAS,
  Jcas,
  Conveners,
  InfraAdvisors,
  InfraHeads,
  InfraCoHeads,
  FinanceAdvisors,
  FinanceHeads,
  WebAdvisors,
  WebHeads,
  WebCoHeads,
  PublicityAdvisors,
  PublicityHeads,
  PublicityCoHeads,
  SponsorshipAdvisors,
  SponsorshipHeads,
  SponsorshipCoHeads,
  PRAdvisors,
  PRHeads,
  PRCoHeads,
  HospitalityAdvisors,
  HospitalityHeads,
  HospitalityCoHeads,
  DisciplineAdvisors,
  DisciplineHeads,
  DisciplineCoHeads,
  AdminAdvisors,
  AdminHeads,
  AdminCoHeads,
  DesignAdvisors,
  DesignHeads,
  DesignCoHeads,
  ThinkTankAdvisors,
  ThinkTankHeads,
  ThinkTankCoHeads,
  MediaCellAdvisors,
  MediaCellHeads,
  MediaCellCoHeads,
  CinematographyAdvisors,
  CinematographyHeads,
  CinematographyCoHeads,
} from "./TeamMember";
import { coordinator } from "./coordinatornames";
import { co_coordinator } from "./co_coordinatornames";
import { LeftArrow, RightArrow } from "./utilities";
import Row from "./row";
import RowC from "./rowcoordinator";
// import Navbar from "./navbar"

// const cardArray = [
//   {
//     id: 0,
//     name: "xyz1",
//     position: "xyz",
//     img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//     classSpecial: " profile__card cardSpecial"
//   },
//   {
//     id: 1,
//     name: "xyz2",
//     position: "xyz",
//     img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//     classSpecial: " profile__card cardSpecial"
//   },
//   {
//     id: 2,
//     name: "xyz3",
//     position: "xyz",
//     img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//     classSpecial: " profile__card cardSpecial"
//   },
//   {
//     id: 3,
//     name: "xyz4",
//     position: "xyz",
//     img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//     classSpecial: "profile__card cardSpecial"
//   }

// ]

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Container = () => {
  const [mainIndex, setmainIndex] = useState(0);
  const [convenersIndex, setconvenersIndex] = useState(4);
  // const [infraAdvisorIndex, setinfraAdvisorIndex] = useState(13);
  // const [infraHeadIndex, setinfraHeadIndex] = useState(18);
  // const [infraCoheadIndex, setinfraCoheadIndex] = useState(23);
  // const [webAdvisorIndex, setwebAdvisorIndex] = useState(35);
  // const [webHeadIndex, setwebHeadIndex] = useState(40);
  // const [webCoHeadIndex, setwebCoHeadIndex] = useState(45);

  return (
    <div id="main-teams">
      <>
        <div className="parent__container">
          <div className="cas__container">
            <ProfileCard
              name="Ayushman Rajpurohit"
              position="Cultural Affairs Secretary(CAS)"
              imgSrc="images/Ayushman CAS.jpg"
              classSpecial="profile__card cardSpecial"
            />
          </div>
          <h1 id="joints" className="heading">
            Core
          </h1>

          {/* <div className="jcas">

            <KeyboardArrowLeftIcon className="LeftArrow" sx={{
              fontSize: "100px",
              marginTop: "110px",
              color: "white"
            }} onClick={() => {
              if (mainIndex == 0) {
                return
              }
              setmainIndex(mainIndex - 1)
            }} />
            {Jcas.filter(ca => {
              if (ca.id == mainIndex || ca.id == mainIndex + 1 || ca.id == mainIndex + 2) {
                return ca
              }
            }).map(ca => (
              <motion.div
                key={ca.id}
                variants={{
                  hidden: { opacity: 0, },
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      type: "spring",
                      stiffness: 20,
                    },
                  },
                }}
                initial="hidden"
                exit={{
                  // height: "0%",
                  opacity: 0,
                  transition: {
                    duration: 0.4,
                  },
                }}
                whileInView="visible"
              >
                <ProfileCard
                  name={ca.name}
                  position={ca.position}
                  imgSrc={ca.img}
                  classSpecial={ca.classSpecial}
                />
              </motion.div>
            ))}

            <KeyboardArrowRightIcon className="RightArrow" sx={{
              fontSize: "100px",
              marginTop: "110px",
              color: "white"
            }} onClick={() => {
              if (mainIndex == 1) {
                return
              }
              setmainIndex(mainIndex + 1)
            }} />
          </div> */}

          <Row array={Jcas} i={0} e={4} />

          {/* <div className="Conveners">
            <KeyboardArrowLeftIcon className="LeftArrow" sx={{
              fontSize: "100px",
              marginTop: "110px",
              color: "white"
            }} onClick={() => {
              if (convenersIndex == 4) {
                return
              }
              setconvenersIndex(convenersIndex - 1)
            }} />
            {Conveners.filter(ca => {
              if (ca.id == convenersIndex || ca.id == convenersIndex + 1 || ca.id == convenersIndex + 2) {
                return ca
              }
            }).map(ca => (
              <motion.div
                key={ca.id}
                variants={{
                  hidden: { opacity: 0, },
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      type: "spring",
                      stiffness: 20,
                    },
                  },
                }}
                initial="hidden"
                exit={{
                  // height: "0%",
                  opacity: 0,
                  transition: {
                    duration: 0.4,
                  },
                }}
                whileInView="visible"
              >
                <ProfileCard
                  name={ca.name}
                  position={ca.position}
                  imgSrc={ca.img}
                  classSpecial={ca.classSpecial}
                />
              </motion.div>
            ))}

            <KeyboardArrowRightIcon className="RightArrow" sx={{
              fontSize: "100px",
              marginTop: "110px",
              color: "white"
            }} onClick={() => {
              if (convenersIndex == 10) {
                return
              }
              setconvenersIndex(convenersIndex + 1)
            }} />
          </div> */}

          <Row array={Conveners} i={0} e={6} />

          <h1 id="Finance" className="heading">
            FINANCE
          </h1>

          <Row array={FinanceAdvisors} i={0} e={1} />

          <Row array={FinanceHeads} i={0} e={1} />

          <h1 id="WebDev" className="heading">
            WEB DEVELOPMENT
          </h1>

          {/* <div className="WebdevAdvisor">
            <KeyboardArrowLeftIcon className="LeftArrow" sx={{
              fontSize: "100px",
              marginTop: "110px",
              color: "white"
            }} onClick={() => {
              if (webAdvisorIndex == 35) {
                return
              }
              setwebAdvisorIndex(webAdvisorIndex - 1)
            }} />
            {WebAdvisors.filter(ca => {
              if (ca.id == webAdvisorIndex || ca.id == webAdvisorIndex + 1 || ca.id == webAdvisorIndex + 2 ) {
                
                return ca
              }
            }).map(ca => (
              <motion.div
                key={ca.id}
                variants={{
                  hidden: { opacity: 0, },
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      type: "spring",
                      stiffness: 20,
                    },
                  },
                }}
                initial="hidden"
                exit={{
                  // height: "0%",
                  opacity: 0,
                  transition: {
                    duration: 0.4,
                  },
                }}
                whileInView="visible"
              >
                <ProfileCard
                  name={ca.name}
                  position={ca.position}
                  imgSrc={ca.img}
                  classSpecial={ca.classSpecial}
                />
              </motion.div>
            ))}

            <KeyboardArrowRightIcon className="RightArrow" sx={{
              fontSize: "100px",
              marginTop: "110px",
              color: "white"
            }} onClick={() => {
              if (webAdvisorIndex == 37) {
                return
              }
              setwebAdvisorIndex(webAdvisorIndex + 1)
            }} />
          </div> */}

          {/* <div className="WebdevHead">
            <KeyboardArrowLeftIcon className="LeftArrow" sx={{
              fontSize: "100px",
              marginTop: "110px",
              color: "white"
            }} onClick={() => {
              if (webHeadIndex == 40) {
                return
              }
              setwebHeadIndex(webHeadIndex - 1)
            }} />
            {WebHeads.filter(ca => {
              if (ca.id == webHeadIndex || ca.id == webHeadIndex + 1 || ca.id == webHeadIndex + 2) {

                return ca
              }
            }).map(ca => (
              <motion.div
                key={ca.id}
                variants={{
                  hidden: { opacity: 0, },
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      type: "spring",
                      stiffness: 20,
                    },
                  },
                }}
                initial="hidden"
                exit={{
                  // height: "0%",
                  opacity: 0,
                  transition: {
                    duration: 0.4,
                  },
                }}
                whileInView="visible"
              >
                <ProfileCard
                  name={ca.name}
                  position={ca.position}
                  imgSrc={ca.img}
                  classSpecial={ca.classSpecial}
                />
              </motion.div>
            ))}

            <KeyboardArrowRightIcon className="RightArrow" sx={{
              fontSize: "100px",
              marginTop: "110px",
              color: "white"
            }} onClick={() => {
              if (webHeadIndex == 42) {
                return
              }
              setwebHeadIndex(webHeadIndex + 1)
            }} />
          </div>

          <div className="WebdevCoHead">
            <KeyboardArrowLeftIcon className="LeftArrow" sx={{
              fontSize: "100px",
              marginTop: "110px",
              color: "white"
            }} onClick={() => {
              if (webCoHeadIndex == 45) {
                return
              }
              setwebCoHeadIndex(webCoHeadIndex - 1)
            }} />
            {WebCoHeads.filter(ca => {
              if (ca.id == webCoHeadIndex || ca.id == webCoHeadIndex + 1 || ca.id == webCoHeadIndex + 2) {

                return ca
              }
            }).map(ca => (
              <motion.div
                key={ca.id}
                variants={{
                  hidden: { opacity: 0, },
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      type: "spring",
                      stiffness: 20,
                    },
                  },
                }}
                initial="hidden"
                exit={{
                  // height: "0%",
                  opacity: 0,
                  transition: {
                    duration: 0.4,
                  },
                }}
                whileInView="visible"
              >
                <ProfileCard
                  name={ca.name}
                  position={ca.position}
                  imgSrc={ca.img}
                  classSpecial={ca.classSpecial}
                />
              </motion.div>
            ))}

            <KeyboardArrowRightIcon className="RightArrow" sx={{
              fontSize: "100px",
              marginTop: "110px",
              color: "white"
            }} onClick={() => {
              if (webCoHeadIndex == 53) {
                return
              }
              setwebCoHeadIndex(webCoHeadIndex + 1)
            }} />
          </div> */}

          {/* value of i is the initial value of team member array and value of e is the (last-2) value  */}
          <Row array={WebAdvisors} i={0} e={5} />

          <Row array={WebHeads} i={0} e={5} />

          <Row array={WebCoHeads} i={0} e={8} />

          <h1 id="Publicity" className="heading">
            PUBLICITY
          </h1>

          <Row array={PublicityAdvisors} i={0} e={1} />

          <Row array={PublicityHeads} i={0} e={3} />

          <Row array={PublicityCoHeads} i={0} e={8} />

          <h1 id="Infra" className="heading">
            INFRA AND IN HOUSE MANAGERIAL
          </h1>

          

          <Row array={InfraAdvisors} i={0} e={2} />

          <Row array={InfraHeads} i={0} e={2} />

          <Row array={InfraCoHeads} i={0} e={9} />

          

          <h1 id="Sponsorship" className="heading">
            SPONSORSHIP
          </h1>

          <Row array={SponsorshipAdvisors} i={0} e={1} />

          <Row array={SponsorshipHeads} i={0} e={2} />

          <Row array={SponsorshipCoHeads} i={0} e={1} />

          <h1 id="PR" className="heading">
            PUBLIC RELATION
          </h1>

          <Row array={PRAdvisors} i={0} e={1} />

          <Row array={PRHeads} i={0} e={3} />

          <Row array={PRCoHeads} i={0} e={2} />

          <h1 id="Hospitality" className="heading">
            HOSPITALITY
          </h1>

          <Row array={HospitalityAdvisors} i={0} e={1} />

          <Row array={HospitalityHeads} i={0} e={2} />

          <Row array={HospitalityCoHeads} i={0} e={6} />

          <h1 id="Discipline" className="heading">
            DISCIPLINE
          </h1>

          <Row array={DisciplineAdvisors} i={0} e={2} />

          <Row array={DisciplineHeads} i={0} e={2} />

          <Row array={DisciplineCoHeads} i={0} e={7} />

          <h1 id="Admin" className="heading">
            ADMIN AND DOCUMENTATION
          </h1>

          <Row array={AdminAdvisors} i={0} e={1} />

          <Row array={AdminHeads} i={0} e={2} />

          <Row array={AdminCoHeads} i={0} e={2} />

          <h1 id="Design" className="heading">
            DESIGN
          </h1>

          <Row array={DesignAdvisors} i={0} e={2} />

          <Row array={DesignHeads} i={0} e={1} />

          <Row array={DesignCoHeads} i={0} e={1} />

          <h1 id="ThinkTank" className="heading">
            THINK TANK
          </h1>

          <Row array={ThinkTankAdvisors} i={0} e={1} />

          <Row array={ThinkTankHeads} i={0} e={4} />

          <Row array={ThinkTankCoHeads} i={0} e={4} />

          <h1 id="MediaCell" className="heading">
            MEDIA CELL
          </h1>

          <Row array={MediaCellAdvisors} i={0} e={1} />

          <Row array={MediaCellHeads} i={0} e={2} />

          <Row array={MediaCellCoHeads} i={0} e={2} />

          <h1 id="Cinematography" className="heading">
            CINEMATOGRAPHY
          </h1>

          <Row array={CinematographyAdvisors} i={0} e={1} />

          <Row array={CinematographyHeads} i={0} e={2} />

          <Row array={CinematographyCoHeads} i={0} e={1} />
          <h1 id="Coordinators" className="heading">
            COORDINATORS
          </h1>

          <RowC array={coordinator} i={0} e={12} />

          <h1 id="Co_Coordinators" className="heading">
            CO-COORDINATORS
          </h1>

          <RowC array={co_coordinator} i={0} e={14} />
        </div>
      </>
    </div>
  );
};

export default Container;

import React, { useState, useEffect } from "react";

import "./Container.css";
import { motion } from "framer-motion";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import useMediaQuery from "@mui/material/useMediaQuery";

import ProfileCard from "./ProfileCard.js";
// import { CAS, Jcas, Conveners, InfraAdvisors, InfraHeads, InfraCoHeads, WebAdvisors, WebHeads , WebCoHeads } from "./TeamMember";

function Row(props) {
  const [index, setindex] = useState(props.i);
  const [active, setactive] = useState(true);
  const matches = useMediaQuery("(max-width: 720px)");
  const matches2 = useMediaQuery("(max-width: 1000px)");

  return (
    <div className="row">
      {matches ? (
        <>
          <KeyboardArrowLeftIcon
            className="LeftArrow"
            sx={{
              fontSize: "40px",
              zIndex: 1,
              marginTop: "110px",
              color: "white",
              cursor: "pointer",
            }}
            onClick={() => {
              if (index == props.i) {
                return;
              }
              setindex(index - 1);
              setactive(false);
            }}
          />

          {props.array
            .filter((ca) => {
              if (ca.id == index) {
                return ca;
              }
            })
            .map((ca) => (
              <motion.div
                key={ca.id}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 2,
                }}
              >
                <ProfileCard
                  name={ca.name}
                  position={ca.position}
                  imgSrc={ca.img}
                  classSpecial={ca.classSpecial}
                />
              </motion.div>
            ))}

          <KeyboardArrowRightIcon
            className="RightArrow "
            sx={{
              fontSize: "40px",
              marginTop: "110px",
              color: "white",
              cursor: "pointer",
              zIndex: 1,
            }}
            onClick={() => {
              if (index == props.array.length - 1) {
                return;
              }
              setindex(index + 1);
              setactive(false);
            }}
          />
        </>
      ) : matches2 ? (
        <>
          <KeyboardArrowLeftIcon
            className="LeftArrow"
            sx={{
              fontSize: "40px",
              zIndex: 1,
              marginTop: "110px",
              color: "white",
              cursor: "pointer",
            }}
            onClick={() => {
              if (index == props.i) {
                return;
              }
              setindex(index - 1);
              setactive(false);
            }}
          />

          {props.array
            .filter((ca) => {
              if (ca.id == index || ca.id == index + 1) {
                return ca;
              }
            })
            .map((ca) => (
              <motion.div
                key={ca.id}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 2,
                }}
              >
                <ProfileCard
                  name={ca.name}
                  position={ca.position}
                  imgSrc={ca.img}
                  classSpecial={ca.classSpecial}
                />
              </motion.div>
            ))}

          <KeyboardArrowRightIcon
            className="RightArrow "
            sx={{
              fontSize: "40px",
              marginTop: "110px",
              color: "white",
              cursor: "pointer",
              zIndex: 1,
            }}
            onClick={() => {
              if (index == props.array.length - 2) {
                return;
              }
              setindex(index + 1);
              setactive(false);
            }}
          />
        </>
      ) : (
        <>
          {props.array.length > 4 && (
            <KeyboardArrowLeftIcon
              className="LeftArrow"
              sx={{
                fontSize: "100px",
                marginTop: "110px",
                color: "white",
                cursor: "pointer",
                zIndex: 1,
              }}
              onClick={() => {
                if (index == props.i) {
                  return;
                }
                setindex(index - 1);
              }}
            />
          )}
          {props.array
            .filter((ca) => {
              if (
                ca.id == index ||
                ca.id == index + 1 ||
                ca.id == index + 2 ||
                ca.id == index + 3
              ) {
                return ca;
              }
            })
            .map((ca) => (
              <motion.div
                key={ca.id}
                variants={{
                  hidden: { opacity: 0 },
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

          {props.array.length > 4 && (
            <KeyboardArrowRightIcon
              className="RightArrow "
              sx={{
                fontSize: "100px",
                marginTop: "110px",
                color: "white",
                cursor: "pointer",
                zIndex: 1,
              }}
              onClick={() => {
                if (index == props.array.length - 4) {
                  return;
                }
                setindex(index + 1);
              }}
            />
          )}
        </>
      )}
    </div>
  );
}

export default Row;

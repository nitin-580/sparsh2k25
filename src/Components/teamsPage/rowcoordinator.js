import React, { useState, useEffect } from "react";

import "./Container.css";
import { motion } from "framer-motion";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import useMediaQuery from "@mui/material/useMediaQuery";

import CoordinatorCard from "./coordinatorcard";
// import { CAS, Jcas, Conveners, InfraAdvisors, InfraHeads, InfraCoHeads, WebAdvisors, WebHeads , WebCoHeads } from "./TeamMember";

function RowC(props) {
  const [index, setindex] = useState(props.i);
  const matches = useMediaQuery("(max-width: 720px)");

  return (
    <div className="row">
      {matches ? (
        <>
          <KeyboardArrowLeftIcon
            className="LeftArrow margintop"
            sx={{
              fontSize: "40px",
              // marginTop: "110px",
              color: "white",
              zIndex: 10,
            }}
            onClick={() => {
              if (index == props.i) {
                return;
              }
              setindex(index - 1);
            }}
          />
        </>
      ) : (
        <KeyboardArrowLeftIcon
          className="LeftArrow margintop"
          sx={{
            fontSize: "100px",
            // marginTop: "110px",
            color: "white",
            zIndex: 10,
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
          if (ca.id == index) {
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
            <CoordinatorCard name={ca.name} text={ca.text} />
          </motion.div>
        ))}

      {matches ? (
        <>
          <KeyboardArrowRightIcon
            className="RightArrow margintop"
            sx={{
              fontSize: "40px",
              // marginTop: "110px",
              color: "white",
              zIndex: 10,
            }}
            onClick={() => {
              if (index == props.e - 1) {
                return;
              }
              setindex(index + 1);
            }}
          />
        </>
      ) : (
        <>
          <KeyboardArrowRightIcon
            className="RightArrow margintop"
            sx={{
              fontSize: "100px",
              // marginTop: "110px",
              color: "white",
              zIndex: 10,
            }}
            onClick={() => {
              if (index == props.e - 1) {
                return;
              }
              setindex(index + 1);
            }}
          />
        </>
      )}
    </div>
  );
}

export default RowC;

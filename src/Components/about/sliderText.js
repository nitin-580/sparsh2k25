import React from "react";
import SliderAnimationText from "./sliderAnimationText";

import { Button } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

export default function SliderText(sliderArray) {
  const [open, setOpen] = React.useState(false);
  const text =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ";

  console.log(sliderArray, "sliderArray");
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              x: 120,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: 120,
            }}
            transition={{
              duration: 0.5,
            }}
            style={{
              height: "350px",
              width: "350px",
              position: "absolute",
              zIndex: 100,
              left: "38%",
              boxShadow: "0px 10px 20px black",
            }}
          >
            <div
              style={{
                height: "auto",
                width: "350px",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "white",
                position: "relative",
                // borderRadius: "10px",
              }}
            >
              <Typography
                sx={{
                  position: "absolute",
                  color: "white",
                  insetInlineEnd: 10,
                  insetBlockStart: 10,
                  cursor: "pointer",
                  // scale: 1,
                  ":hover": {
                    // fontSize: "1.8rem"
                    transform: "scale(1.2)",
                  },
                }}
                onClick={() => setOpen(false)}
              >
                <CloseIcon />
              </Typography>
              <span
                style={{
                  height: "180px",
                  width: "100%",
                  objectFit: "contain",
                  // backgroundColor: "black"
                }}
              >
                <img
                  height="100%"
                  width="100%"
                  borderRadius="20px"
                  src="https://images.unsplash.com/photo-1515825838458-f2a94b20105a?auto=format&fit=crop&w=300"
                  srcSet="https://images.unsplash.com/photo-1515825838458-f2a94b20105a?auto=format&fit=crop&w=300&dpr=2 2x"
                  loading="lazy"
                  alt="Yosemite by Casey Horner"
                />
              </span>
              <span
                style={{
                  padding: "20px 20px 0px 20px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {sliderArray.sliderArray
                  ?.filter((sA) => {
                    if (sA.id == sliderArray.mainIndex) {
                      return sA;
                    }
                  })
                  .map((sA) => (
                    <>
                      <span
                        style={{
                          fontSize: "1.6rem",
                          fontWeight: 500,
                        }}
                      >
                        {sA.heading}
                      </span>
                      <motion.span
                      
                        style={{
                          paddingTop: "10px",
                          textAlign: "justify",
                          // paddingBottom: "40px"
                        }}
                      >
                        {text}
                      </motion.span>
                    </>
                  ))}
              </span>
              <Button
                variant="contained"
                onClick={() => setOpen(false)}
                sx={{
                  margin: "20px 20px 30px 20px",
                  height: "35px",
                  width: "80px",
                  background: "#FF5F01",
                  float: "right",
                  ":hover": {
                    background: "white",
                    color: "#FF5F01",
                  },
                }}
              >
                close
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// {/* <div
//         style={{
//           // width: "100px",
//           //   backgroundColor: "blue",
//           color: "black",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           padding: "20px",
//         }}
//       >
//         {sliderArray.sliderArray
//           ?.filter((sA) => {
//             if (sA.id == sliderArray.mainIndex) {
//               return sA;
//             }
//           })
//           .map((sA) => (
//             <div
//               key={sA.id}
//               style={{
//                 // backgroundColor: "black",
//                 display: "flex",
//                 flexDirection: "column",
//               }}
//             >
//               {/* <span>as</span> */}

//               <motion.span
//                 style={{
//                   fontSize: "2rem",
//                   fontWeight: "bold",
//                   color: "white",
//                 }}
//               >
//                 {sA.heading}
//               </motion.span>
//               {/* <SliderAnimationText text={text} /> */}
//               <Button
//                 variant="text"
//                 sx={{
//                   width: "150px",
//                   height: "40px",
//                   marginTop: "20px",
//                   opacity: 1,
//                   transition: "opacity 0.3s, background 0.3s",
//                   animationTimingFunction: "ease-in",
//                   background: "#FF5F01", // #FF5F01 , #FFE3F1, #CE0000, #FE1C80
//                   ":hover": {
//                     // fontSize: "1.8rem"
//                     opacity: 1,
//                     background: "white",
//                     color: "#FF5F01",
//                   },
//                   color: "white",
//                 }}
//                 onClick={() => setOpen(true)}
//               >
//                 Read More
//               </Button>
//             </div>
//           ))}

//         {/* <span style={{}}>Hellow</span> */}
//       </div> */}










// display:
//                           sA.id < mainIndex
//                             ? "none"
//                             : sA.id == mainIndex
//                             ? ""
//                             : "none",
import React from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import "./slider.css";

const sliderArray = [
  {
    id: -2,
    img: "i am image",
    hidden: true,
  },
  {
    id: -1,
    img: "i am image",
    hidden: true,
  },
  {
    id: 0,
    img: "./1.png",
    hidden: false,
    heading: "Head 1",
  },
  {
    id: 1,
    img: "./8_.png",
    hidden: false,
    heading: "Head 1",
  },
  {
    id: 2,
    img: "./3_.png",
    hidden: false,
    heading: "Head 2",
  },
  {
    id: 3,
    img: "./4.png",
    hidden: false,
    heading: "Head 3",
  },
  {
    id: 4,
    img: "./5.png",
    hidden: false,
    heading: "Head 4",
  },
  {
    id: 5,
    img: "./6.png",
    hidden: false,
    heading: "Head 5",
  },
  {
    id: 6,
    img: "./7.png",
    hidden: false,
    heading: "Head 6",
  },
  {
    id: 7,
    img: "./8.png",
    hidden: false,
    heading: "Head 1",
  },
  {
    id: 8,
    img: "./2.png",
    hidden: false,
    heading: "Head 1",
  },
  {
    id: 9,
    img: "./10.png",
    hidden: false,
    heading: "Head 2",
  },
  {
    id: 10,
    img: "./11.png",
    hidden: false,
    heading: "Head 3",
  },
  {
    id: 11,
    img: "./12.png",
    hidden: false,
    heading: "Head 4",
  },
  {
    id: 12,
    img: "./13.png",
    hidden: false,
    heading: "Head 5",
  },
  {
    id: 13,
    img: "./14.png",
    hidden: false,
    heading: "Head 6",
  },
  {
    id: 14,
    img: "./15.png",
    hidden: false,
    heading: "Head 1",
  },
  {
    id: 15,
    img: "./16.png",
    hidden: false,
    heading: "Head 1",
  },
  {
    id: 16,
    img: "./17.png",
    hidden: false,
    heading: "Head 2",
  },
  {
    id: 17,
    img: "./18.png",
    hidden: false,
    heading: "Head 3",
  },
  {
    id: 18,
    img: "i am image 7",
    hidden: true,
  },
  {
    id: 19,
    img: "i am image",
    hidden: true,
  },
];

export default function Slider() {
  const [bindLength, setbindLength] = React.useState(4);
  const [mainIndex, setmainIndex] = React.useState(2);
  const [open, setOpen] = React.useState(false);
  const text =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";

  console.log(bindLength, "bindLength");
  console.log(mainIndex, "sliderArray");

  return (
    <>
      <AnimatePresence>
        {open && (
          <>
            <div className="modalBg"></div>
            <div className="modal">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 120,
                  width: "0px",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  width: "980px",
                }}
                exit={{
                  opacity: 0,
                  width: "0px",
                }}
                transition={{
                  duration: 0.5,
                }}
                className="modal-children"
              >
                <div className="modal-grandchildren">
                  <Typography
                    sx={{
                      position: "absolute",
                      color: "black",
                      zIndex: 20,
                      insetInlineEnd: 10,
                      insetBlockStart: 10,
                      cursor: "pointer",
                      ":hover": {
                        transform: "scale(1.2)",
                      },
                    }}
                    onClick={() => setOpen(false)}
                  >
                    <CloseIcon />
                  </Typography>

                  <motion.span
                    variants={{
                      hidden: { opacity: 0, height: "0%" },
                      visible: {
                        opacity: 1,
                        height: "100%",
                        transition: {
                          duration: 1,
                          type: "spring",
                          stiffness: 20,
                        },
                      },
                    }}
                    initial="hidden"
                    exit={{
                      height: "0%",
                      opacity: 0,
                      transition: {
                        duration: 0.4,
                      },
                    }}
                    whileInView="visible"
                    className="modalLeft"
                  >
                    <motion.img
                      height="90%"
                      borderRadius="20px"
                      src="https://images.unsplash.com/photo-1515825838458-f2a94b20105a?auto=format&fit=crop&w=300"
                      srcSet="https://images.unsplash.com/photo-1515825838458-f2a94b20105a?auto=format&fit=crop&w=300&dpr=2 2x"
                      loading="lazy"
                      alt="Yosemite by Casey Horner"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1440 320"
                      // width="400px"
                      width="346px"
                      className="modalLeftSvg"
                    >
                      <path
                        fill="white"
                        fill-opacity="1"
                        d="M0,192L21.8,208C43.6,224,87,256,131,234.7C174.5,213,218,139,262,96C305.5,53,349,43,393,74.7C436.4,107,480,181,524,208C567.3,235,611,213,655,176C698.2,139,742,85,785,96C829.1,107,873,181,916,229.3C960,277,1004,299,1047,298.7C1090.9,299,1135,277,1178,250.7C1221.8,224,1265,192,1309,165.3C1352.7,139,1396,117,1418,106.7L1440,96L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
                      ></path>
                    </svg>
                    <span className="modalLeftHeading">
                      <motion.div
                        initial={{
                          width: "0px",
                          opacity: 0,
                        }}
                        animate={{
                          width: "160px",
                          opacity: 1,
                        }}
                        transition={{
                          duration: 1,
                          type: "spring",
                          stiffness: 100,
                        }}
                        className="modalLeftHeadingBg1"
                      ></motion.div>
                      <motion.div
                        initial={{
                          width: "0px",
                          opacity: 0,
                        }}
                        animate={{
                          width: "150px",
                          opacity: 0.7,
                        }}
                        transition={{
                          duration: 1,
                          delay: 0.5,
                          type: "spring",
                          stiffness: 100,
                        }}
                        className="modalLeftHeadingBg2"
                      ></motion.div>
                      <motion.div
                        initial={{
                          opacity: 0,
                        }}
                        animate={{
                          opacity: 1,
                        }}
                        transition={{
                          duration: 1,
                          delay: 0.5,
                          type: "spring",
                          stiffness: 100,
                        }}
                        className="modalLeftHeadingtext"
                      >
                        Top Sponsors
                      </motion.div>
                    </span>
                  </motion.span>

                  <div className="modalRight">
                    {sliderArray
                      ?.filter((sA) => {
                        if (sA.id == mainIndex) {
                          return sA;
                        }
                      })
                      .map((sA) => (
                        <>
                          <motion.span
                            variants={{
                              hidden: { opacity: 0 },
                              visible: {
                                opacity: 1,
                                transition: {
                                  duration: 1,
                                },
                              },
                            }}
                            initial="hidden"
                            exit="hidden"
                            whileInView="visible"
                            style={{
                              textAlign: "center",
                            }}
                          >
                            {text}
                          </motion.span>
                        </>
                      ))}
                    <div className="modalRightSkewBox">
                      <motion.span
                        variants={{
                          hidden: { opacity: 0, width: 0 },
                          visible: {
                            opacity: 1,
                            transition: {
                              duration: 1,
                              delay: 0.5,
                            },
                            width: "300px",
                            borderLeft: "2px solid black",
                            borderTop: "1px solid black",
                          },
                        }}
                        initial="hidden"
                        exit="hidden"
                        whileInView="visible"
                        className="modalRightSkewBoxChild"
                        style={{
                          height: "40px",
                          width: "300px",
                          position: "absolute",
                          transform: "skewX(-40deg)",
                        }}
                      ></motion.span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
      <div className="main">
        <div className="container">
          <div className="container-chlid">
            <motion.div
              initial="hidden"
              animate={{
                opacity: [0, 1],
              }}
              transition={{
                duration: "1",
                times: [0, 1],
              }}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
              // onClick={() => setOpen(true)}
            >
              {sliderArray
                ?.filter((sA) => {
                  if (sA.id > bindLength - 5 && sA.id <= bindLength) {
                    return sA;
                  }
                })
                .map((sA) => (
                  <motion.div
                    key={sA.id}
                    initial={{
                      opacity:
                        sA.id < mainIndex
                          ? 1.5 / (mainIndex - sA.id + 1)
                          : 1.5 / (sA.id - mainIndex + 1),
                    }}
                    animate={
                      mainIndex == sA.id
                        ? {
                            opacity: 1,
                            marginRight: 0,
                            marginLeft: 0,
                            zIndex: 10,
                          }
                        : {
                            opacity:
                              sA.id < mainIndex
                                ? 0.3 / (mainIndex - sA.id + 1)
                                : 0.3 / (sA.id - mainIndex + 1),
                          }
                    }
                    transition={{
                      duration: 0.2,
                    }}
                    style={{
                      width:
                        sA.id < mainIndex
                          ? "150px"
                          : sA.id == mainIndex
                          ? "50%"
                          : "150px",
                      display: "flex",
                      justifyContent: "center",
                      // paddingTop: "50px",
                      height: "80vh",
                      alignItems: "center",
                      // backgroundColor: "transparent"
                    }}
                  >
                    <div
                      style={{
                        visibility: sA.hidden ? "hidden" : "",
                        height:
                          sA.id == mainIndex
                            ? `${90}%`
                            : sA.id < mainIndex
                            ? `${100 - (bindLength - sA.id) * 15}%`
                            : `${100 - (sA.id - (bindLength - 4)) * 15}%`,
                        width: "100%",
                        boxShadow:
                          sA.id <= mainIndex
                            ? `0px ${(sA.id - (bindLength - 4)) * 2}px ${
                                (sA.id - (bindLength - 4)) * 10
                              }px black`
                            : `0px ${(bindLength - sA.id) * 2}px 10px black`,
                        position: "relative",
                        backgroundColor: "white",
                      }}
                    >
                      <img
                        style={{
                          position: "absolute",
                          objectFit: "cover",
                          backgroundColor: "white",
                          opacity: 1,
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                        }}
                        src={sA.img}
                      ></img>
                    </div>
                  </motion.div>
                ))}
            </motion.div>
            <motion.div
              initial="hidden"
              animate={{
                opacity: [0, 1],
              }}
              transition={{
                duration: "1",
                times: [0, 1],
              }}
              style={{
                zIndex: 2,
                display: "flex",
                width: "100%",
                // paddingTop: "20px",
                justifyContent: "center",
                transform: "translateY(-20px)",
                zIndex: 100,
              }}
            >
              <div
                onClick={() => {
                  if (mainIndex == 0 || mainIndex < 0) {
                    return;
                  }
                  setbindLength(bindLength - 1);
                  setmainIndex(mainIndex - 1);
                }}
                style={{
                  width: "300px",
                }}
              >
                <ArrowCircleLeftIcon
                  sx={{
                    fontSize: "2.5rem",
                    color: "white",
                    ":hover": {
                      color: "#e4e4e7",
                    },
                  }}
                />
              </div>
              <div
                onClick={() => {
                  if (mainIndex == 17 || mainIndex > 17) {
                    return;
                  }
                  setbindLength(bindLength + 1);
                  setmainIndex(mainIndex + 1);
                }}
              >
                <ArrowCircleRightIcon
                  sx={{
                    fontSize: "2.5rem",
                    color: "white",
                    ":hover": {
                      color: "#e4e4e7",
                    },
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

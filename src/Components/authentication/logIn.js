import React from "react";
import "./logIn.css";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { alpha, styled } from "@mui/material/styles";
import { AnimatePresence, motion } from "framer-motion";
import { width } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import { DotLoader } from "react-spinners";

export default function LogIn() {
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [fullName, setfullName] = React.useState("");
  const [pageStatus, setpageStatus] = React.useState("login");
  const matches = useMediaQuery("(max-width: 720px)");
  const [loading, setloading] = React.useState(true);

  const CssTextField = styled(TextField)({
    marginBottom: "20px",
    width: matches ? "80%" : "30%",
    color: "#65FFA3",
    "& .MuiInputBase-root": {
      color: "white",
    },
    "& .MuiFormLabel-root": {
      color: "white",
    },
    "& label.Mui-focused": {
      color: "#65FFA3",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#65FFA3",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#65FFA3",
      },
      "&:hover fieldset": {
        borderColor: "#65FFA3",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#65FFA3",
      },
    },
  });

  function handleChange() {
    console.log(email);
    console.log(password);
    resetHandle();
  }

  function resetHandle() {
    setemail("");
    setpassword("");
  }

  return (
    <>
      {loading && (
        <div
          style={{
            backgroundColor: "black",
            height: "100vh",
            position: "fixed",
            width: "100%",
            zIndex: 200,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DotLoader color="white" />
        </div>
      )}
      <div id="main-login">
        <motion.div
          initial={{
            opacity: 0,
            y: 120,
            width: "0%",
          }}
          animate={{
            opacity: loading ? 0 : 1,
            y: 0,
            width: "100%",
          }}
          exit={{
            opacity: 0,
            width: "0px",
          }}
          transition={{
            duration: 0.3,
          }}
          className="login-container"
        >
          <div className="login-container-left">
            <>
              <label
                style={{
                  color: "white",
                  width: matches ? "80%" : "30%",
                  marginBottom: "10px",
                }}
              >
                Email
              </label>
              <input
                style={{
                  placeholderColor: "white",
                  marginBottom: "20px",
                  width: matches ? "80%" : "30%",
                  color: "#65FFA3",
                  height: "40px",
                  outline: "none",
                  color: "black",
                }}
                id="custom-css-outlined-input"
                label="Email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                type="text"
                // autoComplete="current-password"
              />
              <label
                style={{
                  color: "white",
                  width: matches ? "80%" : "30%",
                  marginBottom: "10px",
                }}
              >
                Password
              </label>
              <input
                style={{
                  marginBottom: "20px",
                  width: matches ? "80%" : "30%",
                  color: "#65FFA3",
                  height: "40px",
                  outline: "none",
                  color: "black",
                }}
                id="custom-css-outlined-input"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                // autoComplete="current-password"
              />
            </>

            <div onClick={() => handleChange()} className="sign-in-button">
              <motion.div
                initial={{
                  width: "0px",
                  opacity: 0,
                }}
                animate={{
                  width: "110px",
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                  type: "spring",
                  stiffness: 100,
                }}
                style={{
                  height: "30px",
                  width: "100px",
                  backgroundColor: "#16a34a",
                  transform: "skewX(10deg)",
                  transform: "skewY(-5deg)",
                  position: "absolute",
                  opacity: 0.8,
                }}
              ></motion.div>
              <motion.div
                initial={{
                  width: "0px",
                  opacity: 0,
                }}
                animate={{
                  width: "100px",
                  opacity: 0.7,
                }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 100,
                }}
                style={{
                  height: "30px",
                  width: "100px",
                  backgroundColor: "#65FFA3",
                  zIndex: "100",
                  opacity: 0.7,
                  // transform: "skewX(10deg)",
                  transform: "rotateX(90deg)",
                  transform: "skewX(10deg)",
                  // transform: "rotateX(-10deg)"
                  position: "absolute",
                }}
              ></motion.div>
              <motion.div
                initial={{
                  // width: "0px",
                  opacity: 0,
                }}
                animate={{
                  // width: "150px",
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 100,
                }}
                style={{
                  zIndex: 100,
                  paddingTop: "2px",
                  fontSize: "16px",
                  color: "black",
                }}
              >
                {pageStatus == "login" ? "Sign In" : "SignUp"}
              </motion.div>
            </div>
          </div>
          <img
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
            onLoad={() => {
              setloading(false);
            }}
            src="./login02.jpg"
          ></img>
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundColor: "black",
              opacity: 0.6,
            }}
          ></div>
        </motion.div>
      </div>
    </>
  );
}
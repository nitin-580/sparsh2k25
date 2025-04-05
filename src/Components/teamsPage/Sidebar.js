import React, { useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import "./Sidebar.css";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
// import { Link } from "react-router-dom";

const arrayList = [
  {
    id: 0,
    name: "nam",
  },
  {
    id: 1,
    name: "nam2",
  },
  {
    id: 2,
    name: "nam3",
  },
];

const Sidebar = () => {
  const [open, setopen] = React.useState(false);
 


  return (
    <>

      <Drawer anchor={"right"} open={open} onClose={() => setopen(false)}>
        <div className="Side-container">
          <ul onClick={() => setopen(false)} class="nav__links">
            <li class="nav__item">
              <a class="nav__link neon-button" href="#joints">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                core
              </a>
            </li>
            <li class="nav__item">
              <a class="nav__link neon-button" href="#Infra">
              <span></span>
                <span></span>
                <span></span>
                <span></span>
                INFRA AND IN HOUSE MANAGERIAL
              </a>
            </li>
            <li class="nav__item">
              <a class="nav__link neon-button" href="#WebDev">
              <span></span>
                <span></span>
                <span></span>
                <span></span>
                WEB DEVELOPMENT
              </a>
            </li>
            <li class="nav__item">
              <a class="nav__link neon-button" href="#Publicity">
              <span></span>
                <span></span>
                <span></span>
                <span></span>
                PUBLICITY
              </a>
            </li>
            <li class="nav__item">
              <a class="nav__link neon-button" href="#Finance">
              <span></span>
                <span></span>
                <span></span>
                <span></span>
                FINANCE
              </a>
            </li>
            <li class="nav__item">
              <a class="nav__link neon-button" href="#Sponsorship">
              <span></span>
                <span></span>
                <span></span>
                <span></span>
                SPONSORSHIP
              </a>
            </li>
            <li class="nav__item">
              <a class="nav__link neon-button" href="#PR">
              <span></span>
                <span></span>
                <span></span>
                <span></span>
                PUBLIC RELATION
              </a>
            </li>
            <li class="nav__item">
              <a class="nav__link neon-button" href="#Hospitality">
              <span></span>
                <span></span>
                <span></span>
                <span></span>
                HOSPITALITY
              </a>
            </li>
            <li class="nav__item">
              <a class="nav__link neon-button" href="#Discipline">
              <span></span>
                <span></span>
                <span></span>
                <span></span>
                DISCIPLINE
              </a>
            </li>
            <li class="nav__item">
              <a class="nav__link neon-button" href="#Admin">
              <span></span>
                <span></span>
                <span></span>
                <span></span>
                ADMIN AND DOCUMENTATION
              </a>
            </li>
            <li class="nav__item">
              <a class="nav__link neon-button" href="#Design">
              <span></span>
                <span></span>
                <span></span>
                <span></span>
                DESIGN
              </a>
            </li>
            <li class="nav__item">
              <a class="nav__link neon-button" href="#ThinkTank">
              <span></span>
                <span></span>
                <span></span>
                <span></span>
                THINK TANK
              </a>
            </li>
            <li class="nav__item">
              <a class="nav__link neon-button" href="#MediaCell">
              <span></span>
                <span></span>
                <span></span>
                <span></span>
                MEDIA CELL
              </a>
            </li>
            <li class="nav__item">
              <a class="nav__link neon-button" href="#Cinematography">
              <span></span>
                <span></span>
                <span></span>
                <span></span>
                CINEMATOGRAPHY
              </a>
            </li>
            <li class="nav__item">
              <a class="nav__link neon-button" href="#Coordinators">
              <span></span>
                <span></span>
                <span></span>
                <span></span>
                COORDINATORS
              </a>
            </li>
            <li class="nav__item">
              <a class="nav__link neon-button" href="#Co_Coordinators">
              <span></span>
                <span></span>
                <span></span>
                <span></span>
                CO-COORDINATORS
              </a>
            </li>
          </ul>
        </div>
      </Drawer>

      <div className="sidebar">
        <KeyboardDoubleArrowLeftIcon sx={{
          fontSize: "100px",
          position: "absolute",
          insetInlineEnd: 0,
          color: "white"
        }} onClick={() => setopen(true)} />

        <div
          style={{
            backgroundColor: "white"
          }}
        >
        </div>
      </div>
    </>
  );
};


export default Sidebar;

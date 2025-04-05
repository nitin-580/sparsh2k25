import * as React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import SchoolIcon from "@mui/icons-material/School";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PersonIcon from "@mui/icons-material/Person";

export default function NavBar(data) {
  const [state, setState] = React.useState(false);

  return (
    <>
      <div id="main">
        <div className="left-container">
          <Link
            onClick={() => {
              data.setactiveUrl("/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            to="/"
            className="left-container-child"
          >
            <img
              className="left-container-child-nav-logo"
              src="./sparsh_logo_top.png"
            ></img>
          </Link>
        </div>
        <div className="right-container">
          <div className="right-container-child">
            {data.activeUrl == "/" || window.location.pathname == "/" ? (
              <div className="nav-item-active">
                <div className="active-indicator"></div>
                Home
              </div>
            ) : (
              <Link
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  data.setactiveUrl("/");
                }}
                className="nav-item"
                to="/"
              >
                <div className="hover-effect"></div>
                Home
              </Link>
            )}

            {data.activeUrl == "/events" ? (
              <div className="nav-item-active">
                <div className="active-indicator"></div>
                Events
              </div>
            ) : (
              <Link
                onClick={() => {
                  data.setactiveUrl("/events");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                to="/events"
                className="nav-item"
              >
                <div className="hover-effect"></div>
                Events
              </Link>
            )}
            {data.activeUrl == "/sponsors" ? (
              <div className="nav-item-active">
                <div className="active-indicator"></div>
                Sponsors
              </div>
            ) : (
              <Link
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  data.setactiveUrl("/sponsors");
                }}
                to="/sponsors"
                className="nav-item"
              >
                <div className="hover-effect"></div>
                Sponsors
              </Link>
            )}
            {data.activeUrl == "/CampusAmbassador" ? (
              <div className="nav-item-active">
                <div className="active-indicator"></div>
                Campus Ambassador
              </div>
            ) : (
              <Link
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  data.setactiveUrl("/CampusAmbassador");
                }}
                to="/CampusAmbassador"
                className="nav-item"
              >
                <div className="hover-effect"></div>
                Campus Ambassador
              </Link>
            )}
            {data.activeUrl == "/teams" ? (
              <div className="nav-item-active">
                <div className="active-indicator"></div>
                Team
              </div>
            ) : (
              <Link
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  data.setactiveUrl("/teams");
                }}
                to="/teams"
                className="nav-item"
              >
                <div className="hover-effect"></div>
                Team
              </Link>
            )}
          </div>
          <div className="right-container-hamburger">
            <MenuIcon onClick={() => setState(true)} />
          </div>

          <Drawer
            anchor={"right"}
            open={state}
            sx={{
              opacity: 0.9,
            }}
            onClose={() => setState(false)}
          >
            <div id="drawer">
              <div className="drawer-header">
                <img
                  style={{
                    height: "50px",
                    width: "200px",
                    objectFit: "contain",
                  }}
                  src="./sparsh_logo_top.png"
                ></img>
              </div>
              <div className="drawer-links">
                {data.activeUrl == "/" ? (
                  <div className="nav-item-active">
                    {" "}
                    <HomeIcon
                      sx={{
                        paddingRight: "10px",
                      }}
                    />
                    Home
                  </div>
                ) : (
                  <Link
                    onClick={() => {
                      setState(false);
                      data.setactiveUrl("/");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="nav-item"
                    to="/"
                  >
                    <HomeIcon
                      sx={{
                        paddingRight: "10px",
                      }}
                    />
                    Home
                  </Link>
                )}
                {data.activeUrl == "/events" ? (
                  <div className="nav-item-active">
                    {" "}
                    <AccountBalanceIcon
                      sx={{
                        paddingRight: "10px",
                      }}
                    />
                    Events
                  </div>
                ) : (
                  <Link
                    onClick={() => {
                      setState(false);
                      data.setactiveUrl("/events");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    to="/events"
                    className="nav-item"
                  >
                    <AccountBalanceIcon
                      sx={{
                        paddingRight: "10px",
                      }}
                    />
                    Events
                  </Link>
                )}
                {data.activeUrl == "/sponsors" ? (
                  <div className="nav-item-active">
                    {" "}
                    <AccountBalanceIcon
                      sx={{
                        paddingRight: "10px",
                      }}
                    />
                    Sponsors
                  </div>
                ) : (
                  <Link
                    onClick={() => {
                      setState(false);
                      data.setactiveUrl("/sponsors");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    to="/sponsors"
                    className="nav-item"
                  >
                    <AccountBalanceIcon
                      sx={{
                        paddingRight: "10px",
                      }}
                    />
                    Sponsors
                  </Link>
                )}
                {data.activeUrl == "/CampusAmbassador" ? (
                  <div className="nav-item-active">
                    {" "}
                    <AccountBalanceIcon
                      sx={{
                        paddingRight: "10px",
                      }}
                    />
                    Campus Ambassador
                  </div>
                ) : (
                  <Link
                    onClick={() => {
                      setState(false);
                      data.setactiveUrl("/CampusAmbassador");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    to="/CampusAmbassador"
                    className="nav-item"
                  >
                    <GroupsIcon
                      sx={{
                        paddingRight: "10px",
                      }}
                    />
                    Campus Ambassador
                  </Link>
                )}
                {data.activeUrl == "/teams" ? (
                  <div className="nav-item-active">
                    {" "}
                    <AccountBalanceIcon
                      sx={{
                        paddingRight: "10px",
                      }}
                    />
                    Team
                  </div>
                ) : (
                  <Link
                    onClick={() => {
                      setState(false);
                      data.setactiveUrl("/teams");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    to="/teams"
                    className="nav-item"
                  >
                    <GroupsIcon
                      sx={{
                        paddingRight: "10px",
                      }}
                    />
                    Team
                  </Link>
                )}
              </div>
            </div>
          </Drawer>
        </div>
      </div>
    </>
  );
}
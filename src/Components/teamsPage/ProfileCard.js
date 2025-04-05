import React from "react";

import "./ProfileCard.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import { DotLoader } from "react-spinners";
// import ProfileCard from "./ProfileCard.js";

const ProfileCard = (props) => {
  const [Error, setError] = React.useState(false);
  return (
    <div class={props.classSpecial}>
      <div class="our-team">
        <div class="picture">
          <img
            class="img-fluid"
            src={Error ? "./no_profile_.png" : props.imgSrc}
            onLoad={() => {
              props.ssetcounter(props.counter + 1);
            }}
            onError={() => setError(true)}
          />
        </div>
        <div class="team-content">
          <h3 class="name">{props.name}</h3>
          <h4 class="title">{props.position}</h4>
        </div>
        <ul class="social">
          <li>
            <a
              href="https://codepen.io/collection/XdWJOQ/"
              class="fa fa-facebook"
              aria-hidden="true"
            ></a>
          </li>
          <li>
            <a
              href="https://codepen.io/collection/XdWJOQ/"
              class="fa fa-twitter"
              aria-hidden="true"
            ></a>
          </li>
          <li>
            <a
              href="https://codepen.io/collection/XdWJOQ/"
              class="fa fa-google-plus"
              aria-hidden="true"
            ></a>
          </li>
          <li>
            <a
              href="https://codepen.io/collection/XdWJOQ/"
              class="fa fa-linkedin"
              aria-hidden="true"
            ></a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;

import React from "react";
import img from "../../Assets/Shirley.png";
import qt from "../../Assets/quote.svg";

export default function Moment() {
  return (
    <>
      <div className="container-right" style={{ flexDirection: "row" }}>
        <div className="moment-img">
          <img src={img} alt="shirley" height={700}></img>
          <div className="moment-name-block">
            <p style={{ fontSize: 48, fontWeight: 200 }}>Shirley Setia</p>
            <p style={{ fontSize: 32, fontWeight: 400 }}>
              Performing for Sparsh
            </p>
          </div>
        </div>
        <div className="moment-text-block">
          <p className="moment-tag-line">
            <span className="apos">
              <img src={qt} height="40px"></img>
            </span>
            A Canvas waiting to be Painted...
          </p>
          <p className="moment-text-content">
            From traditional dances to artistic performances. Sparsh is a
            melting pot of creativity, culture, and tradition.
          </p>
          <div className="gradient-divider"></div>
        </div>
      </div>
      <div style={{ height: "200px" }}></div>
      <div className="container-right" style={{ flexDirection: "row-reverse" }}>
        <div className="moment-img">
          <img src={img} alt="shirley" height={700}></img>
          <div className="moment-name-block">
            <p style={{ fontSize: 48, fontWeight: 200 }}>Shirley Setia</p>
            <p style={{ fontSize: 32, fontWeight: 400 }}>
              Performing for Sparsh
            </p>
          </div>
        </div>
        <div className="moment-text-block">
          <p className="moment-tag-line">
            <span className="apos">
              <img src={qt} height="40px"></img>
            </span>
            <span
              style={{
                fontSize: 100,
                fontWeight: 600,
                display: "inline-block",
              }}
            >
              27
            </span>{" "}
            Years of Legacy
          </p>
          <p className="moment-text-content">
            From traditional dances to artistic performances. Sparsh is a
            melting pot of creativity, culture, and tradition.
          </p>
          <div className="gradient-divider"></div>
        </div>
      </div>
    </>
  );
}

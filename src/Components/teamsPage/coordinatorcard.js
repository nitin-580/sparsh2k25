import React from "react";

import "./coordinatorcard.css";

const CoordinatorCard = (props) => {
  let count = 0;
  let list = props.text;
  return (
    <div class={props.classSpecial}>
      <div class="our-teamc">
        <div class="teamc-content">
          <h3 class="name">{props.name}</h3>

          <div className="list">
            {list.map((a) => {
              return (
                <span
                  className="item"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {a.map((e) => {
                    return <span className="item-child">{e}</span>;
                  })}
                </span>
              );
            })}
            {/* <ul> 
                            {(props.text).map((e) => {
                                
                                return (<li className="item">{e}</li>)
                            })}
                        </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoordinatorCard;

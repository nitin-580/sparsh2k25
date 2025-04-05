import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import "./adminEvent.css";
// import env from "react-dotenv";
// import bcrypt from "bcrypt";

function EventsAdmin() {
  const [status, setStatus] = useState(false);
  const [message, setMessage] = useState(null);
  const [error404, seterror404] = useState(true);
  const [color, setcolor] = useState("");
  const [desc, setdesc] = useState("");
  const [event_type, setevent_type] = useState(null);
  const [img, setimg] = useState(null);
  const [event_name, setevent_name] = useState("");
  const [rulebook, setrulebook] = useState("");
  const [date, setdate] = useState(null);
  const [googleformsvnitian, setgoogleformsvnitian] = useState("");
  const [googleFormNonSvnitian, setgoogleFormNonSvnitian] = useState("");

  useEffect(() => {
    if (process.env.REACT_APP_KEY == window.location.href.split("=")[4]) {
      seterror404(false);
    }
  }, []);
  console.log(process.env.REACT_APP_PASS, "check");
  const pd = process.env.REACT_APP_PASS;
  const id = process.env.REACT_APP_ID;
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.event_name.value, "target");
    let data_event = {
      color: color,
      description: desc,
      name: event_name,
      categories: event_type,
      googleFormNonSvnitian: googleFormNonSvnitian,
      googleFormSvnitian: googleformsvnitian,
      rulebook: rulebook,
      date: date,
      image: img,
    };
    console.log({ data_event });
    // const data = new FormData();
    // // http: //localhost:3000/admin?id=sparsh2k23=[20]?pd=lquska191$%*12#
    // data.append("name", e.target?.event_name.value);
    // data.append("description", e.target?.event_desc.value);
    // data.append("date", e.target?.event_date.value);
    // data.append("image", e.target?.event_image.files[0]);
    // data.append("rulebook", e.target?.event_rulebook.value);
    // data.append("color", e.target?.color.value);
    // data.append("categories", e.target?.categories.value);
    // data.append("googleFormSvnitian", e.target?.categories.value);
    // data.append("googleFormNonSvnitian", e.target?.participants.value);
    // console.log(data, "data")
    setStatus(true);
    const res = await axios.post(
      `https://sparsh-auth-production.up.railway.app/api/events-admin/add-events`,
      data_event,
      {
        headers: { "content-type": "multipart/form-data" },
      }
    );
    setStatus(false);
    window.alert(res.data.message);
  };

  return (
    <>
      {window.location.href.split("=")[1] === String(id) &&
      window.location.href.split("=")[3] === String(pd) &&
      error404 == false ? (
        <div
          style={{
            width: "100vw",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            paddingTop: "50px",
          }}
          className="container"
        >
          {" "}
          <h1>Let's add a New Event</h1>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
            className="container-form"
          >
            <label
              style={{ display: "flex", flexDirection: "column" }}
              className="container-label"
            >
              Event Name
              <input
                type="text"
                name="event_name"
                className="input_field"
                onChange={(e) => setevent_name(e.target.value)}
                placeholder="Enter the name of the event"
              />
            </label>
            <label
              style={{ display: "flex", flexDirection: "column" }}
              className="container-label"
            >
              Event Type
              <select
                name="categories"
                className="input_field"
                onChange={(e) => setevent_type(e.target.value)}
              >
                <option value={null}>--- Select Option ---</option>
                <option value="proshows">Proshows</option>
                <option value="design_and_digital_arts">
                  Design and dgital arts
                </option>
                <option value="speaking_arts">Speaking art</option>
                <option value="school_events">School Events</option>
                <option value="creative_thinking_and_personality">
                  Creative thinking and personality
                </option>
                <option value="grooming">Grooming</option>
                <option value="singing">Singing</option>
                <option value="dancing">Dancing</option>
                <option value="art_of_color">Art of Color</option>
              </select>
            </label>
            <label
              style={{ display: "flex", flexDirection: "column" }}
              className="container-label"
            >
              Event Description
              <input
                className="input_field"
                type="text"
                name="event_desc"
                onChange={(e) => setdesc(e.target.value)}
                placeholder="Enter the description of the event"
              />
            </label>
            <label
              style={{ display: "flex", flexDirection: "column" }}
              className="container-label"
            >
              Color Theme
              <input
                className="input_field"
                type="text"
                name="color"
                onChange={(e) => setcolor(e.target.value)}
                placeholder="Enter the description of the event"
              />
            </label>

            <label
              style={{ display: "flex", flexDirection: "column" }}
              className="container-label"
            >
              Date
              <input
                className="input_field"
                type="date"
                name="event_date"
                onChange={(e) => setdate(e.target.value)}
                placeholder="Enter date time"
              />
            </label>

            <label
              style={{
                color: "white",
                marginTop: "10px",
              }}
              className="container-label"
            >
              Event Image
              <br />
              <input
                className="input_field"
                style={{
                  color: "white",
                  marginTop: "5px",
                }}
                type="file"
                name="event_image"
                accept="image/*"
                onChange={(e) => setimg(e.target.files[0])}
              />
            </label>

            <label
              style={{ display: "flex", flexDirection: "column" }}
              className="container-label"
            >
              Rulebook url
              <input
                className="input_field"
                type="url"
                name="event_rulebook"
                onChange={(e) => setrulebook(e.target.value)}
                placeholder="Enter rulebook url"
              />
            </label>
            <label
              style={{ display: "flex", flexDirection: "column" }}
              className="container-label"
            >
              Google Form Svnitian url
              <input
                className="input_field"
                type="url"
                name="googleFormSvnitian"
                onChange={(e) => setgoogleformsvnitian(e.target.value)}
                placeholder="Enter rulebook url"
              />
            </label>
            <label
              style={{ display: "flex", flexDirection: "column" }}
              className="container-label"
            >
              Google Form Non-Svnitian url
              <input
                className="input_field"
                type="url"
                name="googleFormNonSvnitian"
                onChange={(e) => setgoogleFormNonSvnitian(e.target.value)}
                placeholder="Enter rulebook url"
              />
            </label>

            <label>
              <button style={{ width: "100%", height: "50px" }}>
                {status ? <ClipLoader size={20} /> : "Add Event"}
              </button>
            </label>

            {message && (
              <h5
                style={{
                  color: "#fff",
                  backgroundColor: "#ff0330",
                  padding: "5px",
                }}
              >
                {message}
              </h5>
            )}
          </form>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            height: "100vh",
            width: "100vw",
            zIndex: 100,
            position: "fixed",
            background: "black",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          Error 404
        </div>
      )}
    </>
  );
}

export default EventsAdmin;

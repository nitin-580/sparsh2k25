import { useState } from "react";
import "./register.css";
import {
  BrowserRouter as Router,
  generatePath,
  Switch,
  Route,
  useHistory,
  useParams
} from "react-router-dom";

export default function Register() {
  const [tname, setTname] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("1");
  const [year, setYear] = useState("1");
  const [phone, setPhone] = useState("");
  const [phonealt, setPhonealt] = useState("")
  const [email, setEmail] = useState("");
  const [institute, setInstitute] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    
    console.log({tname,name,category,year,phone,phonealt,email,institute,gender})

    if(tname && name && category && year && phone && phonealt && email && institute && gender) {
      let user = {tname,name,category,year,phone,phonealt,email,institute,gender};
      let event = {name: window.location.href.split("=")[1]}
      console.log({user,event})
      fetch('https://sparsh-auth-production.up.railway.app/api/events/register', {
        headers: {
          'Content-Type':'application/json'
        },
        method: 'POST',
        body: JSON.stringify({user,event})
      })
      .then(res => {
        console.log(res, "res");
        console.log(res.body.getReader());
        if(res.status=='201') {
          window.alert('Registration done');
        } else {
          console.log(res);
          window.alert('Some error occured')
        }
        // window.location.reload(true);
      })
      .catch(err => {
        console.log(err)
        window.alert('Some error occured')
      })
    } else {
      window.alert('Please fill all the required fields')
    }
  }
  return (
    <>
      <div id="main-register">
        {window.location.href.split("=")[1] == "dance" || window.location.href.split("=")[1] == "music" ? (
          <><form name="Form" id="part-1" method="post" onSubmit={handleSubmit}>
          <fieldset className="fieldset">
            <legend> Team Information </legend>
            <div className="flex-container">
              <div className="flex-2">
                <div>
                  <label htmlFor="tname">Team name</label>
                </div>
                <div>
                  <input
                    type="text"
                    name="user[tname]"
                    onChange={(e) => setTname(e.target.value)}
                    placeholder="Eg. Smashers"
                    className="in"
                  />
                </div>
              </div>
              <div className="flex-2" id="team">
                <div>
                  <label htmlFor="cat">Category</label>
                </div>
                <div>
                  <select name="user[category]" onChange={(e) => setCategory(e.target.value)} value={category} id="cat">
                    <option value="1">Single</option>
                    <option value="2">Duo</option>
                    <option value="3">Group</option>
                    <option value="4">Departmental</option>
                    <option value="5">Street Dance</option>
                  </select>
                </div>
              </div>
              <div className="flex-2">
                <div>
                  <label htmlFor="name">Leader's name</label>
                </div>
                <div>
                  <input
                    type="text"
                    name="user[name]"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Eg. Ram Verma"
                    className="in"
                  />
                </div>
              </div>
              <div className="flex-2">
                <div>
                  <label htmlFor="num">Phone number</label>
                </div>

                <div>
                  <input
                    type="tel"
                    name="user[phone]"
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Eg. 1234567890"
                    // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    className="in"
                  />
                </div>
              </div>
              <div className="flex-2">
                <div>
                  <label htmlFor="num">Alternate phone number</label>
                </div>

                <div>
                  <input
                    type="tel"
                    name="user[phonealt]"
                    onChange={(e) => setPhonealt(e.target.value)}
                    placeholder="Eg. 1234567890"
                    // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    className="in"
                  />
                </div>
              </div>
              <div className="flex-2">
                <div>
                  <label htmlFor="mail">E-mail Address</label>
                </div>

                <div>
                  <input
                    type="text"
                    name="user[email]"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Eg. u20cs004@coed.svnit.ac.in"
                    className="in"
                  />
                </div>
              </div>
              <div className="flex-2">
                <div>
                  <label htmlFor="iname">Institute Name</label>
                </div>

                <div>
                  <input
                    type="text"
                    name="user[institute]"
                    onChange={(e) => setInstitute(e.target.value)}
                    placeholder="Eg. SVNIT"
                    className="in"
                  />
                </div>
              </div>
              {/* <div className='flex-2'>
                                <div>
                                    <label htmlFor="cname">Course Enrolled</label>
                                </div>

                                <div>
                                    <input type="text" name="cname" placeholder="Eg. Computer Engineering" className="in" />
                                </div>
                            </div> */}
              <div className="flex-2">
                <div>
                  <label htmlFor="year">College Year</label>
                </div>

                <div>
                  <select name="user[year]" onChange={(e) => setYear(e.target.value)}>
                    <option value="1">I</option>
                    <option value="2">II</option>
                    <option value="3">III</option>
                    <option value="4">IV</option>
                    <option value="5">V</option>
                  </select>
                </div>
              </div>
              <div className="flex-2">
                <div>
                  <label htmlFor="">Gender</label>
                </div>

                <div>
                  <input
                    type="radio"
                    name="user[gender]"
                    onChange={(e) => setGender(e.target.value)}
                    id="Male"
                    value="Male"
                    className="in"
                  />
                  <label htmlFor="Male"> Male </label>

                  <input
                    type="radio"
                    name="user[gender]"
                    onChange={(e) => setGender(e.target.value)}
                    id="Female"
                    value="Female"
                    className="in"
                  />
                  <label htmlFor="Female"> Female </label>

                  {/* <input type="radio" name="gender" id="Other" value="Other" className="in"/>
                                    <label htmlFor="Other">Other </label> */}
                </div>
              </div>
              {/* <div className="flex-2">
                <div>
                  <label htmlFor="photo">Payment proof</label>
                </div>

                <div>
                  <input type="file" name="photo" id="photo" className="in" />
                </div>
              </div> */}
              {/* <div className='flex-2'>
                                <div>
                                    <label htmlFor="cid">College ID</label>
                                </div>

                                <div>
                                    <input type="file" name="cid" id="cid" className="in"/>
                                </div>
                            </div> */}
            </div>
          </fieldset>
          <div id="imp">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <span>
                <p>
                  It is mandatory that all team members bring their College ID
                  Card for verification at the event.
                </p>
              </span>
              <span>
                <p>
                  SVNIT Students are requested to kindly use their college email
                  id for registeration.
                </p>
              </span>
            </div>
          </div>
          <div className="button">
            <input type="hidden" value="dancing" name="event[name]" />
            <input type="submit" value="Submit" />
            <input type="reset" value="Reset" />
          </div>
        </form>
        <div id="part-2">
          <img
            className="poster"
            src={window.location.href.split("=")[2]}
            alt="Sample"
          />
        </div></>
        ) : (
          <div style={{
            display: "flex",
            height: "100vh",
            width: "100vw",
            zIndex: 100,
            position: "fixed",
            background: "black",
            justifyContent: "center",
            alignItems: "center",
          }}>
            Error 404
          </div>
        ) }
        
      </div>
    </>
  );
}

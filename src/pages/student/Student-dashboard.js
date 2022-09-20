import { Container } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./student-dashboard.css";
import dance from "../../assets/dance.jpg";
import event2 from "../../assets/event2.jpg";
import event3 from "../../assets/event3.jpg";
import event4 from "../../assets/event4.jpg";
import event5 from "../../assets/event5.jpg";

const Student = () => {
  const navigate = useNavigate();
  return (
    <div className="student-dashboard">
      <Container className="container">
        <div className="headings">
          <h1 id="title">Annual Day Celebration!</h1>
          <h3 id="description">Select the Event you wish to participate</h3>
        </div>
        <div className="events-section">
          <div className="event-wrapper">
            <div className="circle-section event">
              <img
                src={dance}
                alt=""
                onClick={() => navigate("/student-dashboard/solo-dance")}
              />
            </div>
            <span id="span-event-id">Solo Dance</span>
          </div>
          <div className="event-wrapper">
            <div className="circle-section event">
              <img
                src={event2}
                alt=""
                onClick={() => navigate("/student-dashboard/group-dance")}
              />
            </div>
            <span id="span-event-id">Group Dance</span>
          </div>
          <div className="event-wrapper">
            <div className="circle-section event">
              <img
                src={event3}
                alt=""
                onClick={() => navigate("/student-dashboard/classical")}
              />
            </div>
            <span id="span-event-id">Classical</span>
          </div>
          <div className="event-wrapper">
            <div className="circle-section event">
              <img
                src={event4}
                alt=""
                onClick={() => navigate("/student-dashboard/concert")}
              />
            </div>
            <span id="span-event-id">Concert</span>
          </div>
          <div className="event-wrapper">
            <div className="circle-section event">
              <img
                src={event5}
                alt=""
                onClick={() => navigate("/student-dashboard/drama")}
              />
            </div>
            <span id="span-event-id">Drama</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Student;

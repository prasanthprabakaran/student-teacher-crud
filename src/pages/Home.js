import { Box, Button, Container } from "@mui/material";
import React from "react";
import "./home.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SchoolIcon from "@mui/icons-material/School";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="Home">
      <Container className="home-container">
        <Box className="choose-box student">
          <span>Student</span>
          <Button
            endIcon={<SchoolIcon />}
            variant="contained"
            color="success"
            className="button-class"
            onClick={()=>navigate('/student-dashboard')}
          >
            Click Here
          </Button>
        </Box>
        <Box className="choose-box teacher">
          <span>Teacher</span>
          <Button
            endIcon={<AccountCircleIcon />}
            variant="contained"
            color="success"
            className="button-class"
            onClick={()=>navigate('/teacher')}
          >
            Proceed
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default Home;

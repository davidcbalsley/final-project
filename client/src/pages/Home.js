import React from "react";
import Button from "../components/Button";
import GridHalfScreen from "../components/GridHalfScreen";
import GridWrapper from "../components/GridWrapper";
import Pagetitle from "../components/Pagetitle";
import { Link } from "react-router-dom";
import StackedFormWrapper from "../components/StackedFormWrapper";

function Home() {
    return (
      <div className="content">
        {/* Page title */}
        <Pagetitle>Food Bank Project</Pagetitle>
        
        {/* App motto */}
        <p style={{ textAlign: "center" }}>Connecting households with food banks, safely, in this time of pandemic</p>
        
        <GridWrapper>
          
          {/* Sign up button */}
          <GridHalfScreen>
            <Link to="/ClientCreateLogin">
              <Button>
                Sign Up
              </Button>
            </Link>
          </GridHalfScreen>
          
          {/* Log in form */}
          <GridHalfScreen>
            <StackedFormWrapper>
              <fieldset>
                <legend>Log In</legend>
                <label for="username">Username</label>
                <input type="text" id="username" placeholder="username" />
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="password" />
                <button type="submit" className="pure-button pure-button-primary">Sign in</button>
              </fieldset>
            </StackedFormWrapper>
          </GridHalfScreen>

        </GridWrapper>

        {/* Link to donate to food pantries */}
        <a href="/" _target="_blank" style={{ display: "block", textAlign: "center" }}>Donate to your local food bank</a>

      </div>);
  }

export default Home;

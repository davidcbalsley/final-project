import React from "react";
import Button from "../components/Button";
import Pagetitle from "../components/Pagetitle";
import { Link } from "react-router-dom";

function Home() {
    return (
      <div className="content">
        {/* Page title */}
        <Pagetitle>Food Bank Project</Pagetitle>
        
        {/* App motto */}
        <p style={{ textAlign: "center" }}>Connecting households with food banks, safely, in this time of pandemic</p>
        
        <div className="pure-g">
          
          {/* Sign up button */}
          <div className="pure-u-1-2">
            <Link to="/ClientCreateLogin">
              <Button>
                Sign Up
              </Button>
            </Link>
          </div>
          
          {/* Log in form */}
          <div className="pure-u-1-2">
            <form className="pure-form pure-form-stacked">
              <fieldset>
                <legend>Log In</legend>
                <label for="username">Username</label>
                <input type="text" id="username" placeholder="username" />
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="password" />
                <button type="submit" className="pure-button pure-button-primary">Sign in</button>
              </fieldset>
            </form>
          </div>

        </div>

        {/* Link to donate to food pantries */}
        <a href="/" _target="_blank" style={{ display: "block", textAlign: "center" }}>Donate to your local food bank</a>

      </div>);
  }

export default Home;

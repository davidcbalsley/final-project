import React from "react";

function Home() {
    return (
      <div className="content">
        {/* Home page title */}
        <h2 className="content-head" style={{ textAlign: "center" }}>Food Bank Project</h2>
        
        {/* App motto */}
        <p style={{ textAlign: "center" }}>Connecting households with food banks, safely, in this time of pandemic</p>
        
        <div className="pure-g">
          
          {/* Sign up button */}
          <div className="pure-u-1-2">
            <button className="pure-button pure-button-primary">Sign Up</button>
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

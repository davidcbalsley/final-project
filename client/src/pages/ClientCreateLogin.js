import React, { useState } from "react";
import Button from "../components/Button";
import { useHistory } from "react-router-dom";
import Pagetitle from "../components/Pagetitle";
import StackedFormWrapper from "../components/StackedFormWrapper";
import API from "../utils/API";

function ClientCreateLogin() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    Use this to redirect user to new pages
    let history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        
        // Check that user entered username and password
        if (!username || !password) {
            alert("Please enter a username and password.")  // Future development -- alert more nicely
        } else {
            // Remove any extraneous spaces from end of email and password
            username.trim();
            password.trim();


        // Add check that user has entered values for username and password -- see 19.3.18
    
        // David! At this point, make call to api to create login credentials with username and password
        // If successful, navigate to page where we collect user's info
        /*
        API.createLogin(username, password)
          .then()
          .catch()
        */
        history.push("/ClientEnterPersonalInfo");
    

            API.createLoginCredentials({
                email: username,
                password: password,
                userType: "V"
            })
            .then(res => {
                // Re-direct to page where client can enter name, address, and other info
                // Pass along login id, so that we can add it to client record when we create one
                history.push({
                    pathname: "/ClientEnterPersonalInfo",
                    data: res.data
                });
            })
            .catch(err => console.log(err));
        }

      };

    return (
        <div className="content">
            {/* Home page title */}
            <Pagetitle>Create your username and password!</Pagetitle>

            <StackedFormWrapper onSubmit={handleSubmit}>
                <fieldset>
                    <label for="new-email">E-mail address</label>
                    <input 
                        type="text" 
                        id="new-e-mail"
                        placeholder="e-mail address"
                        onChange={event => setUsername(event.target.value)} 
                    />
                    <label for="new-password">Password</label>
                    <input 
                        type="password" 
                        id="new-password" 
                        onChange={event => setPassword(event.target.value)}
                    />
                    <Button>
                        Submit
                    </Button>
                </fieldset>
            </StackedFormWrapper>
        </div>
    );
}

export default ClientCreateLogin;
import React from "react";

function ClientCreateLogin() {
    return (
        <div className="content">
            {/* Home page title */}
            <h2 className="content-head" style={{ textAlign: "center" }}>Create your username and password!</h2>

            <form class="pure-form pure-form-stacked">
                <fieldset>
                    <label for="new-username">Username</label>
                    <input type="text" id="new-username" />
                    <label for="new-password">Password</label>
                    <input type="password" id="new-password" />
                    <button type="submit" class="pure-button pure-button-primary">Submit</button>
                </fieldset>
            </form>
        </div>
    );
}

export default ClientCreateLogin;
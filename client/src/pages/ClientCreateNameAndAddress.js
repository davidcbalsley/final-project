import React from "react";

function ClientCreateNameAndAddress() {
    return (
        <div className="content">
            {/* Home page title */}
            <h4 className="content-head" style={{ textAlign: "center" }}>Great! Please provide us with more information, so that we can finish setting up your account</h4>

            <form class="pure-form pure-form-stacked">
                <fieldset>
                    <label for="new-first-name">First name</label>
                    <input type="text" id="new-first-name" />

                    <button type="submit" class="pure-button pure-button-primary">Submit</button>
                </fieldset>
            </form>
        </div>
    );
}

export default ClientCreateNameAndAddress;
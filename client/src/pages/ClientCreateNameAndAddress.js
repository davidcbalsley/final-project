import React from "react";

function ClientCreateNameAndAddress() {
    return (
        <div className="content">
            {/* Page title */}
            <h4 className="content-head" style={{ textAlign: "center" }}>Great! Please provide us with more information, so that we can finish setting up your account</h4>

            <form className="pure-form pure-form-stacked">
                <fieldset>
                    {/* First name */}
                    <label for="new-first-name">First name</label>
                    <input type="text" id="new-first-name" />

                    {/* Last name */}
                    <label for="new-last-name">Last name</label>
                    <input type="text" id="new-last-name" />

                    {/* Street address */}
                    <label for="new-street-address">Street address</label>
                    <input type="text" id="new-last-name" />

                    {/* Apartment number */}
                    <label for="new-apartment-number">Apartment number</label>
                    <input type="text" id="new-apartment-number" />

                    {/* City */}
                    <label for="new-city">City</label>
                    <input type="text" id="new-city" />

                    {/* State */}
                    <label for="new-state">State</label>
                    <select id="new-city">
                        <option>IL</option>
                        <option>IN</option>
                        <option>WI</option>
                    </select>

                    {/* Zip code */}
                    <label for="new-zip">Zip code</label>
                    <input type="text" id="new-zip" />

                    <button type="submit" className="pure-button pure-button-primary">Submit</button>
                </fieldset>
            </form>
        </div>
    );
}

export default ClientCreateNameAndAddress;
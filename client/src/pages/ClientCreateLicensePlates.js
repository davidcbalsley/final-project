import React from "react";

function ClientCreateLicensePlates() {
    return (
        <div>
            {/* Page title */}
            <h4 className="content-head" style={{ textAlign: "center" }}>Please enter your license plate number(s)</h4>

            <form className="pure-form pure-form-stacked">
                <fieldset>
                    {/* State */}
                    <label for="new-plate-state">State</label>
                    <select id="new-plate-state">
                        <option>IL</option>
                        <option>IN</option>
                        <option>WI</option>
                    </select>

                    {/* License plate number */}
                    <label for="new-plate-number">Number</label>
                    <input type="text" id="new-plate-number" />

                    {/* Add button */}
                    <button className="pure-button">Add plate</button>

                    {/* Table of license plate numbers */}
                    <table className="pure-table">
                        <thead>
                            <tr>
                                <th>State</th>
                                <th>Number</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>

                    <button type="submit" className="pure-button pure-button-primary">Submit</button>
                    <p style={{ textAlign: "center" }}>(4 of 4)</p>
                </fieldset>
            </form>
        </div>);
}

export default ClientCreateLicensePlates;
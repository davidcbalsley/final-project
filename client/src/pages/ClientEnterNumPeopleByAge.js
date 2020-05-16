import React from "react";

function ClientEnterNumPeopleByAge() {
    return (
        <div>
            {/* Page title */}
            <h4 className="content-head" style={{ textAlign: "center" }}>Please let us know the number of people in your household</h4>

            <form className="pure-form pure-form-stacked">
                <fieldset>
                    {/* Number adults */}
                    <label htmlFor="num-adults">Adults</label>
                    <div className="pure-u-1-5">
                        <button className="pure-button">+</button>
                    </div>
                    <div className="pure-u-3-5">
                        <input type="text" id="num-adults" />
                    </div>
                    <div className="pure-u-1-5">
                        <button className="pure-button">-</button>
                    </div>
                    
                    {/* Number children */}
                    <label htmlFor="num-children">Children (under age 12)</label>
                    <div className="pure-u-1-5">
                        <button className="pure-button">+</button>
                    </div>
                    <div className="pure-u-3-5">
                        <input type="text" id="num-children" />
                    </div>
                    <div className="pure-u-1-5">
                        <button className="pure-button">-</button>
                    </div>

                    {/* Number seniors */}
                    <label for="num-seniors">Seniors (65 or older)</label>
                    <div className="pure-u-1-5">
                        <button className="pure-button">+</button>
                    </div>
                    <div className="pure-u-3-5">
                        <input type="text" id="num-seniors" />
                    </div>
                    <div className="pure-u-1-5">
                        <button className="pure-button">-</button>
                    </div>

                    <button type="submit" className="pure-button pure-button-primary">Submit</button>
                    <p style={{ textAlign: "center" }}>(3 of 4)</p>
                </fieldset>
            </form>
        </div>
    );
}

export default ClientEnterNumPeopleByAge;
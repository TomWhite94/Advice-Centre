import React from "react";
import ScriptContainer from "../ScriptContainer";

function InitialQuery() {

    let selectOnChange = event => {
        console.log(event.target.value)
      }

    return(
        <div className="query-container" id="query-container" onchange="onChangeQueryContainer()">
            <div className="segment-component active" id="initial-query">
                <h2>What is the query regarding?</h2>
                <select className="default-dropdown" id="initial-query-selector"
                    onChange={selectOnChange}>
                    <option value="" disabled selected>Choose a query</option>
                    <option value="billingQuery">Billing query</option>
                    <option value="homeMoveQuery">Home Move query</option>
                    <option value="submitMeterReading">Submit Meter Reading</option>
                    <option value="changeTariff">Change Tariff</option>
                    <option value="faultyMeter">Faulty Meter</option>
                    <option value="grantsQueries">Government Grants Queries</option>
                    <option value="prepayTopUp">Prepay Top Up query</option>
                    <option value="paymentsQuery">Payments query</option>
                    <option value="ddChangedQuery">DD Changed query</option>
                    <option value="otherQuery">Other query</option>
                </select>
            </div>
            <ScriptContainer />
        </div>
    )
}

export default InitialQuery
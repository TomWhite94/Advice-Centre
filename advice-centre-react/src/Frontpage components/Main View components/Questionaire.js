import React from "react";

function Questionaire() {
    return(
        <div className="segment-component" id="questionaire_container">
            <div className="goBack-container">
                <button className="goBack" onclick="goBackQ();"><i className="far fa-hand-point-left"></i> Go
                    back</button>
            </div>

            <h2 id="questionaire-header"></h2>
            <div id="questionaire-content"></div>
            <p id="questionaire-submit-error">Please ensure that you've filled in the entire
                questionaire
                before
                attempting to submit</p>
        </div>
    )
}

export default Questionaire
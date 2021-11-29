import React from "react";

function ScriptContainer() {
    return(
        <div className="script-container" id="script-container">
            <div className="script-content">
                <div className="script-header">
                    <h3>My script</h3>
                    <i className="fas fa-comments"></i>
                </div>
                <div>
                    <ul>
                        <li>You're through to <strong>X</strong> at <strong>Utility
                                Switchboard</strong>. how can I help you today?</li>
                        <li><strong>(IF THEY ASK WHO WE ARE AGAIN)</strong> You're through to
                            <strong>Utility Switchboard</strong>, we're a helpline - what is it
                            you're looking to do today?
                        </li>
                        <li>Okay, to help direct your call I need to confirm some details - Can
                            I
                            take your postcode? And your door number?</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ScriptContainer
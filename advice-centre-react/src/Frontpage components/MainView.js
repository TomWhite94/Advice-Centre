import React from "react";
import InitialQuery from "./Main View components/InitialQuery"
import Questionaire from './Main View components/Questionaire'

function MainView() {
    return(
        <div>
        <div className="object-standard-container clip-top-right" id="mainView">
            <div className="object-standard-inner-container cont-width animate__animated animate__fadeIn" id="container-component">
                <div className="container">
                    {/* Section 1 */}
                    <span id="section1-app">
                        {/* Initial Query */}
                        <InitialQuery />
                        {/* Permission */}
                        <div className="segment-component" id="permission">
                            <h2 id="permission-header">Do you give me permission to access your supply details?</h2>
                            <div id="permission-content">
                                <div className="selection-container" id="permission-stage">
                                    <article>
                                        <input type="radio" className="radio-select-field" name="permission"
                                            id="permission-yes" />
                                        <label for="permission-yes">Yes</label>
                                        <div className="radio-select-field-cover"></div>
                                    </article>
                                    <article>
                                        <input type="radio" className="radio-select-field" name="permission"
                                            id="permission-no" />
                                        <label for="permission-no">No</label>
                                        <div className="radio-select-field-cover"></div>
                                    </article>
                                </div>
                            </div>
                        </div>
                        {/* Stage 2 enquiry */}
                        <div className="segment-component" id="stage2">
                            <h2 id="stage2-header"></h2>
                            <div id="stage2-content"></div>
                        </div>
                        {/* Stage 3 enquiry */}
                        <div className="segment-component" id="stage3">
                            <h2 id="stage3-header"></h2>
                            <div id="stage3-content"></div>
                        </div>
                        {/* Stage 4 enquiry */}
                        <div className="segment-component" id="stage4">
                            <h2 id="stage4-header"></h2>
                            <div id="stage4-content"></div>
                        </div>
                        {/* Stage 5 enquiry */}
                        <div className="segment-component" id="stage5">
                            <h2 id="stage5-header"></h2>
                            <div id="stage5-content"></div>
                        </div>
                        {/* Stage 6 enquiry */}
                        <div className="segment-component" id="stage6">
                            <h2 id="stage6-header"></h2>
                            <div id="stage6-content"></div>
                        </div>
                    </span>
                    {/* Questionaire */}
                    <Questionaire />
                    {/* Results */}
                    <div className="segment-component" id="results_container">
                        <div className="goBack-container">
                            <button className="goBack" onclick="goBackR();"><i className="far fa-hand-point-left"></i> Go
                                back</button>
                        </div>

                        <h2 id="results-header"></h2>
                        <div id="results-content"></div>
                        <div>
                            <a onclick="window.location.reload(true)" className="btn-main pink-btn redo">Start again <i
                                    className="fas fa-redo"></i></a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
                        </div>
    )
}

export default MainView
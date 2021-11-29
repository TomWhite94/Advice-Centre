import React from "react";
import speechBubbles from '../speech-bubbles.png'

function HeroContainer() {
    return(
        <div className="container">
          <div className="hero-container">
            <div className="animate__animated animate__fadeIn">
              <a onclick="window.location.reload(true)">
                  <h1 style={{margin: 0}}>Utility Switchboard</h1>
                  <h1 style={{margin: 0}}><span style={{color: "#31145B"}}>Advice Centre</span>.</h1>
              </a>
            </div>
            <div className="nav-logo-container">
                <a onclick="window.location.reload(true)">
                    <img className="nav-logo shake animate__animated animate__bounce" src={speechBubbles} />
                </a>
            </div>
          </div>
        </div>
    )
}

export default HeroContainer
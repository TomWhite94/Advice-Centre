import React from "react";
import companyLogo from '../usb-logo-white.png'

function Footer() {

  let scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
    return(
        <div>
            <div className="footer-container">
                <div className="footer-inner-container cont-width">
                    <a onclick="window.location.reload(true)">
                        <img src={companyLogo} />
                    </a>
                    <p>© Copyright <span id="year"></span> - All rights reserved</p>
                </div>
            </div>
            {/* scroll to top */}
            <a className="scroll-top-container" onClick={scrollToTop} id="scroll_to_top"><i className="fas fa-angle-up scroll-top"></i></a>
        </div>
    )
}

export default Footer
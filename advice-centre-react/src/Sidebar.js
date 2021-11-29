import React from "react";
import companyLogo from './usb-logo-white.png'

function Sidebar() {

    function openNav() {
        document.getElementById("mySidebar").style.width = "280px";
        document.getElementById("overlay").style.display = "block";
        document.getElementById("scroll_to_top").style.display = "none";
      }
    
      function closeNav() {
          document.getElementById("mySidebar").style.width = "0";
          document.getElementById("overlay").style.display = "none";
          document.getElementById("scroll_to_top").style.display = "block";
      }

    return(
        <div>
            <div>
                <div id="mySidebar" className="sidebar">
                    <a href="javascript:void(0)" className="closebtn" onClick={closeNav}><i className="far fa-times-circle"></i></a>
                    <a href="https://sales-portal.utilityswitchboard.com/" target="_blank" className="mt-1">Sales Portal</a>
                    <a href="#">Log out</a>
                </div>
                {/* overlay */}
                <div id="overlay" className="animate__animated animate__fadeIn" onClick={closeNav}></div>
            </div>
            <nav className="nav-container" id="navbar">
                <div className="container">
                    <div className="nav-content">
                        <div className="nav-logo-container">
                            <a onclick="window.location.reload(true)">
                                <img className="nav-logo" src={companyLogo} />
                            </a>
                        </div>
                        <div className="nav-btn-container">
                            <a className="btn-main login-nav-btn" onClick={openNav}>Hi,</a>
                            <a onclick="window.location.reload(true)"><i className="fas fa-home home"></i></a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Sidebar
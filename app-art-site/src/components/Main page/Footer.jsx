import React from "react";
import '../../Styles/Footer.css'
import footerLogo from '../../image/footerLogo.svg'

const Footer = () => {
    return(
        <div className="wrapper-footer">
            <div className="container-footer">
                <img src={footerLogo} alt="Лого" id="footerLogo"/>
                <p className="footer-text">2022. Все права защищены</p>
            </div>
            
        </div>
    )
}

export default Footer;
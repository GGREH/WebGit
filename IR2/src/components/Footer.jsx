import "./Footer.css";
import "../App.css";
import React from "react";
import footerData from "./Footer.json";

export function Footer() {
    return (
        <>
            <footer id="footer">
                <div className="flex flex-direction-column">
                    <div className="flex footer-info">
                        <h1 className="about-h1 footer-info-h1">
                            {footerData.title}
                        </h1>
                        <div className="footer-text">
                            <p>{footerData.description}</p>
                        </div>
                    </div>

                    <div className="flex flex-direction-column footer_contact_text">
                        <span className="h3_section footer_h3_contact">
                            Контакти:
                        </span>
                        <p>{footerData.address}</p>
                        <p className="footer_p_yellow footer_p_small">
                            {footerData.phone}
                        </p>
                        <p className="footer_p_yellow">{footerData.email}</p>

                        <div className="footer-socials flex flex-wrap">
                            {footerData.socials.map((soc) => {
                                return (
                                    <a
                                        key={soc.id}
                                        href={soc.url}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {soc.name}
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

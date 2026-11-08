import "./Header.css";
import "../App.css";
import React, { useState, useEffect } from "react";
import header from "./Header.json";

function parseHeader(i) {
    return header[i].array;
}

export function Header() {
    let menu, url, photo, about;
    menu = parseHeader(0);
    url = parseHeader(1);
    photo = parseHeader(2);
    about = parseHeader(3);

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (counter < photo.length - 1) setCounter((counter) => counter + 1);
            else setCounter(0);
        }, 5000);

        return () => clearInterval(interval);
    }, [counter, photo.length]);

    return (
        <>
            <header id="top" className="flex flex-direction-column">
                <nav className="flex flex-wrap header_menu_main">
                    {menu.map((punkt, index) => {
                        return (
                            <a href={url[index]} key={index}>
                                {punkt}
                            </a>
                        );
                    })}
                </nav>
                <section id="about" className="flex flex-wrap header-section">
                    <div className="flex flex-direction-column about">
                        <h1 className="about-h1">{about[0]}</h1>
                        <p>{about[1]}</p>
                        <p className="student-info">{about[2]}</p>
                    </div>
                    <img
                        className="about-img"
                        src={photo[counter]}
                        key={counter}
                        alt="Слайд"
                    />
                </section>
            </header>
        </>
    );
}

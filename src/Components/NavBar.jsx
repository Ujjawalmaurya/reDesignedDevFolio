import React from 'react'

export default function NavBar() {
    return (
        <nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
            <div className="container">
            <a className="navbar-brand js-scroll" href="#page-top">UjjawalMaurya</a>
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault"
                aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link js-scroll active" href="#home">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link js-scroll" href="#about">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link js-scroll" href="#experties">Experties</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link js-scroll" href="#projects">Projects</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link js-scroll" href="#blog">Blog</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link js-scroll" href="#contact">Contact</a>
                {/* <p align="left"> <img src="https://komarev.com/ghpvc/?username=ujjawalmaurya&label=Profile%20views&color=0e75b6&style=flat" alt="ujjawalmaurya" /> </p> */}
                </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}

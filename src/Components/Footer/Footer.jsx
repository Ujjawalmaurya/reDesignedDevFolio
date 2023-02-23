import Contact from "./Contact"

function Footer() {
    return (
        <section className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{"backgroundImage": "url(img/overlay-bg.jpg)"}}>
            <div className="overlay-mf"></div>

            {/* ========== Contact ========== */}
            <Contact />
            {/* ========== Contact ========== */}

            {/* <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="copyright-box">
                                <p className="copyright">&copy; Copyright <strong>DevFolio</strong>. All Rights Reserved</p>
                                <div className="credits">
                                    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer> */}

        </section>
    )
}

export default Footer
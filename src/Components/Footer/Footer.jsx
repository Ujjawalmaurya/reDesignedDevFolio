import Contact from "./Contact"

function Footer() {
    return (
        <section class="paralax-mf footer-paralax bg-image sect-mt4 route" style={{"background-image": "url(img/overlay-bg.jpg)"}}>
            <div class="overlay-mf"></div>

            {/* ========== Contact ========== */}
            <Contact />
            {/* ========== Contact ========== */}

            {/* <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="copyright-box">
                                <p class="copyright">&copy; Copyright <strong>DevFolio</strong>. All Rights Reserved</p>
                                <div class="credits">
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
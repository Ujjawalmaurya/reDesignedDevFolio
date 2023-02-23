import React from 'react'
// import SendMeMessage from './SendMeMessage'

function Contact() {
  return (
    <div className="container">
    <div className="row">
        <div className="col-sm-12">
        <div className="contact-mf">
            <div id="contact" className="box-shadow-full">
            <div className="row">

            {/* ========= Send Me a Message ========== */}
            {/* <SendMeMessage /> */}
            {/* ========= Send Me a Message ========== */}

                <div className="col-md-6">
                <div className="title-box-2 pt-4 pt-md-0">
                    <h5 className="title-left">
                    Social Links
                    </h5>
                </div>
                <div className="more-info">
                    <p className="lead">
                    You can connect me through:
                    </p>
                    <ul className="list-ico">
                    <li><span className="ion-ios-location"></span> Prayagraj, Uttar Pradesh - 211013</li>
                    <li><span className="ion-ios-telephone"></span> (+91) 9129-734-xxx</li>
                    <li><span className="ion-email"></span><a href='mailto:me@ujjawal.codes'>me@ujjawal.codes</a></li>
                    </ul>
                </div>
                <div className="socials">
                    <ul>
                    <li><a href="https://www.facebook.com/ujjawalmauryaum"><span className="ico-circle"><i className="ion-social-facebook"></i></span></a></li>
                    <li><a href="https://www.instagram.com/1amujjawal"><span className="ico-circle"><i className="ion-social-instagram"></i></span></a></li>
                    <li><a href="https://twitter.com/1amujjawal"><span className="ico-circle"><i className="ion-social-twitter"></i></span></a></li>
                    <li><a href="https://in.linkedin.com/in/ujjawalmauryaum"><span className="ico-circle"><i className="ion-social-linkedin"></i></span></a></li>
                    <li><a href="https://github.com/Ujjawalmaurya"><span className="ico-circle"><i className="ion-social-github"></i></span></a></li>
                    {/* <li><a href=""><span className="ico-circle"><i className="ion-social-pinterest"></i></span></a></li> */}
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Contact
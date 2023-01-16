import React from 'react'
import SendMeMessage from './SendMeMessage'

function Contact() {
  return (
    <div class="container">
    <div class="row">
        <div class="col-sm-12">
        <div class="contact-mf">
            <div id="contact" class="box-shadow-full">
            <div class="row">

            {/* ========= Send Me a Message ========== */}
            {/* <SendMeMessage /> */}
            {/* ========= Send Me a Message ========== */}

                <div class="col-md-6">
                <div class="title-box-2 pt-4 pt-md-0">
                    <h5 class="title-left">
                    Social Links
                    </h5>
                </div>
                <div class="more-info">
                    <p class="lead">
                    You can connect me through:
                    </p>
                    <ul class="list-ico">
                    <li><span class="ion-ios-location"></span> Prayagraj, Uttar Pradesh - 211013</li>
                    <li><span class="ion-ios-telephone"></span> (+91) 9129-734-xxx</li>
                    <li><span class="ion-email"></span><a href='mailto:me@ujjawal.codes'>me@ujjawal.codes</a></li>
                    </ul>
                </div>
                <div class="socials">
                    <ul>
                    <li><a href="https://www.facebook.com/ujjawalmauryaum"><span class="ico-circle"><i class="ion-social-facebook"></i></span></a></li>
                    <li><a href="https://www.instagram.com/1amujjawal"><span class="ico-circle"><i class="ion-social-instagram"></i></span></a></li>
                    <li><a href="https://twitter.com/1amujjawal"><span class="ico-circle"><i class="ion-social-twitter"></i></span></a></li>
                    <li><a href="https://in.linkedin.com/in/ujjawalmauryaum"><span class="ico-circle"><i class="ion-social-linkedin"></i></span></a></li>
                    <li><a href="https://github.com/Ujjawalmaurya"><span class="ico-circle"><i class="ion-social-github"></i></span></a></li>
                    {/* <li><a href=""><span class="ico-circle"><i class="ion-social-pinterest"></i></span></a></li> */}
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
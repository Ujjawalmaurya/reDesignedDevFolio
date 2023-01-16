import React from 'react'


function About() {
    return (
        <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
        <div className="row">
            <div className="col-sm-12">
            <div className="box-shadow-full">
                <div className="row">
                <div className="col-md-6">
                    <div className="row">
                    <img src="./img/testimonial.jpg" className="img-fluid rounded b-shadow-a" alt="testimonial" />
                    <div className="col-sm-6">
                        <div className="about-img">
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-7">
                    </div>
                    </div>
                    <div className="skill-mf">
                    <p className="title-s">Skill</p>
                    {/* <span>Docker</span> <span className="pull-right">85%</span>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: "85%"}} aria-valuenow="85" aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                    <span>AWS Architect</span>
                    <span className="pull-right">35%</span>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: "35%"}} aria-valuenow="35" aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div> */}
                    <span>Dart</span>
                    <span className="pull-right">60%</span>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: "60%"}} aria-valuenow="80" aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                    <span>JAVASCRIPT</span>
                    <span className="pull-right">50%</span>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="70" aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                        <h5 className="title-left">
                        About me
                        </h5>
                    </div>
                    <div className="about-info">
                        <p><span className="title-s">Name: </span> <span>Ujjawal Maurya</span></p>
                        <p><span className="title-s">Profile: </span> <span>Full Stack Developer</span></p>
                        <p><span className="title-s">Email: </span> <span>ujjawalmauryaum@gmail.com</span></p>
                        <p><span className="title-s">Phone: </span> <span>9129734584</span></p>
                    </div>
                    <p className="lead">
                        Computer Science Engineering Student Full of enthusiasm.
                        I’m currently pursuing my Bachelor's degree in Computer Science.
                        </p>
                    <p className="lead">
                        Iam passionate about Technologies and obsessed with the 
                        idea of improving himself and wants to grow and excel in it.
                    </p>
                    <p className="lead">
                        My interests are Android and Web app development,
                        exploring some useful and cool stuff more in Linux Community.
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
    )
}

export default About
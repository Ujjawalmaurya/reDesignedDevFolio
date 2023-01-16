    import React from 'react'

function IntroSkewStart({title1, title2, position, introText}) {
  return (
    <>
    <div id="home" className="intro route bg-image" style={{
    backgroundImage: "url(./img/intro-bg.jpg)"}}>
      <div className="overlay-itro"></div>
      <div className="intro-content display-table">
        <div className="table-cell">
          <div className="container">
            <p className="display-6 color-d">{title1}</p>
            <h1 className="intro-title mb-4">{title2}</h1>
            <h3 className="sub-title">{position}</h3>
            <p className="intro-subtitle"><span className="text-slider-items">{introText}</span><strong className="text-slider"></strong></p>
              {/* <p className="pt-3"><a className="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a></p> */}
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default IntroSkewStart

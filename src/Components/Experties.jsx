import ExpertiesCard from "../Cards/ExpertiesCard"

function Experties() {
  return (
        <section id="experties" className="services-mf route">
        <div className="container">
        <div className="row">
            <div className="col-sm-12">
            <div className="title-box text-center">
                <h3 className="title-a">
                Experties
                </h3>
                <p className="subtitle-a">
                Some of my skills and my sound Experties.
                </p>
                <div className="line-mf"></div>
            </div>
            </div>
        </div>
        <div className="row">
            <ExpertiesCard title="Figma Mockups" iconClass="ion-monitor" description="The deeper I go, my enthusiasm grow more and more. Beautiful UI attracts me and I Love creating that." />
            {/* === */}
            <ExpertiesCard title="Exploring packages" description=" I love to explore New stuffs." iconClass="ion-code-working" />
              {/* === */}
            <ExpertiesCard title="Frontend development" description="I always enjoy Creating quite beautiful UI/UX everyday. I try to explore new UI trends whenever I free." iconClass="ion-camera" />
              {/* === */}
            {/* <ExpertiesCard title="Graphic Design" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia." iconClass="ion-paintbrush"/> */}
              {/* === */}
            <ExpertiesCard title="Distro Hopping" description="Distro hopping became my fav since I've got to know more about Distributions and Desktop Enviromeents." />
              {/* === */}
            {/* <ExpertiesCard title="Marketing Services" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia." iconClass="ion-stats-bars" /> */}
        </div>
        </div>
    </section>
  )
}

export default Experties
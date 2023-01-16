
const _title = "Title";
const _iconClass = "ion-monitor";
const _description = "Experties description about 50-60 words.";

function ExpertiesCard({title = _title, description = _description, iconClass = _iconClass }) {
    return (
        <div className="col-md-4">
            <div className="service-box" style={{height: "350px"}}>
                <div className="service-ico">
                <span className="ico-circle"><i className={iconClass}></i></span>
                </div>
                <div className="service-content">
                <h2 className="s-title">{title}</h2>
                <p className="s-description text-center">
                    {description}
                </p>
                </div>
            </div>
        </div>
    )
}

export default ExpertiesCard
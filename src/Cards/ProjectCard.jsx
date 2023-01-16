
const _projTitle = 'Project Title';
const _defImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXOcEfuGD3FUfSBWGP86vD6faeERFXThgMyJfBJYgBhMREF8FtThd775lbXnuUbOqTJtg&usqp=CAU";
const _href = "https://google.com";
const _description = "anyDescription";
const _date = "18 Sept, 2020";

function ProjectCard({title= _projTitle, img=_defImg, href=_href, description = _description, date = _date}) {
  return (
    <div className="col-md-4">
    <div className="work-box">
        <a href={href} >
            <div className="work-img" style={{height: "350px"}}>
                <img src={img} alt="" className="img-fluid" />
            </div>
            <div className="work-content" >
                <div className="row">
                <div className="col-sm-8">
                    <h2 className="w-title">{title}</h2>
                    <div className="w-more">
                    <span className="w-ctegory">{description}</span> / <span className="w-date">{date}</span>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="w-like">
                    <span className="ion-ios-plus-outline"></span>
                    </div>
                </div>
                </div>
            </div>
            </a>
        </div>
    </div>
    )
}

export default ProjectCard
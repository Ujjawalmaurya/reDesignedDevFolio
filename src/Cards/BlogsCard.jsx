import React from 'react'

const _title = "Blog Title";
const _description = "Blog Description";
const _category = "Coding";
const _image = "https://learncodeonline.in/mascot.png";
const _author = "Ujjawal Maurya";
const _authorImg = "https://ujjawalmauryaum.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1659076690742%2Fz06rUI_eg.jpeg%3Fw%3D400%26h%3D400%26fit%3Dcrop%26crop%3Dfaces%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=640&q=75";
const _href = "http://blogs.ujjawal.codes/";

function BlogsCard({title = _title, description = _description, category = _category, image = _image, author = _author, href= _href }) {
  return (
    <div className="col-md-4">
        <div className="card card-blog">
            <div className="card-img work-box work-img" >
                <a href={href}><img src={image} alt="" className="img-fluid" /></a>
                </div>
                <div className="card-body"
                // style={{height: "150px"}}
                >
                <div className="card-category-box">
                    <div className="card-category">
                    <h6 className="category">{category}</h6>
                    </div>
                </div>
                <h3 className="card-title"><a href={href}>{title}</a></h3>
                <p className="card-description" >
                    {description}
                </p>
                </div>
                <div className="card-footer">
                <div className="post-author">
                    <a href="#">
                    <img src={_authorImg} alt="" className="avatar rounded-circle" />
                    <span className="author">{author}</span>
                    </a>
                </div>
                {/* <div className="post-date"> */}
                    {/* <span className="ion-ios-clock-outline"></span> 10 min */}
                {/* </div> */}
            </div>
        </div>
    </div>
    )
}

export default BlogsCard
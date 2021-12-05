import React from 'react'

const NewsItems = (props) => {
    let { title, discription, imageUrl, url, author, date, publisher } = props
    return (
        <div className='d-flex justify-content-center'>
            <div className="card my-3" style={{ width: "22rem" }} >
                <img src={imageUrl ? imageUrl : "https://www.reuters.com/resizer/PPtUQBO_55IQKCNEdtvVuJLEYw0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2ZF2FYJOBRIXNBXDVP5XPIJE2U.jpg"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{discription}</p>
                    <p className="card-text"><small className="text-muted">By {author ? author : "unkown"} On {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={url} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    <span className="position-absolute top-0 d-flex end-0 justify-content-end badge rounded-pill bg-danger" >
                        {publisher}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default NewsItems

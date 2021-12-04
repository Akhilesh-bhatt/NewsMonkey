import React, { Component } from 'react'

export class NewsItems extends Component {
    render() {
        let { title, discription, imageUrl, url, author, date, publisher} = this.props
        return (
            <div className='d-flex justify-content-center'>
                <div className="card my-3" style={{ width: "22rem" }} >
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{discription}</p>
                        <p className="card-text"><small className="text-muted">By {author ? author : "unkown"} On {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={url} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"94%", zIndex:"1"}}>
                            {publisher}
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItems

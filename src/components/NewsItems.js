import React, { Component } from 'react'

export class NewsItems extends Component {
    render() {
        let {title,discription,imageUrl,url}=this.props
        return (
            <div>
                <div className="card my-3" style={{ width: "22rem"}}>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{discription}...</p>
                        <a href={url} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItems
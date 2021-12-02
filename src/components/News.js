import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
    article = [
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Sam Byford",
            "title": "Apple may have a problem with iPhone demand as well as supply - The Verge",
            "description": "Apple is indicating to its iPhone 13 component suppliers that it may not order as many units as expected due to a drop in demand, Bloomberg reports. The company had already reportedly cut orders for the year by 10 million units.",
            "url": "https://www.theverge.com/2021/12/1/22813347/apple-iphone-demand-suppliers-chip-shortage-report",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/C-coMdnw4KomdDSBRJwsUkNsMJQ=/0x215:2002x1263/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22863273/vpavic_210916_4760_0240.jpg",
            "publishedAt": "2021-12-02T04:06:47Z",
            "content": "The chip shortage might not explain everything\r\nPhoto by Vjeran Pavic / The Verge\r\nApple is indicating to its iPhone 13 component suppliers that it may not order as many units as expected due to a dr… [+1088 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": "",
            "title": "MLB lockout: Everything to know about baseball's first work stoppage since 1994-95 - CBS sports.com",
            "description": "Why is there a lockout? What are they fighting over? How long will it last? Let's answer as best we can",
            "url": "https://www.cbssports.com/mlb/news/mlb-lockout-everything-to-know-about-baseballs-first-work-stoppage-since-1994-95/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2021/12/02/20d17f47-fea5-4fd3-8eb1-7c2eb7a0de91/thumbnail/1200x675/5a9feec9b91ff9740c391482ec35935a/clark-manfred.png",
            "publishedAt": "2021-12-02T03:57:00Z",
            "content": "At 11:59 p.m. ET on Wednesday, the current collective bargaining agreement (CBA) -- the negotiated accord that governs almost every aspect of the working relationship between Major League Baseball pl… [+5576 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "SciTechDaily"
            },
            "author": null,
            "title": "Archaeology Mystery Solved: Strange Footprints From Laetoli, Tanzania, Are From Early Humans - SciTechDaily",
            "description": "Findings provide conclusive evidence that multiple species of hominins co-existed on the landscape. The oldest unequivocal evidence of upright walking in the human lineage are footprints discovered at Laetoli, Tanzania in 1978, by paleontologist Mary Leakey a…",
            "url": "https://scitechdaily.com/archaeology-mystery-solved-strange-footprints-from-laetoli-tanzania-are-from-early-humans/",
            "urlToImage": "https://scitechdaily.com/images/Five-Hominin-Footprints.jpg",
            "publishedAt": "2021-12-02T03:20:16Z",
            "content": "Model of Laetoli Site A using photogrammetry showing five hominin footprints (a); and corresponding contour map of the site at Laetoli, Tanzania, generated from a 3D surface scan (b); map showing Lae… [+8088 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Alisha Ebrahimji and Christina Zdanowicz, CNN",
            "title": "A beloved football player and a senior with college scholarships among Michigan school shooting victims - CNN",
            "description": "Friends, family and an entire Michigan high school are grieving the loss of four students after a 15-year-old boy opened fire during the school day, killing four peers and shooting seven others on campus.",
            "url": "https://www.cnn.com/2021/12/01/us/michigan-oxford-high-school-shooting-victims-trnd/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211130223819-05-oxford-school-shooting-vigil-1130-super-tease.jpg",
            "publishedAt": "2021-12-02T03:04:00Z",
            "content": "(CNN)Friends, family and an entire Michigan high school are grieving the loss of four students after a 15-year-old boy opened fire during the school day, killing four peers and shooting seven others … [+5855 chars]"
        }
    ]
    constructor() {
        super();
        console.log("hello! I am a constructor from a news component");
        this.state = {
            aticle: this.article
        }
    }
    render() {

        return (
            <div className='container my-4'>
                <h2 className="my-3" >NewsMonkey - News Heading</h2>
                <div className="row">
                    {this.state.aticle.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItems title={element.title.slice(0,50)} discription={element.description.slice(0,100)} imageUrl={element.urlToImage} url={element.url} />
                        </div>
                })}
                </div>
            </div>
        )
    }
}

export default News
import React, { useState, useEffect } from 'react'
import NewsItems from './NewsItems'
import SpinnerLoad from './SpinnerLoad';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [article, setArticle] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const capitalizeFirstLetter = (string) => {
        return string[0].toUpperCase() + string.slice(1);
    }

    
    const updateNews = async () => {
        props.setProgress(20);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.API}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(40);
        let prashdata = await data.json();
        props.setProgress(75);
        // console.log(prashdata);
        setArticle(prashdata.articles)
        setTotalResults(prashdata.totalResults)
        setLoading(false);
        props.setProgress(100);
    }
    
    // use at place of componentDidMount
    useEffect(() => {
        updateNews()
        document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
        // eslint-disable-next-line 
    }, []);

    // const handlePrevPage = async () => {
    //     setPage(page - 1)
    //     updateNews();
    // }

    // const handleNextPage = async () => {
    //     setPage(page + 1)
    //     updateNews();
    // }

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.API}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page + 1)
        let data = await fetch(url);
        let prashdata = await data.json();
        setArticle(article.concat(prashdata.articles))
        setTotalResults(prashdata.totalResults)
    }

    return (
        <div className='container my-4'>
            <h1 className="mb-3 text-center" style={{marginTop:'70px'}} >NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
            {loading && <SpinnerLoad />}
            {article && <InfiniteScroll dataLength={article.length} next={fetchMoreData} hasMore={article.length !== totalResults} loader={<SpinnerLoad />}>
                <div className="container">
                    <div className="row">
                        {article.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItems title={element.title} discription={element.description} imageUrl={element.urlToImage} url={element.url} date={element.publishedAt} author={element.author} publisher={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>}
        </div>
    )
}

News.defaultProps = {
    country: 'us',
    pageSize: 8,
    category: 'general',
    API: "2baeca0a3cc147568c145d0370d438b4"
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    API: PropTypes.string
}

export default News

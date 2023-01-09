//import axios from 'axios';
import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'




const News = (props) => {
const capitalizeFirstLetter =(string)=>{
  return string.charAt(0).toUpperCase()+string.slice(1);
}
  

  const [article, setArticle] = useState([])
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.title=`${capitalizeFirstLetter(props.category)}-NewsApp` //to capitalize category first letter in title
    updateNews();
    // eslint-disable-next-line
  }, [])
  
  const updateNews = async () => {
props.showProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
    setLoading(true)
    let data = await fetch(url);
    props.showProgress(30)
    let parsedData = await data.json()
    props.showProgress(70)
    setArticle(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.showProgress(100)
  }

  // const handlePreviousClick = async () => {
    
    
  //   setPage(page - 1)
  //   updateNews()
  // }
  // const handleNextClick = async () => {
  //   setPage(page + 1)
  //   updateNews()

  // }
  const fetchMoreData =  async() => {
    
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`
    setPage(page+1)
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticle(article.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  
  }
  return (
    <>
      {/* <div className='container my-4'>
  <button className="btn btn-primary" onClick={updateNews}>Fetch News</button>
  </div> */}
      <>
        <h2 className='text-center' style={{marginTop:'90px'}}>You are getting Top {capitalizeFirstLetter(props.category)} Headlines </h2>
        <InfiniteScroll
        
          dataLength={article.length}
          next={fetchMoreData}
          hasMore={article.length!==totalResults}
          loader={<Spinner/>}
        >
        {/* if there is page loading 'true'then show spinner gif else not */}
        {/* {loading && <Spinner/>}    */}
        <div className="container">
          <div  className="row">
        { article.map((element) => {
          return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title ? element.title : ""} 
            description={element.description ? element.description : ""} 
            imageUrl={element.urlToImage ? element.urlToImage : "https://techcrunch.com/wp-content/uploads/2022/12/baidu-apollo.jpg?w=621"} newsUrl={element.url} date={element.publishedAt} author={element.author?element.author:"Unknown"} 
            source={element.source.name}/>
          </div>
        })}
        </div>
        </div>
</InfiniteScroll>
       

      </>
    
    </>

  )


}

News.defaultProps ={
  country:'us',
  pageSize: 5,
category: 'general',
}

News.propTypes ={
  country:PropTypes.string,
  pageSize: PropTypes.number,
category: PropTypes.string,
}
export default News



import React from 'react'

const NewsItem =(props)=> {
//  let{title,description,imageUrl,newsUrl}=props; //this is called destructuring of props
//when u use this no need to write props with props names in below code
  
      
    return (
      <div className='my-3'>
        <div className="card" >
          <div className='d-flex justify-content-end position-absolute top-0 end-0'>
          <span className="  badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>
    {props.source}
   
  </span>
          </div>
      
  <img src={props.imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">

    <h5 className="card-title">{props.title}   
    </h5>
    <p className="card-text">{props.description}...</p>
    <p className="card-text"><small className="text-muted">By {props.author} on {new Date(props.date).toGMTString()}</small></p>
    <a href={props.newsUrl} target="blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    
    
  )
}

export default NewsItem

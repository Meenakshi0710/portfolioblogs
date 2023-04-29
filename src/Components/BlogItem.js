import React from 'react'

const BlogItem = ({title,brief,imageUrl,slug}) => {
    let url = `https://meenakshi710.hashnode.dev/${slug}`;
  return (
    <>
    <div className="card mt-5" style={{maxWidth: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={imageUrl} className="img-fluid rounded-start" alt="..."/>
    
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{brief}</p>
        <a href = {url} target = "_blank" rel="noreferrer">Read more</a>
      </div>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default BlogItem
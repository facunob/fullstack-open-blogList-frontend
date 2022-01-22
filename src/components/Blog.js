import React, {useState} from 'react'

const Blog = ({blog}) => {
  const [showDetails, setShowDetails] = useState(false);


 return (
    <div>
      {blog.title} {blog.author} <button onClick={() => setShowDetails(true)} >Show details</button>
      {showDetails && (<div id="details">{blog.url} {blog.likes}</div>)}
    </div>  
  )
}

export default Blog
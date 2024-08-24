// Write your JS code here
import './index.css'
const BlogItem = props => {
  const {blogsList} = props
  const {id, title, description, publishedDate} = blogsList
  return (
    <li className="blogitem-container">
      <div className="text">
        <h1 className="title">{title}</h1>
        <p className="publishedDate">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
      <hr className='line'/>
    </li>
  )
}

export default BlogItem

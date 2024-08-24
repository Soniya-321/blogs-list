// Write your JS code here
import './index.css'
import BlogItem from '../BlogItem'
const BlogList = props => {
  const {blogsList} = props
  return (
    <div className="bloglist-container">
      <ul>
        {blogsList.map(each => (
          <BlogItem blogsList={each} key={each.id} />
        ))}
      </ul>
    </div>
  )
}

export default BlogList

// Write your JS code here
import './index.css'

const UserInfo = () => {
  return (
    <div className="user-info-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
        className="user-img"
        alt="profile"
      />
      <h1 className="user-name">Wade Warren</h1>
      <p className="user-designation">Software developer at UK</p>
    </div>
  )
}

export default UserInfo

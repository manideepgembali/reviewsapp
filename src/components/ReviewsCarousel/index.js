// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    profileNo: 0,
  }

  onClickLeftArrow = () => {
    const {profileNo} = this.state
    if (profileNo === 0) {
      this.setState()({
        profileNo: 0,
      })
    } else if (profileNo > 0) {
      this.setState(prevState => ({profileNo: prevState.profileNo - 1}))
    }
    return profileNo
  }

  onClickRightArrow = () => {
    const {profileNo} = this.state
    if (profileNo === 3) {
      this.setState()({
        profileNo: 3,
      })
    } else if (profileNo < 3) {
      this.setState(prevState => ({profileNo: prevState.profileNo + 1}))
    }
    return profileNo
  }

  render() {
    const {reviewsList} = this.props
    const {profileNo} = this.state
    // const {imgUrl, username, companyName, description} = reviewsList
    return (
      <div className="bg">
        <button type="button" onClick={this.onClickLeftArrow}  data-testid="leftArrow">
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
            
          />
        </button>
        <div className="card">
          <h1 className="head">Reviews</h1>
          <img
            src={reviewsList[profileNo].imgUrl}
            alt={reviewsList[profileNo].username}
          />
          <p className="head">{reviewsList[profileNo].username}</p>
          <p>{reviewsList[profileNo].companyName}</p>
          <p>{reviewsList[profileNo].description}</p>
        </div>
        <button type="button" onClick={this.onClickRightArrow} data-testid="leftArrow">
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
            
          />
        </button>
      </div>
    )
  }
}
export default ReviewsCarousel

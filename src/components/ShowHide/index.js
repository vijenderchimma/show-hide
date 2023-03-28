// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirstName: false, isLastName: false}

  getFirstName = () => {
    const {isFirstName} = this.state
    this.setState(() => ({isFirstName: !isFirstName}))
  }

  getLastName = () => {
    const {isLastName} = this.state
    this.setState(() => ({isLastName: !isLastName}))
  }

  render() {
    const {isFirstName, isLastName} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-container">
          <div className="name-container">
            <button
              type="button"
              className="show-hide-button"
              onClick={this.getFirstName}
            >
              Show/Hide Firstname
            </button>
            {isFirstName && <p className="name">Joe</p>}
          </div>
          <div className="name-container">
            <button
              type="button"
              className="show-hide-button"
              onClick={this.getLastName}
            >
              Show/Hide Lastname
            </button>
            {isLastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide

import {Component} from 'react'

import './index.css'

class RightComponent extends Component {
  state = {userInput: '', InputList: []}

  UserEnteredInput = event => {
    const {userInput} = this.state
    this.setState({userInput: event.target.value})
  }

  render() {
    const {userInput} = this.state
    return (
      <div className="right-div">
        <h1 className="heading">Character Counter</h1>
        <ul>
          <input
            type="search"
            placeholder="Enter the Characters here"
            className="input"
            onChange={this.UserEnteredInput}
          />
          <button type="button" className="add-button">
            Add
          </button>
        </ul>
      </div>
    )
  }
}
export default RightComponent

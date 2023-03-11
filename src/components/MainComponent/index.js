import {Component} from 'react'

import './index.css'

import {v4 as uuidv4} from 'uuid'

import LeftComponent from '../LeftComponent'

// import LeftComponent from '../LeftComponent'

// import RightComponent from '../RightComponent'

class MainComponent extends Component {
  state = {userInput: '', lengths: 0, lists: []}

  UserEnteredInput = event => {
    const {userInput, lengths} = this.state
    this.setState({
      userInput: event.target.value,
      lengths: event.target.value.length,
    })
  }

  submitUserInput = event => {
    event.preventDefault()
    const {userInput, lengths, lists} = this.state
    const newSkills = {
      id: uuidv4(),
      userInput,
      lengths,
    }

    this.setState(prevState => ({
      lists: [...prevState.lists, newSkills],
      id: uuidv4(),
      userInput: '',
      lengths: 0,
    }))
  }

  render() {
    const {userInput, lengths, lists} = this.state
    const ArrayLength = lists.length
    let Output
    if (ArrayLength !== 0) {
      Output = (
        <ul>
          {lists.map(Each => (
            <LeftComponent Each={Each} key={Each.id} />
          ))}
        </ul>
      )
    } else {
      Output = (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
            alt="no user inputs"
            className="alt-image"
          />
        </div>
      )
    }
    return (
      <div className="both-component">
        <div className="left-bar-div">
          <div className="top-bg">
            <h1 className="main-heading">Count the characters like a Boss..</h1>
          </div>
          {Output}
        </div>

        {/* right div starts here */}

        <div className="right-div">
          <h1 className="heading">Character Counter</h1>
          <div>
            <form onSubmit={this.submitUserInput}>
              <input
                type="text"
                placeholder="Enter the Characters here"
                className="input"
                onChange={this.UserEnteredInput}
                value={userInput}
              />
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default MainComponent

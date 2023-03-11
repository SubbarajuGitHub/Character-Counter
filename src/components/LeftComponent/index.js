import {Component} from 'react'

import './index.css'

class LeftComponent extends Component {
  render() {
    const {Each} = this.props
    const {userInput, lengths} = Each
    return (
      <li>
        <p className="list-items">
          {userInput} : {lengths}
        </p>
      </li>
    )
  }
}
export default LeftComponent

// Write your code here.

import {Component} from 'react'

import './index.css'

const PlusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png '
const MinusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isActive: false}

  onChangeIcon = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  renderUpdatedImage = () => {
    const {isActive} = this.state
    const latestImage = isActive ? MinusImage : PlusImage
    const altText = isActive ? 'minus' : 'plus'

    return (
      <button type="button" className="Buttons" onClick={this.onChangeIcon}>
        <img src={latestImage} alt={altText} />
      </button>
    )
  }

  renderAnswerText = () => {
    const {isActive} = this.state
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    if (isActive) {
      return (
        <div>
          <hr className="horizantalline" />
          <p>{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails

    return (
      <li className="list-container">
        <div className="quetion-answer-container">
          <h1 className="questiontext">{questionText}</h1>
          {this.renderUpdatedImage()}
        </div>
        <p className="answertext">{this.renderAnswerText()}</p>
      </li>
    )
  }
}

export default FaqItem

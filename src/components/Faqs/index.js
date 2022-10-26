// Write your code here.
import FaqItem from '../FaqItem'

import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="main-bg-container">
      <div className="Faqs-container">
        <h1 className="heading">FAQs</h1>
        <ul>
          {faqsList.map(eachQtn => (
            <FaqItem key={eachQtn.id} faqDetails={eachQtn} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs

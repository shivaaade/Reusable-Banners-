// Write your code here.

import "./index.css"

const Cards = props => {
  const {headerText,description,className} = props
  return (
    <li className={className}>
      <h1>{headerText} </h1>
        <p>{description}</p>
        <button>Show More</button>
    </li>
  )
}

export default Cards
// Write your code here.
const TraineCardContainer = props => {
  const {title, description, imgUrl, className} = props.card

  return (
    <li className={`${className}`}>
      <h1 className="card-heading">{title}</h1>
      <p className="card-description">{description}</p>
      <img className="card-img" src={`${imgUrl}` alt={`${title}`} />
    </li>
  )
}

export default TraineCardContainer

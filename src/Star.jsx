import starFilled from "./images/star-filled.png"
import starEmpty from "./images/star-empty.png"

const Star = ( {toggleFavorite, ...props}) => { //rest argument
console.log(toggleFavorite, props)
const starImage = props.isFavorite? starFilled : starEmpty
 
return (
    <div>
      <div className="info">
        <button
          onClick={toggleFavorite}
          aria-pressed={props.isFavorite} //false or true value
          aria-label={
            props.isFavorite ? "Remove from favorites" : "Add to favorites"
          }
          className="favorite-button"
        >
          <img
            src={starImage}
            alt={props.isFavorite ? "filled start icon" : "empty star icon"}
            className="favorite"
          />
        </button>
        <h2 className="name">
          {props.firstName} {props.lastName}
        </h2>
        <p className="contact">{props.phone}</p>
        <p className="contact">{props.email}</p>
      </div>
    </div>
  );
};

export default Star;

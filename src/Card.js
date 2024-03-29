import { Link } from "react-router-dom";
import { useState } from "react";

const Card = ({ id, brand, model, year, color, image, description, onFavoriteToggle }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
    onFavoriteToggle(id);
  };

  return (
    <div>
      <div className="max-w-md rounded overflow-hidden shadow-lg">
        <h1 className="text-3xl font-bold underline">{brand}</h1>
        <h2>{model}</h2>
        <h3>{year}</h3>
        <h4>{color}</h4>
        <img className="w-48 h-32" src={image} alt={`${brand} ${model}`} onClick={handleFavoriteToggle}/> 
        {/* <button
            className={`text-red-500 ${isFavorite ? 'font-bold' : ''}`}
            onClick={handleFavoriteToggle}
          >
            {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        </button> */}
        <Link to={`/details/${id}`} className="text-blue-500">View Details</Link>
      </div>
    </div>
  );
};

export default Card;

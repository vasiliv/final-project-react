import { Link } from "react-router-dom";

const Card = ({ id, brand, model, year, color, image, description }) => {
  return (
    <div className="card">
      <h1 className="text-3xl font-bold underline">{brand}</h1>
      <h2>{model}</h2>
      <h3>{year}</h3>
      <h4>{color}</h4>
      <img src={image} alt={`${brand} ${model}`} />
      <p>{description}</p>
      <Link to={`/details/${id}`}>View Details</Link>
    </div>
  );
};

export default Card;

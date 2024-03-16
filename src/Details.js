import { useParams } from "react-router-dom";

const Details = ({ carsData }) => {
  const { id } = useParams();
  //console.log(carsData);
  const item = carsData.find((item) => item.id === id);  
  console.log(item);
  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className="details">
      <h1>{item.brand}</h1>
      <h2>{item.model}</h2>
      <h3>{item.year}</h3>
      <h4>{item.color}</h4>
      <p>{item.description}</p>
    </div>
  );
};

export default Details;
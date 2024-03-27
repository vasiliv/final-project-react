import { useParams } from "react-router-dom";

const Details = ({ carsData }) => {
  const { id } = useParams();
  //console.log(carsData);
  const item = carsData.find((item) => item.id == id);  
  //console.log(item);
  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <h1 className="text-2xl font-semibold text-gray-800">{item.brand}</h1>
      <h2 className="text-lg text-gray-600">{item.model}</h2>
      <h3 className="text-md text-gray-500">{item.year}</h3>
      <img src={item.image} alt={`${item.brand} ${item.model}`} className="w-full"/>
      <h4 className="text-md text-gray-700">{item.color}</h4>
      <p className="text-md text-gray-700">{item.description}</p>
    </div>
  );
};

export default Details;
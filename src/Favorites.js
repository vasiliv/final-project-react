
const Favorites = ({ favorites, data }) => {
    //console.log(data);
    //console.log(favorites);
    return (
      <div className="flex flex-wrap justify-center">
        {favorites.map((id) => {
          const favoriteCard = data.find((item) => item.id === id);
          return (
            <div key={id} className="max-w-xs rounded overflow-hidden shadow-lg">
              <img className="w-full" src={favoriteCard.image} alt="Card" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{favoriteCard.brand}</div>
                {/* <p className="text-gray-700 text-base">{favoriteCard.description}</p> */}
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  
  export default Favorites;
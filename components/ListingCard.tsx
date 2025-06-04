import { PropertyProps } from "../constants";

const ListingCard = ({ property }: { property: PropertyProps }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{property.name}</h2>
        <p className="text-sm text-gray-500">{property.address.city}, {property.address.country}</p>
        <p className="text-yellow-500 text-sm">⭐ {property.rating}</p>
        <p className="text-green-600 text-lg font-bold">${property.price}</p>
        <p className="text-sm text-gray-600">{property.category.join(", ")}</p>
        {property.discount && (
          <p className="text-red-600 text-sm">Discount: {property.discount}%</p>
        )}
      </div>
    </div>
  );
};

export default ListingCard;

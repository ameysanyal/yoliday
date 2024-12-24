/* eslint-disable react/prop-types */
const PortfolioCard = ({ title, description, language, author, image }) => {
  return (
    <div className="bg-white w-[700px] shadow-xl p-2 border border-gray-200 rounded-lg flex space-x-4 items-center">
      <img src={image} className="w-64 h-40 rounded-lg" />
      <div className="flex flex-col">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-gray-600 text-sm w-96">{description}</p>
        <p className="text-sm text-gray-500">{language}</p>
        <p className="text-sm">By {author.toUpperCase()}</p>
        <button className="self-end bg-gradient-to-br from-orange-500 to-orange-200 text-white hover:from-orange-500 hover:to-orange-500 px-2 py-1 rounded">
          Add to Cart
        </button>
      </div>

    </div>
  );
};

export default PortfolioCard;

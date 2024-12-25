/* eslint-disable react/prop-types */
const PortfolioCard = ({ title, description, language, author, image }) => {
  return (
    <div className="bg-white max-w-72 lg:max-w-[700px] shadow-xl p-4 border border-gray-200 rounded-lg flex flex-col lg:flex-row lg:space-x-4 items-center lg:items-start">

      {/* image */}
      <img
        src={image}
        alt={title}
        className="w-64 h-32 lg:w-96 lg:h-52 object-cover rounded-lg"
      />

      {/* details */}
      <div className="flex flex-col mt-4 lg:mt-0 w-full lg:w-auto">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-gray-600 text-xs sm:text-sm w-64 lg:w-80 mt-1 sm:mt-2">{description}</p>
        <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">{language}</p>
        <p className="text-xs sm:text-sm mt-1">By {author.toUpperCase()}</p>

        {/* button */}
        <button className="text-base sm:text-lg self-start lg:self-end mt-4 sm:mt-8 bg-gradient-to-br from-orange-500 to-orange-200 text-white hover:from-orange-500 hover:to-orange-500 px-2 py-1 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default PortfolioCard;

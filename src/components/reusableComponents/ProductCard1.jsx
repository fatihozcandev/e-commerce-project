// CardComponent.jsx

const ProductCard1 = ({
  imageUrl,
  title,
  department,
  originalPrice,
  salePrice,
}) => {
  return (
    <div className="max-w-[238px] max-h-[615px] rounded overflow-hidden shadow-lg hover:scale-105">
      <div className="">
        <img className="w-full " src={imageUrl} alt={title} />
      </div>
      <div className="p-6 mb-6 text-center h-1/3">
        <div className="">
          <div className="font-bold text-h5 py-1.5 text-text-color ">
            {title}
          </div>
          <p className="text-h6 font-bold py-1.5 text-second-text-color">
            {department}
          </p>
        </div>
        <div className="text-center">
          <span className="inline-block  py-1.5 text-h5 font-semibold text-muted-color mr-2 ">
            {`$${originalPrice}`}
          </span>
          <span className="inline-block  text-h5 font-semibold text-secondary-color-1 mr-2 ">
            {`$${salePrice}`}
          </span>

          <div className="flex justify-center py-1.5">
            <span className="inline-block text-[70px] leading-4 font-bold text-primary-color ">
              •
            </span>
            <span className="inline-block text-[70px] leading-4 font-bold text-secondary-color-1">
              •
            </span>
            <span className="inline-block  text-[70px] leading-4 font-bold text-alert-color">
              •
            </span>
            <span className="inline-block  text-[70px] leading-4 font-bold text-dark-bg-color">
              •
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard1;

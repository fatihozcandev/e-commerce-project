// CardComponent.jsx

const ProductCard1 = ({
  imageUrl,
  title,
  department,
  originalPrice,
  salePrice,
}) => {
  return (
    <div className=" flex flex-col aspect-[3/5] w-[350px]   sm:max-w-[230px] rounded  shadow-lg hover:scale-105">
      <div className="">
        <img className="object-contain" src={imageUrl} alt={title} />
      </div>
      <div className=" h-1/3 text-center content-center">
        <div className="">
          <div className="font-bold text-h5  text-text-color ">{title}</div>
          <p className="text-h6 font-bold  text-second-text-color">
            {department}
          </p>
        </div>
        <div className="text-center ">
          <span className="inline-block   text-h5 font-semibold text-muted-color mr-2 ">
            {`$${originalPrice}`}
          </span>
          <span className="inline-block  text-h5 font-semibold text-secondary-color-1 mr-2 ">
            {`$${salePrice}`}
          </span>

          <div className="flex justify-center ">
            <span className=" text-[70px] leading-4 font-bold text-primary-color ">
              •
            </span>
            <span className="text-[70px] leading-4 font-bold text-secondary-color-1">
              •
            </span>
            <span className=" text-[70px] leading-4 font-bold text-alert-color">
              •
            </span>
            <span className=" text-[70px] leading-4 font-bold text-dark-bg-color">
              •
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard1;

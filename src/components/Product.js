import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useState } from "react";
const MAX_VALUE = 5;
const MIN_VALUE = 2;

const Product = ({ title, id, image, description, category, price }) => {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_VALUE - MIN_VALUE + 1) + MIN_VALUE)
  );

  const [hasPrime] = useState(Math.random() < 0.5);
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-gray-500  italic">{category}</p>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-4 text-yellow-500" key={i} />
          ))}
      </div>
      <p className="my-3 line-clamp-2 text-xs">{description}</p>
      <p className="mb-5">${price}</p>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
          <p className="text-xs text-gray-500">Free Next-Day Delivery</p>
        </div>
      )}
      <button className="mt-auto button">Add to Cart</button>
    </div>
  );
};

export default Product;

import React from "react";

const ProductCard = (product) => {
  return (
    <div className="rounded-md flex bg-white shadow-md flex-col items-center p-2 w-auto h-full">
      <img
        src={product.product.image}
        className="bg-cover rounded-md w-auto h-[280px]"
      />

      <div className="px-2 text-black mt-5">
        <h1 className="text-xl font-semibold ">
          {product.product.name} {product.product.memory?.RAM}
        </h1>
        <div className="flex gap-2 items-center mt-1">
          <h1 className="text-lg text-red-800 font-medium">
            &#8377;{product.product.price}
          </h1>
          <h1 className="text-xs line-through">
            &#8377;{product.product.actual_price}
          </h1>
          <h1 className="text-xs text-green-800">
            {product.product.dicount}% Off
          </h1>
          <h1 className="text-xs text-green-800">
            {product.product.processor}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

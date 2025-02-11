import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { BiShoppingBag } from "react-icons/bi";
import ReactImageGallery from "react-image-gallery";
import Rater from "react-rater";

const ProductDetailItems = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [count, setCount] = useState(1);

  const PlusButton = () => {
    setCount(count + 1);
  };
  const MinusButton = () => {
    if (count > 0) setCount(count - 1);
  };

  const ProductDetail = {
    images: [
      { original: "https://motocare.co.in/storage/products/1729075597_670f998d56604.png", thumbnail: "https://motocare.co.in/storage/products/1729075597_670f998d56604.png" },
      { original: "https://motocare.co.in/storage/products/1729075692_670f99ece7750.png", thumbnail: "https://motocare.co.in/storage/products/1729075692_670f99ece7750.png" },
      { original: "https://motocare.co.in/storage/products/1729075701_670f99f546c82.png", thumbnail: "https://motocare.co.in/storage/products/1729075701_670f99f546c82.png" },
    ],
    title: "Product Title",
    reviews: "25",
    availability: true,
    brand: "Brand Name",
    category: "Category Name",
    price: "999",
    previousPrice: "1,299",
    description: "This is a sample product description.",
    colors: ["black", "white", "red"],
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <ReactImageGallery
            showBullets={true}
            showThumbnails={true}
            showFullscreenButton={false}
            showPlayButton={false}
            items={ProductDetail.images}
          />
        </div>

        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">
            {ProductDetail.title}
          </h2>
          <div className="flex items-center space-x-2">
            <Rater className="flex" total={5} interactive={true} rating={3.5} />
            <p className="text-gray-600 text-sm">
              ({ProductDetail.reviews} reviews)
            </p>
          </div>
          <p className="text-gray-700">
            Availability:{" "}
            {ProductDetail.availability ? (
              <span className="text-green-600 font-medium">In Stock</span>
            ) : (
              <span className="text-red-600 font-medium">Out of Stock</span>
            )}
          </p>
          <p className="text-gray-700">
            Brand: <span className="font-medium">{ProductDetail.brand}</span>
          </p>
          <p className="text-gray-700">
            Category:{" "}
            <span className="font-medium">{ProductDetail.category}</span>
          </p>
          <p className="text-gray-800 text-xl">
            Rs {ProductDetail.price}{" "}
            <span className="line-through text-gray-500 text-base">
              Rs {ProductDetail.previousPrice}
            </span>
          </p>
          <p className="text-gray-600">{ProductDetail.description}</p>

          <div>
            <p className="text-gray-700 font-medium">Color</p>
            <div className="flex space-x-2 mt-2">
              {ProductDetail.colors.map((color, index) => (
                <div
                  key={index}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === color ? "border-black" : "border-gray-300"
                  } cursor-pointer`}
                  style={{ backgroundColor: color }}
                  onClick={() => handleColorSelect(color)}
                  aria-label={`Select ${color} color`}
                />
              ))}
            </div>
            {selectedColor && (
              <p className="mt-2 text-sm text-gray-600">
                Selected Color: {selectedColor}
              </p>
            )}
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <button
                className="px-4 py-2 border rounded-lg bg-gray-100 hover:bg-gray-200"
                onClick={MinusButton}
              >
                -
              </button>
              <div className="text-gray-800">{count}</div>
              <button
                className="px-4 py-2 border rounded-lg bg-gray-100 hover:bg-gray-200"
                onClick={PlusButton}
              >
                +
              </button>
            </div>
          </div>

          <div className="flex space-x-4">
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 border-none mt-10">
              <BiShoppingBag className="mr-2" /> Add to Cart
            </button>
            <button className="flex items-center px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100 border-none mt-10">
              <CiHeart className="mr-2" /> Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailItems;

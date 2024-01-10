import React, { useEffect } from "react";
import img1 from "../../assets/images/pexels-pixabay-534220.jpg";
import "./style.css";
import { useParams } from "react-router-dom";
import { products } from "../../mock";
import { CiStar } from "react-icons/ci";
function ShowDetails() {
  const { id } = useParams();

  const productsss = products.filter((elm) => elm.id === +id);
  console.log(productsss);
  useEffect(() => window.scrollTo({ top: 0 }), []);
  return (
    <div className="bg-white">
      <div className="pt-6">
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={productsss[0].imageSrc}
              alt={productsss[0].imageAlt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={productsss[0].imageSrc}
                alt={productsss[0].imageAlt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={productsss[0].imageSrc}
                alt={productsss[0].imageAlt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={productsss[0].imageSrc}
              alt={productsss[0].imageAlt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="mx-auto max-w-2xl px-4 pb-6 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {productsss[0].name}
            </h1>
          </div>
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <p className="text-3xl tracking-tight text-gray-900">
              {productsss[0].price}
            </p>
            <div>
              <div>
                <button className="flex gap-1 text-lg mt-4 mb-6 hover:text-sky-700">
                  <CiStar className="text-xl" />
                  wishlist
                </button>
              </div>
              <div className="flex mb-2 mt-2">
                <p>Office phone:</p>
                <p>+2224445557</p>
              </div>
              <hr />
              <div className="flex mb-2 mt-2">
                <p>Mobile phone:</p>
                <p>+2224445557</p>
              </div>
              <hr />
              <div className="flex mb-2 mt-2">
                <p>Email:</p>
                <p>steveparker@example.com</p>
              </div>
              <hr />
            </div>
          </div>
          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-6 lg:pr-8 lg:pt-6">
            <div>
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6">
                <p className="text-base text-gray-900">
                  {productsss[0].description}
                </p>
              </div>
            </div>
            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
              <div className="mt-4">
                <ul className="list-disc space-y-2 pl-4 text-sm">
                  {productsss[0].highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>
              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{productsss[0].details}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-6 max-w-7xl">
          <div className="flex mb-10">
            <div className="show-details-box">
              <h2 className="text-2xl mb-3 font-medium">Property Details</h2>
              <div className="flex mb-2 mt-2">
                <p>Size:</p>
                <p className="font-medium">
                  125m<sup>2</sup>
                </p>
              </div>
              <hr />
              <div className="flex mb-2 mt-2">
                <p>Bedrooms:</p>
                <p className="font-medium">2</p>
              </div>
              <hr />
              <div className="flex mb-2 mt-2">
                <p>Bathrooms:</p>
                <p className="font-medium">2</p>
              </div>
              <hr />
              <div className="flex mb-2 mt-2">
                <p>Floor:</p>
                <p className="font-medium">Ground</p>
              </div>
              <hr />
              <div className="flex mb-2 mt-2">
                <p>Additional Space:</p>
                <p className="font-medium">Basement</p>
              </div>
            </div>
            <div className="show-details-box">
              <div className="flex mb-2 mt-2">
                <p>Furnishing:</p>
                <p className="font-medium">Semi Furnished</p>
              </div>
              <hr />
              <div className="flex mb-2 mt-2">
                <p>Celling Height:</p>
                <p className="font-medium">3m</p>
              </div>
              <hr />
              <div className="flex mb-2 mt-2">
                <p>Construnction Year:</p>
                <p className="font-medium">2012</p>
              </div>
              <hr />
              <div className="flex mb-2 mt-2">
                <p>Renovation:</p>
                <p className="font-medium">2020</p>
              </div>
            </div>
          </div>
          <div className="flex mb-10">
            <div className="show-details-box">
              <h2 className="text-2xl mb-3 font-medium">Property Utility</h2>
              <div className="flex mb-2 mt-2">
                <p>Heating:</p>
                <p className="font-medium">Natural Gas</p>
              </div>
              <hr />
              <div className="flex mb-2 mt-2">
                <p>Air Condition</p>
                <p className="font-medium">Yes</p>
              </div>
              <hr />
              <div className="flex mb-2 mt-2">
                <p>Fire Place:</p>
                <p className="font-medium">-</p>
              </div>
              <hr />
              <div className="flex mb-2 mt-2">
                <p>Elevator:</p>
                <p className="font-medium">-</p>
              </div>
              <hr />
              <div className="flex mb-2 mt-2">
                <p>Ventilation:</p>
                <p className="font-medium">Yes</p>
              </div>
            </div>
            <div className="show-details-box">
              <div className="flex mb-2 mt-2">
                <p>Intercom:</p>
                <p className="font-medium">Yes</p>
              </div>
              <hr />
              <div className="flex mb-2 mt-2">
                <p>Window Type:</p>
                <p className="font-medium">Aluminum Frame</p>
              </div>
              <hr />
              <div className="flex mb-2 mt-2">
                <p>Cable TV:</p>
                <p className="font-medium">-</p>
              </div>
              <hr />
              <div className="flex mb-2 mt-2">
                <p>Wifi:</p>
                <p className="font-medium">-</p>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div className="mx-auto mt-6 max-w-7xl">
          <h2 className="text-2xl mb-3 font-medium">Floor photos</h2>
          <div className="h-full">
            <img src={img1} className="w-full" alt="floor-img " />
          </div>
        </div>
        <div className="mx-auto mt-6 max-w-7xl">
          <hr />
          <h2 className="text-3xl mt-5 mb-3 font-medium">Location</h2>
          <div className="flex">
            <p>1215 E 17th St, Brooklyn, NY 11230, USA Brooklyn New York</p>
            <button className="show-details-btn">Show on Map</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowDetails;

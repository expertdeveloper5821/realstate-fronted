import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/button/Button'
import { products } from '../mock'

function Properties() {
  return (
    <>
       <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
      {products.slice(0, 10).map((product) => (
        <Link
          key={product.id}
          to={{ pathname: `/product/${product.id}`, state: { product } }}
          className="group relative"
        >
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-5 xl:aspect-w-7">
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
            <div className="overlay-icons opacity-0 group-hover:opacity-100">
              <p className="icon">Sell</p>
            </div>
          </div>
          <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">
            {product.price}
          </p>
        </Link>
      ))}
    </div>
        </div>
        <div className="btn-div">
          <Button type="text" text="Show more Properties" className="btn-list" />
        </div>
      </div>
    </>
  )
}

export default Properties

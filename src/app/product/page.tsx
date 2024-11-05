import getData from "@/services/products";
import Link from "next/link";
import React from "react";

// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const ProductPage = async () => {
  // props: { params: { slug: string } }
  // const { params } = props;
  const data = await getData("http://localhost:3000/api/product").then(
    async (data) => {
      // await delay(2000);
      return data.data;
    }
  );
  console.log(data);
  return (
    <div className="grid grid-cols-4 gap-4 mt-5 place-items-center">
      {/* <h1>{params.slug}</h1> */}
      {data.length > 0 &&
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data.map((item: any) => (
          <Link
            href={`/product/detail/${item.id}`}
            key={item.id}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-2"
          >
            <img
              className="p-8 rounded-t-lg object-cover h-96 w-full"
              src={item.image}
              alt="product image"
            />
            <div className="px-5 pb-5">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">
                {item.name}
              </h5>

              <div className="flex items-center justify-between mt-3">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  $ {item.price}
                </span>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </Link>
        ))}
      <div>DetailProductPage</div>
    </div>
  );
};

export default ProductPage;

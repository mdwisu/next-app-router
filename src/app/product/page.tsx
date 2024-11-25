/* eslint-disable @typescript-eslint/no-explicit-any */
// import getData from "@/services/products";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useSWR from "swr";

// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const fetcher = (url: any) => fetch(url).then((res) => res.json());

const ProductPage = () => {
  // props: { params: { slug: string } }
  // const { params } = props;

  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/api/product`,
    fetcher
  );

  // Menangani error
  if (error) return <div>Failed to load</div>;
  // Menangani loading state
  if (!data) return <div>Loading...</div>;
  // const data = await getData(
  //   `${process.env.NEXT_PUBLIC_API_URL}/api/product`
  // ).then(async (data) => {
  //   // await delay(2000);
  //   return data.data;
  // });
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
            <Image
              className="p-8 rounded-t-lg object-cover h-96 w-full"
              src={item.image}
              alt="product image"
              width={500}
              height={500}
              // loading="lazy"
              priority
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

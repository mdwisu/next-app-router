"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
// import getData from "@/services/products";
import Image from "next/image";
import React from "react";
import useSWR from "swr";

const fetcher = (url: any) => fetch(url).then((res) => res.json());

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function DetailProductPage(props: any) {
  const { params } = props;
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/api/product?id=${params.id}`,
    fetcher
  );
  // Menangani error
  if (error) return <div>Failed to load</div>;
  // Menangani loading state
  if (!data) return <div>Loading...</div>;

  const products = data.data;

  // const data = await getData(
  //   `${process.env.NEXT_PUBLIC_API_URL}/api/product?id=${params.id}`
  // ).then((data) => data.data);
  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-gray-700">
        <Image
          width={500}
          height={500}
          src={products.image}
          alt=""
          className="w-full object-cover aspect-square col-span-2"
        />
        <div className="bg-white p-4 px-6">
          <h3>{products.name}</h3>
          <p>Price : $ {products.price}</p>
        </div>
      </div>
    </div>
  );
}

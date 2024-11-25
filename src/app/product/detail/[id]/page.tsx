import getData from "@/services/products";
import Image from "next/image";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function DetailProductPage(props: any) {
  const { params } = props;
  const data = await getData(
    `${process.env.NEXT_PUBLIC_API_URL}/api/product?id=${params.id}`
  ).then((data) => data.data);
  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-gray-700">
        <Image
          width={500}
          height={500}
          src={data.image}
          alt=""
          className="w-full object-cover aspect-square col-span-2"
        />
        <div className="bg-white p-4 px-6">
          <h3>{data.name}</h3>
          <p>Price : $ {data.price}</p>
        </div>
      </div>
    </div>
  );
}

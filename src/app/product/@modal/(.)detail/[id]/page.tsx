"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
// import getData from "@/services/products";
import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";
import useSWR from "swr";

const fetcher = (url: any) => fetch(url).then((res) => res.json());

const Modal = dynamic(() => import("@/components/core/Modal"));
export default function DetailProductPage(props: any) {
  const { params } = props;

  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/api/product?id=${params.id}`,
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const products = data.data;

  // const data = await getData(
  //   `${process.env.NEXT_PUBLIC_API_URL}/api/product?id=${params.id}`
  // ).then((data) => data.data);
  return (
    <Modal>
      <Image
        src={products.image}
        alt="product"
        className="w-full object-cover aspect-square col-span-2"
        width={500}
        height={500}
      />
      <div className="bg-white p-4 px-6">
        <h3>{products.title}</h3>
        <p>Price : $ {products.price}</p>
      </div>
    </Modal>
  );
}

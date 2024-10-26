import Modal from "@/components/core/Modal";
import getData from "@/services/products";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function DetailProductPage(props: any) {
  const { params } = props;
  const data = await getData(
    "http://localhost:3000/api/product?id=" + params.id
  ).then((data) => data.data);
  return (
    <Modal>
      <img
        src={data.image}
        alt=""
        className="w-full object-cover aspect-square col-span-2"
      />
      <div className="bg-white p-4 px-6">
        <h3>{data.title}</h3>
        <p>Price : $ {data.price}</p>
      </div>
    </Modal>
  );
}

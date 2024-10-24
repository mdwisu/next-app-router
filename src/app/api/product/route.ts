import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "Product 1",
    price: "100000",
    image:
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.5/h_363,c_limit/c5ca0af0-0c3f-4974-834f-ac9b111565e5/v2k-run-shoes-4P7Wl1.png",
  },
  {
    id: 2,
    title: "Product 2",
    price: "200000",
    image:
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.5/h_363,c_limit/87109660-6b0e-441b-b93a-c6a8c6988bc9/p-6000-shoes-1KwsZ1.png",
  },
  {
    id: 2,
    title: "Product 3",
    price: "300000",
    image:
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.5/h_363,c_limit/7c8c54b9-cfab-4591-a56b-d6909a54904b/air-max-excee-shoes-DhKz9D.png",
  },
  {
    id: 2,
    title: "Product 4",
    price: "400000",
    image:
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.5/h_363,c_limit/144d0759-690b-42d5-a9c7-9bc9f36e819e/air-force-1-07-wb-shoe-j46FxX.png",
  },
];
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    const product = data.find((item) => item.id === Number(id));
    return NextResponse.json({
      status: 200,
      message: "success",
      data: product,
    });
  }

  return NextResponse.json({ status: 200, message: "success", data });
}

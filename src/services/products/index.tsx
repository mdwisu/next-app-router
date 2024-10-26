async function getData(url: string) {
  // fakestoreapi
  // const res = await fetch("https://fakestoreapi.com/productss", {
  //   cache: "no-store",
  // });
  // local
  const res = await fetch(url, {
    cache: "no-store",
    next: {
      // revalidate: 30,
      tags: ["product"],
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default getData;

import data from "@/app/components/products/data";
import Image from "next/image";
import Link from "next/link";

export default function ProductDetails({
  params,
}: {
  params: { _id: string };
}) {
  const product = data.products.find((product) => product._id === params._id);
  if (!product) {
    return <p>Product not found</p>;
  }
  return (
    <>
      <div className="my-2">
        <Link href="/">back to products</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <div>
          <ul className="space-y-4">
            <li className="text-xl">{product.name}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

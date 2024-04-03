import data from "@/app/components/products/data";
import Image from "next/image";
import Link from "next/link";

export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  console.log("Received params:", params);
  const product = data.products.find(
    (product) => product.id === params.productId
  );
  if (!product) {
    return (
      <>
        <div className="my-2 flex justify-center flex-col">
          <Link href="/">back to products</Link>
          <div className="text-center">Product not found</div>
        </div>
      </>
    );
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
            <li className="text-xl">
              {product.rating} of {product.numReviews} reviews
            </li>
            <li className="text-xl">{product.brand}</li>
            <li className="devider"></li>
            <li className="text-xl">
              {" "}
              Description:<p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div>
          <div className="card bg-base-300 shadow-xl">
            <div className="card-body">
              <div className="mb-2 flex justify-between">
                <div>Price</div>
                <div>${product.price}</div>
              </div>
              <div className="mb-2 flex justify-between">
                <div>Status</div>
                <div>
                  {product.countInStock > 0 ? "In Stock" : "Unavailable"}
                </div>
              </div>
              <div className="card-actions justify-center">
                <button className="btn btn-primary w-full" type="button">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

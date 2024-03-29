import Image from "next/image";
import Link from "next/link";
import { Product } from "@/app/lib/products/ProductsModel";

function ProductItem({ product }: { product: Product }) {
  return (
    <div className="card bg-base-300 shadow-xl mb-4">
      <figure className="flex flex-col">
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className="object-cover w-full h-64"
          />
        </Link>

        <div className="card-body">
          <Link href={`/product/${product._id}`}>
            <h2 className="card-title font-normal">{product.name}</h2>
          </Link>
          <p className="mb-2">{product.brand}</p>
          <div className="card-actions justify-between flex items-center">
            <span className="text-2xl">{product.price}</span>
          </div>
        </div>
      </figure>
    </div>
  );
}

export default ProductItem;

import ProductItem from "../components/products/ProductItem";
import data from "../components/products/data";

export default function Home() {
  return (
    <main className="text-2xl py-2">
      <div>Latest Products</div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((product) => (
          <ProductItem
            key={product._id} // Changed from "product.id" to "product._id"
            product={product}
          />
        ))}
      </div>
    </main>
  );
}

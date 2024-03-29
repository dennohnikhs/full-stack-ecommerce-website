export type Product = {
  _id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  rating: number;
  banner?: string;
  numReviews: number;
  countInStock: number;
  brand: string;
  colors: string[];
  size?: string[];
  slug?: string;
};

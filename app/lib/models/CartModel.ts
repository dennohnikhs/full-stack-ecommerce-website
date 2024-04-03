import { OrderItem } from "./OrderModel";

export type CartInterface = {
  items: OrderItem[];
  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
};

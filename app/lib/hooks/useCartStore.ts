import { create } from "zustand";
import { roundTo2Decimal } from "../utils";
import { CartInterface } from "../models/CartModel";
import { OrderItem } from "../models/OrderModel";

const initialState: CartInterface = {
  items: [],
  itemsPrice: 0,
  taxPrice: 0,
  shippingPrice: 0,
  totalPrice: 0,
};

// Use create to create a hook-based store
export const useCartService = create<CartInterface>((set) => ({
  ...initialState,
  increase: (item: OrderItem) => {
    set((state) => {
      const exist = state.items.find((i) => i.id === item.id);
      const updatedCartItems = exist
        ? state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.qty + 1 } : i
          )
        : [...state.items, { ...item, qty: 1 }];
      const { itemsPrice, shippingPrice, taxPrice, totalPrice } =
        calcPrice(updatedCartItems);
      return {
        items: updatedCartItems,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
      };
      
    });
  },
}));

const calcPrice = (items: OrderItem[]) => {
  const itemsPrice = roundTo2Decimal(
      items.reduce((acc, item) => acc + item.price * item.qty, 0)
    ),
    shippingPrice = roundTo2Decimal(itemsPrice > 100 ? 0 : 100),
    taxPrice = roundTo2Decimal(Number(0.15 * itemsPrice)),
    totalPrice = roundTo2Decimal(itemsPrice + shippingPrice + taxPrice);
  return {
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
  };
};

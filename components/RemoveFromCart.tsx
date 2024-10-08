"use client";

import { useCartStore } from "@/store";
// import { Product } from "@/typings/productTypings";
import { Button } from "./ui/button";
import { Product } from "@/typings/productTypng";

function RemoveFromCart({ product }: { product: Product }) {
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const handleRemove = () => {
    console.log("Remove from cart", product.meta.sku);
    removeFromCart(product); // Ensure removeFromCart receives the product
  };

  return (
    <Button className="bg-walmart hover:bg-walmart/50" onClick={handleRemove}>
      -
    </Button>
  );
}

export default RemoveFromCart;
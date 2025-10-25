import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import toast from "react-hot-toast";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.title} added to cart`);
  };

  return (
    <Card className="w-full max-w-sm shadow-md hover:shadow-xl transition-shadow rounded-2xl overflow-hidden">
      <CardHeader className="p-0">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-60 object-cover"
          loading="lazy"
        />
      </CardHeader>

      <CardContent className="p-4">
        <CardTitle className="text-lg font-semibold truncate">
          {product.title}
        </CardTitle>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">
          {product.description}
        </p>
        <p className="text-xl font-bold mt-3">${product.price}</p>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer"
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}

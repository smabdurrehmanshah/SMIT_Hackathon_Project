import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";

function Header() {
  const { cartCount } = useCart();
  return (
    <div className="flex justify-between px-8 py-4 shadow items-center cursor-pointer">
      <NavLink to="/">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Digital Store</h1>
      </NavLink>

      <div className="flex gap-6 items-center">
        <ul className="flex gap-4">
          <NavLink to="/"><li>Home</li></NavLink>
          <NavLink to="/checkout"><li>Checkout</li></NavLink>
        </ul>
        <NavLink to={"/cart"}>
          <div className="relative inline-block">
            <ShoppingCart size={28} className="text-gray-800" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;

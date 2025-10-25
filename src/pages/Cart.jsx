import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cartItems, increaseQty, decreaseQty, removeFromCart } = useCart();

  // Calculate total price
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const navigate = useNavigate();

  return (
    <div className="w-[90vw] mx-auto my-10">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-lg">Your cart is empty 🛒</p>
      ) : (
        <>
          {/* Cart Items */}
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center justify-between bg-white shadow-md p-5 rounded-xl border border-gray-100"
              >
                {/* Product Info */}
                <div className="flex items-center gap-4 flex-1 w-full sm:w-auto">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-lg border"
                  />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h2>
                    <p className="text-gray-600">
                      Price: ${item.price.toFixed(2)}
                    </p>
                    <p className="text-gray-700 font-medium">
                      Subtotal: ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-5 mt-4 sm:mt-0 sm:ml-auto">
                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-2 py-1">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="text-lg font-medium w-6 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center mt-10 gap-4">
            <h2 className="text-2xl font-semibold">
              Total: <span className="text-blue-600">${total.toFixed(2)}</span>
            </h2>

            <button
              onClick={() => navigate("/checkout")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg w-full sm:w-auto cursor-pointer"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

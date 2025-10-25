import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    const { name, email, address, city, postalCode, country } = formData;
    if (!name || !email || !address || !city || !postalCode || !country) {
      setError("⚠️ Please fill all the fields before placing your order.");
      setSuccess("");
      return;
    }

    // If validation passes
    setError("");
    setSuccess("✅ Order placed successfully!");
    clearCart(); // Clear the cart from context
    localStorage.removeItem("cart"); // Clear from localStorage as well

    // Optionally, reset form fields
    setFormData({
      name: "",
      email: "",
      address: "",
      city: "",
      postalCode: "",
      country: "",
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* --- Left: Billing Form --- */}
        <div className="bg-white shadow-md p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Billing Details</h2>

          <form onSubmit={handlePlaceOrder} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />

            <input
              type="text"
              name="address"
              placeholder="Street Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
              />
              <input
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                value={formData.postalCode}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
              />
            </div>

            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />

            {error && <p className="text-red-600 text-sm">{error}</p>}
            {success && <p className="text-green-600 text-sm">{success}</p>}

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg mt-4 transition"
            >
              Place Order
            </button>
          </form>
        </div>

        {/* --- Right: Order Summary --- */}
        <div className="bg-gray-50 shadow-md p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Your Order</h2>

          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded-lg border"
                    />
                    <div>
                      <h3 className="font-medium text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {item.quantity} × ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <p className="font-semibold">
                    ${(item.quantity * item.price).toFixed(2)}
                  </p>
                </div>
              ))}

              <div className="flex justify-between mt-4 text-lg font-semibold">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

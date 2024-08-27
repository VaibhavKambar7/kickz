"use client";

import React, { useEffect, useMemo, useState } from "react";
import Wrapper from "../components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import CartItem from "../components/CartItem";
import { useSession } from "next-auth/react";
import Spinner from "../components/Spinner";
import { useCart } from "../context/cartProvider";
import { useRouter } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";

const Cart: React.FC = () => {
  const { data: session } = useSession();
  const { cartItems, setCartItems } = useCart() ?? {
    cartItems: [],
    setCartItems: () => {},
  };
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  const apiURL = process.env.NEXT_PUBLIC_API_URL;

  const handleCheckout = async () => {
    const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
    if (!stripePublishableKey) {
      console.error("Stripe publishable key is not defined.");
      return;
    }

    try {
      const stripe = await loadStripe(stripePublishableKey);

      const body = {
        products: cartItems,
      };

      const headers = { "Content-Type": "application/json" };

      const response = await fetch(
        `${apiURL}/api/payment/create-checkout-session`,
        { method: "POST", headers: headers, body: JSON.stringify(body) }
      );

      const sessionData = await response.json();

      if (!sessionData.sessionId) {
        throw new Error("Session ID not found in response");
      }

      if (stripe) {
        const result = await stripe.redirectToCheckout({
          sessionId: sessionData.sessionId,
        });

        if (result.error) {
          console.log(result.error);
        }
      }
    } catch (error) {
      console.error("Error handling checkout:", error);
    }
  };

  const subtotal = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  }, [cartItems]);

  useEffect(() => {
    if (!session) {
      router.replace("/");
    }
  }, [session]);

  useEffect(() => {
    const userEmail = session?.user?.email;

    const fetchCartItems = () => {
      try {
        if (userEmail) {
          fetch(`${apiURL}/api/cart/getCartItemsForUser`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ userEmail: userEmail }),
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error("Failed to fetch cart items");
              }
              return response.json();
            })
            .then((data) => {
              setCartItems(data);
              setLoading(false);
            })
            .catch((error) => {
              console.error("Error fetching cart items:", error);
              setLoading(false);
            });
        }
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, [session]);

  const removeFromCart = async (id: any) => {
    try {
      const response = await fetch(`${apiURL}/api/cart/deleteCartItem`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      if (!response.ok) {
        throw new Error("Failed to delete cart item");
      }
      setCartItems(cartItems.filter((item: any) => item.id !== id));
    } catch (error) {
      console.error("Error deleting cart item:", error);
    }
  };

  return (
    <div className="w-full md:py-[80px]">
      <Wrapper>
        {loading && <Spinner />}
        {!loading && cartItems.length > 0 && (
          <>
            <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
              <div className="text-[20px] md:text-[25px] mb-5 font-semibold leading-tight">
                Shopping Cart
              </div>
            </div>

            <div className="flex flex-col lg:flex-row py-10 md:ml-[50px]">
              <div className="flex-[2]">
                <div className="text-lg font-bold mb-4">Cart Items</div>
                <div className="space-y-4">
                  {cartItems &&
                    cartItems.map((item: any) => (
                      <div key={item.id}>
                        <CartItem
                          key={item.id}
                          data={item}
                          removeFromCart={removeFromCart}
                        />
                      </div>
                    ))}
                </div>
              </div>

              <div className="flex-[1] ml-0 md:ml-16">
                <div className="text-lg font-bold mb-4">Summary</div>

                <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                  <div className="flex justify-between mb-4">
                    <div className="uppercase text-md md:text-lg font-medium text-black">
                      Subtotal
                    </div>
                    <div className="text-md md:text-lg font-medium text-black">
                      MRP: &#8377;
                      {subtotal}
                    </div>
                  </div>
                  <div className="text-sm md:text-md border-t pt-4">
                    The subtotal reflects the total price of your order,
                    including duties and taxes, before any applicable discounts.
                    It does not include delivery costs and international
                    transaction fees.
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
                >
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}

        {!loading && cartItems.length < 1 && (
          <>
            <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
              <Image
                src="/empty-cart.jpg"
                alt="/empty-cart.jpg"
                width={300}
                height={300}
                className="w-[300px] md:w-[400px] mb-4"
              />
              <span className="text-xl font-bold">Your cart is empty</span>
              <span className="text-center mt-4">
                Looks like you have not added anything in your cart.
                <br />
                Go ahead and explore top categories.
              </span>
              <Link
                href="/"
                className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
              >
                Continue Shopping
              </Link>
            </div>
          </>
        )}
      </Wrapper>
    </div>
  );
};

export default Cart;

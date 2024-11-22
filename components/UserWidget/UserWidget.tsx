"use client";
import { cartContext } from "@/contexts/cartContext";
import { UserContext } from "@/contexts/userContext";
import Link from "next/link";
import { useContext } from "react";

const UserWidget = () => {
  const { isLogged, user, logout } = useContext(UserContext);
  const { cart } = useContext(cartContext);
  return (
    <div>
      {isLogged() ? (
        <div className="h-full flex items-center gap-2">
          <Link href="/dashboard" className="text-xs">
            {user?.user.email}
          </Link>
          <Link href="/cart" className="text-xs">
            {`CART${cart.length > 0 ? " (" + cart.length + ")" : ""}`}
          </Link>
          <button onClick={logout} className="text-xs">
            LOGOUT
          </button>
        </div>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </div>
  );
};

export default UserWidget;

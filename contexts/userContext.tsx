"use client";
import { Order } from "@/interfaces/orders";
import { User } from "@/interfaces/user";
import { createContext, useContext, useEffect, useState } from "react";
import { cartContext } from "./cartContext";
// Crear interfaces
interface UserContextProps {
  user: User | null;
  setUser: (user: User | null) => void;
  isLogged: () => boolean;
  updateOrders: (order: Order) => void;
  logout: () => void;
}

// Crear contexto
export const UserContext = createContext<UserContextProps>({
  user: null,
  setUser: () => {},
  isLogged: () => false,
  updateOrders: () => {},
  logout: () => {},
});

// Crear provider
const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { clearCart } = useContext(cartContext);
  // Dentro del provider generar estados, funciones, codigo
  // El User
  const [user, setUser] = useState<User | null>(null);
  // Las Orders

  // Dentro del provider generar useEffects que sincronicen estados y localStorage
  // user cambia en el login, en ese punto, actualizamos el localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  // Luego, en cada render, traemos el user del localStorage hacia user para sincronizarlo y persistir
  useEffect(() => {
    // Chequear que esto se ejecute siempre en el cliente
    const localUser = localStorage.getItem("user");
    setUser(localUser ? JSON.parse(localUser) : null);
  }, []);

  const isLogged = () => {
    return user !== null;
  };

  const updateOrders = (order: Order) => {
    const newUser = user;
    newUser?.user.orders.push({
      id: order.id,
      status: order.status,
      date: order.date,
    });
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    clearCart();
  };

  // Retornar dentro del provider todo lo que quiera compartir
  return (
    <UserContext.Provider
      value={{ user, setUser, isLogged, updateOrders, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

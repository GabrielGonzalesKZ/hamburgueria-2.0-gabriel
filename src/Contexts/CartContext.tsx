import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { iCartContext, iDefaultProviderProps, iProduct } from "./@types";
import { AuthContext } from "./AuthContext";

export const CartContext = createContext({} as iCartContext);

export const CartProvider = ({ children }: iDefaultProviderProps) => {
  const { setSearch, listProducts, search } = useContext(AuthContext);
  const [cartList, setCartList] = useState([] as iProduct[]);

  const navigate = useNavigate();

  const addCart = (product: iProduct) => {
    if (!cartList.some((item) => item.id === product.id)) {
      setCartList([...cartList, product]);
      toast.success("Adicionado com sucesso!");
    } else {
      toast.error("Produto já adicionado!");
    }
  };

  const searchProduct = ({ target }: any) => {
    if (!target.value) {
      setSearch(listProducts);
      return;
    }
    const filterProduct = search.filter(({ name }) =>
      name.toLowerCase().includes(target.value.toLowerCase())
    );
    setSearch(filterProduct);
  };


  const removeToken = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@CART_LIST");
    setCartList([]);
    toast.success("Você foi deslogado!");
    navigate("/login");
  };

  return (
    <CartContext.Provider
      value={{ addCart, removeToken, cartList, setCartList, searchProduct }}
    >
      {children}
    </CartContext.Provider>
  );
};

import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { iAuthContext, iDefaultProviderProps, iProduct, iUser } from "./@types";

export const AuthContext = createContext({} as iAuthContext);

export const AuthProvider = ({ children }: iDefaultProviderProps) => {
  const [loading, setLoading] = useState<true | false>(true);
  const [showModal, setShowModal] = useState<true | false>(false);
  const [listProducts, setListProducts] = useState([] as iProduct[]);
  const [search, setSearch] = useState([] as iProduct[]);
  const [user, setUser] = useState<any>(null);
  

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@TOKEN");

      if (!token) {
        setLoading(false);
      }

      try {
        const { data } = await api.get<iProduct[]>("products", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setUser(data)
        setListProducts(data);
        setSearch(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

    const loadUserProducts = async () => {
      const token = localStorage.getItem("@TOKEN");
      try {
        const { data } = await api.get<iProduct[]>("products", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setListProducts(data);
        setSearch(data);
      } catch (error) {
        console.error(error);
      } 
    };

    loadUserProducts();


  return (
    <AuthContext.Provider
      value={{
        loading,
        setLoading,
        showModal,
        setShowModal,
        listProducts,
        setListProducts,
        search,
        setSearch,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

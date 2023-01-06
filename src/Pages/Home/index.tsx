import { useContext } from "react";
import { Header } from "../../Components/Header/header";
import { Main } from "../../Components/Main/main";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { Cart } from "../../Components/Cart/cart";

export const Home = () => {
  //
  const { loading, user } = useContext(AuthContext)

  if (loading) {
    return null;
  }

  return user ? (
    <>
      <div className="App">
        <Header />
        <Main />
        <Cart />
      </div>
    </>
  ) : (
    <Navigate to="/login" />
  );
};

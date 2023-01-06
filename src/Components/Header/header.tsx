import Logo from "../../assets/img/logo.png";
import Cart from "../../assets/img/shopping-cart.svg";
import Logout from "../../assets/img/log-out.svg";
import Search from "../../assets/img/search.svg";
import { StyledHeader } from "./style";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { CartContext } from "../../Contexts/CartContext";

export const Header = () => {
  const { setShowModal } = useContext(AuthContext);
  const { searchProduct, removeToken, cartList } = useContext(CartContext)

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <StyledHeader>
      <div className="container header">
        <img src={Logo} alt="logo" />
        <div>
          <input onChange={searchProduct} type="text" placeholder="Digitar Pesquisa" />
          <div className="divSearch">
            <img className="search" src={Search} alt="pesquisa" />
          </div>
          <div className="divCart">
            <img onClick={openModal} className="cart" src={Cart} alt="Carrinho" />
            <p className="itens">{cartList.length}</p>
          </div>
          <div className="divLogout">
            <img onClick={removeToken} className="logout" src={Logout} alt="Deslogar" />
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

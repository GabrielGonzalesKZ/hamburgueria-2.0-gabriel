import { StyledCart } from "./style";
import { useContext  } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { toast } from "react-toastify";
import { CartContext } from "../../Contexts/CartContext";

export const Cart = () => {
  const { showModal, setShowModal } = useContext(AuthContext);
  const { cartList, setCartList } = useContext(CartContext)
  const filterPrice = cartList.map((item) => item.price);
  const totalPrice = filterPrice.reduce((item, sun) => item + sun, 0);

  const removeCart = (productId: number) => {
    const newList = cartList.filter((product) => product.id !== productId);
    setCartList(newList);
    toast.info("Produto removido.");
  };

  const removeAllCart = () => {
    setCartList([]);
    toast.info("Todos produtos removidos.");
  };

  const closeModal = () => {
    setShowModal(false);
  };

  if (!showModal) {
    return null;
  }

  return (
    <StyledCart>
      <div className="title">
        <p>Carrinho de Compras</p>
        <span onClick={closeModal}>X</span>
      </div>
      {cartList.length ? (
        <>
          <ul>
            {cartList.map((product) => (
              <li key={product.id} className="card">
                <div className="item">
                  <figure>
                    <img src={product.img} alt="" />
                  </figure>
                  <div className="text">
                    <p>{product.name}</p>
                    <span>{product.category}</span>
                  </div>
                </div>
                <div>
                  <button className="remove" onClick={() => removeCart(product.id)}>Remover</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="total">
            <div className="sum">
              <p>Total</p>
              <span>R$ {totalPrice.toFixed(2).replace(".", ",")}</span>
            </div>
            <div className="btn">
              <button onClick={removeAllCart}>Remover todos</button>
            </div>
          </div>
        </>
      ) : (
        <li className="empty">
          <p>Sua sacola está vazia</p>
          <span>Adicione itens</span>
        </li>
      )}
    </StyledCart>
  );
};

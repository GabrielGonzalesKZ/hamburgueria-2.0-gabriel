import { useContext } from "react";
import { iProduct } from "../../Contexts/@types";
import { AuthContext } from "../../Contexts/AuthContext";
import { CartContext } from "../../Contexts/CartContext";
import { StyledProductsList } from "./style";

export const ProductsList = () => {
  const { addCart } = useContext(CartContext);
  const { search } = useContext(AuthContext);
  return (
    <>
      {search.map((product: iProduct) => (
        <StyledProductsList key={product.id}>
          <figure>
            <img src={product.img} alt={product.name} />
          </figure>
          <div>
            <p className="title">{product.name}</p>
            <p className="subtitle">{product.category}</p>
            <p className="price">
              R$ {product.price.toFixed(2).replace(".", ",")}
            </p>
            <button onClick={() => addCart(product)}>Adicionar</button>
          </div>
        </StyledProductsList>
      ))}
    </>
  );
};

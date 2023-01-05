import { GlobalStyle } from "./Styles/global";
import { RoutesMain } from "./routes";
import { AuthProvider } from "./Contexts/AuthContext";
import { UserProvider } from "./Contexts/UserContext";
import { CartProvider } from "./Contexts/CartContext";

function App() {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <UserProvider>
          <CartProvider>
            <RoutesMain />
          </CartProvider>
        </UserProvider>
      </AuthProvider>
    </>
  );
}

export default App;

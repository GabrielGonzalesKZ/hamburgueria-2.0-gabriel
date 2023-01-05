import { createContext, useContext } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { iDefaultProviderProps, iUserContext, iUserLogin, iUserLoginResponse, iUserRegister, iUserRegisterResponse } from "./@types";
import { AuthContext } from "./AuthContext";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iDefaultProviderProps) => {
  const {setUser, user} = useContext(AuthContext)
  const navigate = useNavigate();

  const login = async (data: iUserLogin) => {
    try {
      const response = await api.post<iUserLoginResponse>("login", data);

      const { accessToken, user: userResponse } = response.data;

      setUser(userResponse);
      localStorage.setItem("@TOKEN", accessToken);
      toast.success("Logado com sucesso!");
      navigate("/home");
    } catch (error) {
      console.error(error);
      toast.error("Email ou senha inválidos!");
    }
  };

  const registerUser = async (data: iUserRegister) => {
    try {
      const response = await api.post<iUserRegisterResponse>("users", data);
      const { accessToken, user: userResponse } = response.data;

      setUser(userResponse);
      toast.success("Cadastrado com sucesso!");
      localStorage.setItem("@TOKEN", accessToken);
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserContext.Provider value={{ login, registerUser }}>
      {children}
    </UserContext.Provider>
  );
};

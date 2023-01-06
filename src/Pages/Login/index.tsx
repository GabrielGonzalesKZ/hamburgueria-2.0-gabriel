import { StyledLogin } from "./styled";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../Components/Schemas/LoginSchema";
import { UserContext } from "../../Contexts/UserContext";
import LoginImg from "../../assets/img/LogoImg.png"



export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });
  const { login } = useContext(UserContext);
  const token = localStorage.getItem("@TOKEN");

  if (token) {
    return <Navigate to="/home" />;
  }

  return (
    <StyledLogin className="animate__animated animate__fadeInDown">
      <div>
        <h4>Login</h4>
        <form onSubmit={handleSubmit(login)} noValidate>
          <input
            id="name"
            type="text"
            placeholder="Insira seu email."
            {...register("email")}
          />
          {errors.email?.message && (
            <p className="error">{errors.email.message}</p>
          )}
          <label htmlFor="email">Email</label>
          <input
            className="password"
            id="password"
            type="password"
            placeholder="Insira sua senha."
            {...register("password")}
          />
          {errors.password?.message && (
            <p className="error">{errors.password.message}</p>
          )}
          <label htmlFor="password">Senha</label>
          <button type="submit">Logar</button>
        </form>
        <span>
          <Link to="/register">
            Crie sua conta para saborear muitas delícias e matar sua fome!
          </Link>
        </span>
        <button>
          <Link to="/register">Cadastrar</Link>
        </button>
      </div>
      <div className="image">
        <img src="#" alt="logo" />
      </div>
    </StyledLogin>
  );
};

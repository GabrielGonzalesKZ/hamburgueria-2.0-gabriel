import { StyledRegister } from "./styled";
import { Link, Navigate } from "react-router-dom";
import LoginImg from "../../assets/img/login.PNG";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Contexts/AuthContext";
import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../Components/Schemas/RegisterSchema";
import { UserContext } from "../../Contexts/UserContext";

export const Register = () => {
  const { loading } = useContext(AuthContext);
  const { registerUser } = useContext(UserContext);
  const token = localStorage.getItem("@TOKEN");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(registerSchema),
  });

  if (token) {
    return <Navigate to="/home" />;
  }

  return (
    <StyledRegister className="animate__animated animate__fadeInDown">
      <div>
        <form onSubmit={handleSubmit(registerUser)} noValidate>
          <div className="register">
            <h4>Cadastro</h4>
            <Link to="/login">Retornar para o login</Link>
          </div>
          <input
            id="name"
            type="text"
            placeholder="Insira seu nome."
            {...register("name")}
          />
          {errors.name?.message && (
            <p className="error">{errors.name.message}</p>
          )}
          <label htmlFor="name">Nome</label>
          <input
            className="email"
            id="email"
            type="email"
            placeholder="Insira seu email."
            {...register("email")}
          />
          {errors.email?.message && (
            <p className="error">{errors.email.message}</p>
          )}
          <input
            className="password"
            type="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          {errors.password?.message && (
            <p className="error">{errors.password.message}</p>
          )}
          <input
            className="confirmPassword"
            type="password"
            placeholder="Digite novamente sua senha"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword?.message && (
            <p className="error">{errors.confirmPassword.message}</p>
          )}
          <button type="submit">
            {loading ? "Cadastrando..." : "Cadastrar"}
          </button>
        </form>
      </div>
      <div className="image">
        <img src={LoginImg} alt="" />
      </div>
    </StyledRegister>
  );
};

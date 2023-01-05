import styled from "styled-components";

export const StyledLogin = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  width: 100vw;
  height: 100vh;

  h4 {
    font-weight: 700;
    font-size: 18px;
    color: #333333;
  }

  div {
    display: flex;
    max-width: 370px;
    width: 50%;
    background: #ffffff;
    border: 2px solid #f5f5f5;
    box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    margin: 0 25px;
    padding: 25px 25px;
    flex-direction: column;
  }

  .image {
    width: 50%;
    max-width: 370px;
    border-style: none;
    box-shadow: none;
    min-width: 300px;
  }

  .image img {
    width: 100%;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  label {
    font-weight: 400;
    font-size: 12px;
    color: #999999;
    margin-top: -65px;
    margin-left: 15px;
    background-color: #ffffff;
    width: 40px;
    text-align: center;
  }

  input {
    background: #ffffff;
    border: 2px solid #333333;
    border-radius: 8px;
    padding: 15px 15px;
  }

  .password {
    background: #ffffff;
    border: 2px solid #333333;
    border-radius: 8px;
    padding: 15px 15px;
    margin-top: 55px;
  }

  form button {
    padding: 0px 22px;
    height: 48px;
    background: var(--color-primary);
    border: 1.2182px solid var(--color-primary);
    border-radius: 4px;
    font-weight: 600;
    font-size: 16px;
    color: #ffffff;
    cursor: pointer;
    margin-top: 45px;
    margin-bottom: 20px;
  }

  form button:hover {
    background: #ff427f;
    border: 1.2182px solid #ff427f;
  }

  span {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
  }

  a {
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    color: #999999;
    text-decoration: none;
    width: 70%;
    margin-bottom: 20px;
  }

  a:hover {
    color: #343b41;
  }

  button {
    padding: 0px 22px;
    height: 48px;
    background: #f5f5f5;
    border: 1.2182px solid #f5f5f5;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
  }

  button a {
    font-weight: 600;
    font-size: 16px;
    text-align: center;
    color: #999999;
  }

  .error {
    font-weight: 400;
    font-size: 12px;
    color: #e83f5b;
    text-align: start;
    margin: -10px 0;
    padding: 0;
  }

  @media screen and (max-width: 769px) {
    flex-direction: column-reverse;

    div {
      min-width: 250px;
      margin-top: -110px;
    }

    .image {
      margin-top: 80px;
    }
  }
`;

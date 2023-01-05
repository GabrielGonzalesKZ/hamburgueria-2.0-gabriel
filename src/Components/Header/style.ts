import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  display: flex;
  flex-direction: row;
  height: 100%;
  max-height: 80px;
  align-items: center;
  width: 100%;

  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  div {
    display: flex;
    align-items: center;
  }

  img {
    width: 150px;
    height: 22px;
  }

  input {
    padding: 0px 10px 0px 15px;
    width: 365px;
    height: 60px;
    background: var(--color-background);
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-weight: 400;
    font-size: 16px;
    color: var(--color-grey-100);
  }

  button {
    padding: 0px 20px;
    width: 107px;
    height: 40px;
    background: var(--color-primary);
    border: 2px solid var(--color-primary);
    border-radius: 8px;
    margin-left: -120px;
    margin-right: 20px;
    font-weight: 500;
    font-size: 14px;
    color: var(--color-background);
    cursor: pointer;
  }
  button:hover {
    background: var(--color-primary-50);
    border: 2px solid var(--color-primary-50);
  }

  .divSearch {
    width: 53px;
    height: 40px;
    background: #27ae60;
    border: 2px solid #27ae60;
    border-radius: 8px;
    cursor: pointer;
    margin-left: -65px;
  }

  .search {
    width: 100%;
  }

  .divCart {
    display: flex;
    margin-left: 50px;
  }

  .cart {
    cursor: pointer;
    width: 25px;
    height: 25px;
  }

  .divLogout {
    cursor: pointer;
    margin-left: 50px;
  }

  .logout {
    cursor: pointer;
    width: 25px;
    height: 25px;
  }

  .itens {
    background: #27ae60;
    border-radius: 7px;
    padding: 2px 5px;
    font-weight: 900;
    font-size: 14px;
    color: #ffffff;
    margin-left: -13px;
    margin-top: -10px;
  }

  @media screen and (max-width: 1024px) {
    max-height: 150px;
    width: 100%;
    .header {
      flex-direction: column;
    }

    img {
      margin-bottom: 10px;
    }

    input {
      width: 100%;
      max-width: 365px;
      min-width: 120px;
      font-size: 12px;
    }

    div {
      display: flex;
      align-items: center;
    }

    .divSearch {
      margin-left: -40px;
      display: flex;
      justify-content: center;
    }

    .divCart {
      margin-right: -30px;
      margin-left: 27px;
    }

    .search {
      width: 20px;
      height: 20px;
      margin-top: 5px;
    }

    button {
      margin-left: -125px;
    }
  }
`;

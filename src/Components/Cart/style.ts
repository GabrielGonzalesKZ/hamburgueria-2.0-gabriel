import styled from "styled-components";

export const StyledCart = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-right: 10px;
  background-color: var(--color-grey-0);
  position: absolute;
  top: 15%;
  left: 35%;

  ul {
    max-height: 500px;
    overflow-x: auto;
  }

  .title {
    height: 65px;
    background: var(--color-primary);
    border-radius: 5px 5px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
  }

  .title p {
    font-weight: 700;
    font-size: 18px;
    color: var(--color-background);
    padding-left: 20px;
  }

  .title span {
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }

  .title span:hover {
    color: #333333;
  }

  .empty {
    width: 100%;
    background-color: var(--color-grey-0);
    height: 100%;
    min-height: 160px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }
  .empty p {
    margin: 0;
    font-weight: 700;
    font-size: 18px;
    text-align: center;
    color: #333333;
  }

  .empty span {
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    color: #828282;
    padding-top: 10px;
  }

  .text div {
    display: flex;
    align-items: center;
    text-align: center;
    width: 106.56px;
    height: 34px;
    border: 2px solid #f2f2f2;
    justify-content: space-between;
    margin-top: 15px;
  }

  .text div span {
    font-weight: 400;
    font-size: 22px;
    color: #eb5757;
    width: 30.44px;
    background: #f2f2f2;
    cursor: pointer;
  }

  .text div span:hover {
    color: #27ae60;
  }
  .card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 20px 10px;
  }

  .item {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .text {
    display: flex;
    flex-direction: column;
  }

  figure {
    width: 80px;
    height: 80px;
    background: #e0e0e0;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
  }

  img {
    width: 70px;
    height: 70px;
  }

  .item p {
    font-weight: 700;
    font-size: 14px;
    color: #333333;
    margin: 0;
  }

  .item span {
    font-weight: 400;
    font-size: 12px;
    color: #828282;
    margin: 0;
  }

  .remove {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #bdbdbd;
    cursor: pointer;
    border-style: none;
    background-color: transparent;
    margin-top: -20px;
  }

  .remove:hover {
    color: #333333;
  }

  .total {
    display: flex;
    flex-direction: column;
    border-top: 2px solid #e0e0e0;
  }

  .sum {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 20px;
    align-items: center;
  }

  .total button {
    padding: 0px 20px;
    width: 100%;
    height: 60px;
    background: #e0e0e0;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    cursor: pointer;
    margin-bottom: 10px;
    font-weight: 600;
    font-size: 16px;
    color: #828282;
  }

  .total button:hover {
    background-color: var(--color-secondary);
    border: 2px solid var(--color-secondary);
    color: var(--color-grey-0);
  }

  .btn {
    margin: 0 10px;
  }

  @media screen and (max-width: 1024px) {
    width: 80%;
    justify-content: center;
    margin: 0 auto;
    max-width: 600px;
    min-width: 290px;
    margin-top: -400px;
    position: relative;
    left: 0;
  }
`;

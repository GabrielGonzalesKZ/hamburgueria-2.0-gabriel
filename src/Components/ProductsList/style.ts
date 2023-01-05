import styled from "styled-components";

export const StyledProductsList = styled.li`
  width: 100%;
  max-width: 244px;
  height: 346px;
  background: var(--color-backgroud);
  border: 2px solid var(--color-grey-100);
  border-radius: 5px;
  margin: 0 25px 25px 25px;

  figure {
    width: 100%;
    height: 150px;
    background: var(--color-grey-0);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    object-fit: cover;
    height: 100%;
  }

  div {
    padding: 10px 20px;
  }

  .title {
    font-weight: 700;
    font-size: 18px;
    color: #333333;
  }
  .subtitle {
    font-weight: 400;
    font-size: 12px;
    color: #828282;
  }
  .price {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: var(--color-primary);
  }

  button {
    padding: 0px 20px;
    width: 106px;
    height: 40px;
    background: var(--color-primary);
    border: 2px solid var(--color-primary);
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    color: var(--color-background);
  }

  button:hover {
    background: var(--color-primary-50);
    border: 2px solid var(--color-primary-50);
  }

  @media screen and (max-width: 1024px) {
    min-width: 244px;
    margin: 0 10px 0px 10px;
  }
`;

import styled from "styled-components";

export const StyledProduct = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0;

  @media screen and (max-width: 1024px) {
    width: 100%;
    flex-wrap: nowrap;
    overflow-y: scroll;
  }
`;

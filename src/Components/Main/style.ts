import styled from "styled-components";

export const StyledMain = styled.main`
  height: 100%;
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 30px;
  padding: 0 20px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    padding: 0;
  }
`;

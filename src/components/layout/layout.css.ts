import { css } from '@emotion/core';
import styled from "@emotion/styled";

export default css`
  *{
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    
    & main{
      padding-top: calc(92px + 30px);
    }
  }
  `;

export const WrapperStyles = styled.div`
  max-width: 90rem;
  margin-right: auto;
  margin-left: auto;
`;

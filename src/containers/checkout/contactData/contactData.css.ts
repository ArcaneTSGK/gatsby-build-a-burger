import styled from '@emotion/styled';

export default styled.div`
  margin: 20px auto;
  width: 80%;
  text-align: center;
  box-shadow: 0 2px 3px #ccc;
  padding: 10px;
  border: 1px solid #eee;
  box-sizing: border-box;
  
  & input{
    display: block;
  }
  
  @media (min-width: 600px) {
    width: 500px;
  }
`;
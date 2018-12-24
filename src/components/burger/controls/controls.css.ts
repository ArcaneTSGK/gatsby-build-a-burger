import styled from "@emotion/styled";

export default styled.div`
width: 100%;
background-color: #f5f5f5;
display: flex;
flex-flow: column;
align-items: center;
box-shadow: 0 2px 1px #ccc;
margin: auto;
padding: 15px 0;
color: #333;

& .OrderButton {
  background-color: #ee5252;
  border-radius: 50px;
  outline: none;
  cursor: pointer;
  color: #fff;
  font-family: inherit;
  font-size: 1.2em;
  padding: 15px 30px;
  border: none;
  
  &:hover{
    background-color: rgb(240, 105, 105);
    color: #fff;
  }
  
  &:disabled{
    background-color: #ee5252;
    cursor: not-allowed;
    color: #888888;
  }
  
  &:not(:disabled){
    animation: enable 0.3s linear;
  }
}

@keyframes enable {
  0% {
      transform: scale(1);
  }
  60% {
      transform: scale(1.1);
  }
  100% {
      transform: scale(1);
  }
}
`;
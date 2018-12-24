import styled from "@emotion/styled";

export default styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 10px 0;

& label{
  padding: 10px;
  font-weight: bold;
  width: 80px;
}

& button{
  display: block;
  font: inherit;
  padding: 10px;
  margin: 0 5px;
  width: 80px;
  border: none;
  cursor: pointer;
  outline: none;
  
  &.less{
    background-color: rgb(240, 105, 105);
    color: white;
    
    &:hover{
      background-color: rgb(238,82,82);
      color: white;
    }
  }
  
  &.more{
    background-color: rgb(0, 188, 135);
    color: white;
    
    &:hover{
      background-color: rgb(55, 198, 153);;
      color: white;
    }
  }
  
  &:disabled{
    background-color: #AC9980;
    border: 1px solid #7E7365;
    color: #ccc;
    cursor: default;
    
    &:hover{
      background-color: #AC9980;
      color: #ccc;
      cursor: not-allowed;
    }
  }
}
`;
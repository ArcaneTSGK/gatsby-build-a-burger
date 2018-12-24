import styled from '@emotion/styled';

export default styled.header`
  position: fixed;
  width: 100%;
  z-index: 1000;
  background: #fff;
  padding: 30px;
  box-sizing: border-box;
  top: 0;
  left: 0;
  box-shadow: 0 8px 6px -6px black;
  
  & section {
    display: flex;
    max-width: 90 rem;
    position: relative;
    z-index: 2;
    justify-content: space-between;
    box-sizing: border-box;
    
    & div.logo {
      & img{
        display: flex;
        align-items: center;
        max-width: 50px;
      }
    }
    
    & nav {
      width: calc(100% - 284px);
      display: none;
      visibility: hidden;
      
      & a{
        text-decoration: none;
        text-transform: uppercase;
        color: #333;
        border-right: 1px solid #393939;
        padding: 0 15px;
        transition: all 0.3s ease;
        opacity: 0.7;
        align-self: center;
        
        &:last-child{
          border-right: none;
        }
        
        &:hover{
          opacity: 1;
        }
      }
      
      @media (min-width: 945px) {
        display: flex;
        visibility: visible;
        justify-content: flex-end;
      }
    }
  }
`;
import styled from '@emotion/styled';

interface IOrderStatusStyles {
  status: string;
}

const orderStatus = (props: IOrderStatusStyles): string => {
  switch (props.status) {
    case('pending'):
      return `border-left: 6px #333 solid;`;
      break;
    case('rejected'):
      return `border-left: 6px red solid;`;
      break;
    case('out'):
      return `border-left: 6px orange solid;`;
      break;
    case('delivered'):
      return `border-left: 6px green solid;`;
      break;
  }
};

export default styled.div`
  width: 80%;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 10px;
  margin: 10px auto;
  box-sizing: border-box;
  border-radius: 3px;
  ${(props: IOrderStatusStyles)=>orderStatus(props)}
  
  & ul {
    margin-top: 20px;
    list-style: none;
  }
`;
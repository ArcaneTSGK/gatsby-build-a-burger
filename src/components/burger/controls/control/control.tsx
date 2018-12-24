import * as React from 'react';
import StyledDiv from './control.css';

interface IBuildControlProps {
  label: string;
  added: any;
  removed: any;
}

export default ({ label, added, removed }: IBuildControlProps) => (
  <StyledDiv>
    <label className="label">{label}</label>
    <button className="less" onClick={removed}>-</button>
    <button className="more" onClick={added}>+</button>
  </StyledDiv>
);
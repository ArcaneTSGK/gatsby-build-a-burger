import * as React from 'react';
import { shallow } from 'enzyme';
import Layout from './layout';

describe('Layout Component', () => {
  let layout: any;

  beforeEach(() => {
    layout = shallow(<Layout location="" children={<div></div>} />);
  });

  it('should not be null', () => {
    expect(layout).not.toBeNull();
  });

  it('Should render properly',() => {
    expect(layout).toMatchSnapshot();
  });
});
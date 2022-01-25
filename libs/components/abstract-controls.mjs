import React from 'react';
import PropTypes from 'prop-types';
import ControlButton from './buttons.mjs';

/**
 * @property {array} functions: array of functions that will be mapped to buttons
 * @returns {import('@babel/types').JSXElement} 
 */

class Controls extends React.PureComponent {
  // take list of functions/actions
  // render one button child comopnent for each function that perform the finction bound to it
  constructor(props) {
    super(props);
  }

  render() {
    let funcList = this.props.functions.map((func) => {
        return <ControlButton func = {func} name = {}/>
    });
    // map a bunch of button components to each item in array
    return <span className='controls-component'>{funcList}</span>;
  }
}

Controls.propTypes = {
  functions: PropTypes.array.isRequired
};

export default Controls;

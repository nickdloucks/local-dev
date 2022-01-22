import React from 'react';
import PropTypes from 'prop-types';

class Controls extends React.PureComponent {
  // take list of functions/actions
  // render one button child comopnent for each function that perform the finction bound to it
  constructor(props) {
    super(props);
  }


  

  render() {
    let funcList = this.props.functions;
    // map a bunch of button components to each item in array
    return (
      <>
        <button className='button-{funcName}' onClick={}>{funcName}</button>
      </>
    );
  }
}
Controls.propTypes = {
  functions: PropTypes.array.isRequired
};
export default Controls;

import React from 'react';
import catPicture from '../pic/cat.png';

class Cat extends React.Component {
  render() {
    const { clientX, clientY } = this.props.mouse;
    return (
      <img
        src={catPicture}
        style={{
          position: 'absolute',
          width: '50px',
          left: clientX,
          top: clientY,
        }}
        alt="cat"
      />
    );
  }
}

export default Cat;

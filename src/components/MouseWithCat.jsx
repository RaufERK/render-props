import React from 'react';
import Cat from './Cat';

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { clientX: 0, clientY: 0 };
  }

  handleMouseMove({ clientX, clientY }) {
    this.setState({ clientX, clientY });
  }
  render() {
    const { clientX, clientY } = this.state;
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        <p>X:{clientX}!</p>
        <p>Y:{clientY}!</p>
        <Cat mouse={this.state} />
      </div>
    );
  }
}

export default Mouse;

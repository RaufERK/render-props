import React from 'react';

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
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

export default Mouse;

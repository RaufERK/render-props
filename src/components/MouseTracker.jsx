import React from 'react';
import Mouse from './Mouse';
import Cat from './Cat';

class MouseTracker extends React.Component {
  render() {
    return (
      <>
        <h1>MOUSE TRACKER</h1>
        <h1>Please Move your Mouse</h1>
        <Mouse render={(mouse) => <Cat mouse={mouse} />} />
      </>
    );
  }
}

export default MouseTracker;

import React, { PureComponent } from 'react';

class LayoutContainet extends PureComponent {

  render() {
    return (
      <div>
        incoming props:: {JSON.stringify(this.props)}
      </div>
    );
  }
}

export default LayoutContainet;

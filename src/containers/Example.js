import React, { PureComponent } from 'react';
import { pick } from 'ramda';
import { connect } from 'react-redux';
import SomeComponent from 'components/SomeComponent';
import AsyncServiceComp from 'containers/AsyncService';
import config from '../config';

const { url, name } = config.documentService;

export class ExampleContainer extends PureComponent {
  handleSubmit = () => {
  }

  render() {
    return (
      <div>
        <SomeComponent {...this.props} />
        <AsyncServiceComp
          name={name}
          url={url}
          childProps={{
            name: 'Ivan',
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = pick([]);

export default connect(mapStateToProps)(ExampleContainer);

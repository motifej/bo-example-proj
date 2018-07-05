import React, { Component } from 'react';
import { string, shape } from 'prop-types';
import bundleLoader from 'utils/bundleLoader';

class AsyncService extends Component {
  static propTypes = {
    name: string.isRequired,
    url: string.isRequired,
    childProps: shape({}),
  }
  static defaultProps = {
    childProps: {},
  }
  state = {
    scriptLoaded: false,
  }

  componentDidMount() {
    this.loadNestedApp();
  }

  async loadNestedApp() {
    const { name, url, childProps } = this.props;
    const docServApp = await bundleLoader(url, name);
    this.setState({ scriptLoaded: true });
    this.docServApp = docServApp;
    docServApp.render(name, childProps);
  }

  render() {
    return this.state.scriptLoaded ? (
      <div id={this.props.name} />
    ) : (
      <div>Loading...</div>
    );
  }
}

export default AsyncService;

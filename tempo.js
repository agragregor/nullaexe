class MyComponent extends React.Component {
  _handleUpdate = (state, value) => {
    this.setState({ [state]: value });
  }

  // Usage of _handleUpdate elsewhere in the component
  handleClick = () => {
    this._handleUpdate('count', this.state.count + 1);
  }
}

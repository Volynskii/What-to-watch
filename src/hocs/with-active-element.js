import React, {PureComponent} from "react";

const withActiveElement = (Component) => {
  class WithActiveElement extends PureComponent {
    constructor(props) {
      super(props);

      this._setActiveElement = this._setActiveElement.bind(this);
      this._resetActiveElement = this._resetActiveElement.bind(this);

      this.initialState = {activeElement: undefined};
      this.state = this.initialState;
    }

    render() {
      return <Component
      {...this.props}
      activeElement={this.state.activeElement}
      setActiveElement={this._setActiveElement}
      resetActiveElement={this._resetActiveElement}/>;
    }

    _setActiveElement(element) {
      this.setState({activeElement: element});
    }

    _resetActiveElement() {
      this.setState(this.initialState);
    }
  }

  return WithActiveElement;
};

export default withActiveElement;

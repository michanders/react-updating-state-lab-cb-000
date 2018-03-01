
import React from 'react';

export default class ClickityClick extends React.Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0,
    };
  }

  handleClick = () => {
    this.setState({
      timesClicked++
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}
